<!--
title: "Be Specific"
day: 1
lesson: 3
difficulty: 1
estimated_time: "9 min"
prerequisites: "Day 1 Lesson 1 - The Anatomy of a Great Prompt, Day 1 Lesson 2 - Provide Context"
-->

# Be Specific

You know the structure of a prompt (Lesson 1). You know how to set the scene with context (Lesson 2). Now it's time to sharpen the most actionable part of your prompt: the Details. Vague details produce vague output. Specific details produce output you can actually use.

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Apply the "if you can measure it, specify it" principle
- Identify the six dimensions of specificity in a prompt
- Transform generic prompts into specific, measurable ones
- Evaluate and rank prompts by their level of specificity

---

## Key Concepts

### The Core Principle: If You Can Measure It, Specify It

Here's a test you can apply to every prompt before you send it: **look at each requirement, and ask yourself, "Could two different people interpret this differently?"**

If yes, it's not specific enough.

- "Make it fast" --- how fast? Under 100ms? Under 1 second?
- "Write some tests" --- how many? Testing what? Using which framework?
- "Keep it clean" --- whose definition of clean? What style guide?
- "Add error handling" --- which errors? How should each one be handled? What should the user see?

Specificity isn't about being long-winded. It's about removing ambiguity.

### The Six Dimensions of Specificity

When adding details to a prompt, consider these six dimensions:

| Dimension | Question to Ask | Example |
|-----------|----------------|---------|
| **Quantity** | How many? How much? | "Write 5 unit tests" not "write tests" |
| **Format** | What shape should the output take? | "Return a JSON object with keys: id, name, status" |
| **Technology** | What specific tools, libraries, versions? | "Use Jest 29 with React Testing Library" |
| **Audience** | Who is this for? What's their skill level? | "The API docs should target developers familiar with REST but new to GraphQL" |
| **Quality Criteria** | What does 'good' look like? | "Each function should be under 20 lines, no nested callbacks deeper than 2 levels" |
| **Edge Cases** | What unusual inputs or conditions matter? | "Handle null values, empty arrays, and strings longer than 10,000 characters" |

You don't need to hit all six every time. But scanning this list before sending a prompt will almost always make it better.

---

## Examples

### Example 1: Writing Tests

**Generic Prompt:**
```
Write tests for the calculateTotal function.
```

The AI will produce *something*, but it'll guess the testing framework, the number of tests, and which cases matter. You'll spend time editing the output to match what you actually needed.

**Specific Prompt:**
```
Write 5 unit tests using Jest (v29) for the calculateTotal function
in src/utils/pricing.ts.

The function signature is:
calculateTotal(items: CartItem[], taxRate: number): number

Write tests for these specific cases:
1. Normal case: 3 items with positive prices and 8% tax
2. Empty array: should return 0
3. Zero tax rate: total should equal sum of item prices
4. Negative price (refund item): should subtract from total correctly
5. Very large numbers: 1 million items to verify no floating point drift

Each test should:
- Follow the pattern: describe > it("should [behavior] when [condition]")
- Use toBeCloseTo for floating point comparisons
- Include a brief comment explaining what the test validates
```

**What specificity adds here:** The AI produces exactly 5 tests, using the right framework, covering the cases you care about, formatted the way your team expects. You can drop the output into your codebase with minimal editing.

---

### Example 2: Writing Documentation

**Generic Prompt:**
```
Write docs for this API.
```

**Specific Prompt:**
```
Write API documentation for the POST /api/v2/deployments endpoint
in OpenAPI 3.0 YAML format.

Include:
- Summary and description (1-2 sentences each)
- Request body schema: all fields with types, required markers,
  and example values
- Response schemas for: 201 (created), 400 (validation error),
  401 (unauthorized), 409 (conflict - deployment already in progress)
- Each error response should include an `error_code` string and
  a human-readable `message`
- Add a realistic `example` block for the request and each response
- Tag it under "Deployments"

Here's the route handler for reference: [paste code]
```

---

### Example 3: Code Refactoring

**Generic Prompt:**
```
Refactor this code to be better.
```

"Better" is meaningless without a definition. Better *how*?

**Specific Prompt:**
```
Refactor the UserService class in src/services/user.service.ts.

Goals:
1. Extract the inline SQL queries into a separate UserRepository class
   (repository pattern)
2. Replace the nested try/catch blocks with a Result type pattern
   using neverthrow
3. Split the 180-line `createUser` method into smaller private methods,
   each under 30 lines
4. Add JSDoc comments to all public methods

Constraints:
- Keep the existing public method signatures unchanged (other services
  depend on them)
- Don't change the database schema or queries themselves, just move them
- The refactored code should pass the existing test suite without changes
```

**What specificity adds here:** The AI knows exactly which patterns to apply, what the size targets are, which parts are off-limits, and how to verify the refactoring didn't break anything.

---

### The Specificity Spectrum

It helps to think of specificity as a spectrum, not a binary:

```
Level 1 (Vague):     "Write a function"
Level 2 (Somewhat):  "Write a Python function that sorts a list"
Level 3 (Good):      "Write a Python function that sorts a list of
                      dictionaries by a given key, handling missing keys"
Level 4 (Specific):  "Write a Python 3.11 function called sort_records
                      that takes a list[dict] and a string key, returns
                      the list sorted by that key ascending. Records
                      missing the key should go at the end. Raise
                      ValueError if the list is empty. Include type
                      hints and a Google-style docstring."
```

Level 4 isn't always necessary. A quick one-off question might only need Level 2. But for anything going into your codebase, aim for Level 3 or 4.

---

## Practice Exercise

Rate each prompt below from 1 (least specific) to 4 (most specific) using the spectrum above. Then rewrite the Level 1 and Level 2 prompts to be at least Level 4.

**Prompt A:**
```
Create a REST endpoint.
```

**Prompt B:**
```
Write a Python script that reads a CSV file and prints the total
of the "amount" column, skipping rows where amount is missing or
non-numeric. Use the csv module from the standard library. Print
the result formatted as USD with 2 decimal places.
```

**Prompt C:**
```
Help me set up CI/CD.
```

**Prompt D:**
```
Write a React component that shows a list of users. It should have
a search bar.
```

<details>
<summary>See Ratings and Rewrites</summary>

**Prompt A: Level 1**
No language, no framework, no route, no behavior, no response format. The AI has almost nothing to work with.

**Rewrite:**
```
Create a REST endpoint in my Express.js (v4.18) TypeScript API.

Endpoint: GET /api/v1/products/:id
Behavior:
- Look up a product by ID in the PostgreSQL database using Prisma
- If found, return 200 with the product object (id, name, description,
  price, category, createdAt)
- If not found, return 404 with { error: "Product not found" }
- If the ID is not a valid UUID, return 400 with { error: "Invalid
  product ID format" }

Requirements:
- Use the existing prisma client from src/lib/prisma.ts
- Add input validation using zod
- Wrap the handler in the asyncHandler utility from src/middleware/async.ts
- Include JSDoc with @route and @access tags matching our other endpoints
```

**Prompt B: Level 4**
This is already specific: it names the language, the library, the input format, the edge cases, and the output format. Minimal rewriting needed.

**Prompt C: Level 1**
No platform, no language, no repository host, no pipeline stages, no deployment target.

**Rewrite:**
```
Set up a GitHub Actions CI/CD pipeline for my Node.js 20 TypeScript
project. The repository is a monorepo using pnpm workspaces with three
packages: api, web, and shared.

The pipeline should have two workflows:

1. CI (runs on every PR to main):
   - Install dependencies with pnpm
   - Run lint (pnpm lint) across all packages
   - Run type check (pnpm typecheck)
   - Run unit tests (pnpm test) with coverage
   - Fail if coverage drops below 80%
   - Run on Node 20 and 22

2. CD (runs on push to main after CI passes):
   - Build the api and web packages
   - Deploy api to AWS ECS using our existing task definition
     in infra/ecs-task.json
   - Deploy web to Vercel using the Vercel CLI
   - Post a Slack notification on success or failure using our
     SLACK_WEBHOOK_URL secret

Use caching for pnpm store and node_modules. Keep the workflow files
in .github/workflows/ named ci.yml and cd.yml.
```

**Prompt D: Level 2**
It names the framework and two features, but omits styling, data source, component structure, search behavior, and edge cases.

**Rewrite:**
```
Write a React 18 functional component in TypeScript called UserList.

Props:
- users: User[] where User has { id: string, name: string, email: string,
  role: "admin" | "member", avatarUrl: string | null }
- onUserClick: (userId: string) => void

Features:
1. Search bar at the top that filters users by name OR email as the
   user types (client-side, debounced at 300ms)
2. Display each user as a card showing avatar (or initials fallback
   if avatarUrl is null), name, email, and a role badge
3. Show a "No users found" message when the filter returns empty results
4. Show a count like "Showing 5 of 23 users" when filtering

Styling: Use Tailwind CSS utility classes. Cards in a responsive grid:
1 column on mobile, 2 on tablet, 3 on desktop.

Do not use any external UI libraries. Keep the component under 80 lines
by extracting a UserCard subcomponent.
```

</details>

---

## Key Takeaways

1. **"If you can measure it, specify it."** Wherever you'd use a subjective word (good, fast, clean, simple), replace it with a concrete requirement.
2. **Six dimensions to consider:** Quantity, Format, Technology, Audience, Quality Criteria, and Edge Cases.
3. **Specificity is a spectrum.** Match the level of detail to the stakes. Quick questions need less. Production code needs more.
4. **Specific prompts save more time than they cost.** The 60 extra seconds you spend writing a detailed prompt saves 10 minutes of editing mediocre output.
5. **You're not writing an essay.** Bullet points and short constraints are more effective than long paragraphs.

---

## Next Steps

You've now completed Day 1's core lessons on prompt engineering fundamentals:

- **Lesson 1:** The three-part structure (Context, Task, Details)
- **Lesson 2:** How to provide Context the AI can actually use
- **Lesson 3:** How to be Specific so the AI produces what you need the first time

These three skills are the foundation everything else in this bootcamp builds on. Before moving to Day 2, make sure you're comfortable applying all three in combination.

Head to the **Prompt Escape Rooms** to put it all together. Room 3 ("Specificity Sprint") challenges you to take vague prompts and make them as specific as possible before the clock runs out. Your score is based on how many of the six specificity dimensions you cover. Room 4 ("The Full Stack") combines all three lessons --- you'll need to construct complete prompts with Context, Task, and specific Details to "escape."

**Up next on Day 2:** You'll learn about *Role Prompting* and *Output Formatting* --- techniques that build directly on today's foundation.
