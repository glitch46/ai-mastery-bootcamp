<!--
title: "The Anatomy of a Great Prompt"
day: 1
lesson: 1
difficulty: 1
estimated_time: "8 min"
prerequisites: "None - this is your starting point"
-->

# The Anatomy of a Great Prompt

Every great prompt has structure. Most people type whatever comes to mind and hope the AI figures it out. Sometimes it works. Usually it doesn't --- at least not the way you wanted. In this lesson, you'll learn the three components that separate a prompt that *works* from a prompt that wastes your time.

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Name the three core components of an effective prompt
- Identify which component is missing from a weak prompt
- Construct a prompt that includes Context, Task, and Details
- Explain why structure improves AI output quality

---

## Key Concepts

### The Three Components

Every effective prompt is built from three parts:

| Component | What It Does | Answers the Question |
|-----------|-------------|---------------------|
| **Context** | Tells the AI *who you are* and *what situation you're in* | "What's the background here?" |
| **Task** | Tells the AI *what you want it to do* | "What should I produce?" |
| **Details / Constraints** | Tells the AI *how to do it* and *what boundaries to respect* | "Are there rules I should follow?" |

Think of it like giving directions to someone who has never been to your city. You wouldn't just say "go to the store." You'd say *which* store, *where* it is, and maybe *which route to avoid* during rush hour.

### Why This Matters

AI models are powerful, but they have zero knowledge about your specific project, your codebase, your team's conventions, or what you tried before. Every piece of structure you add to a prompt eliminates a guess the AI would otherwise have to make. Fewer guesses means fewer wrong answers.

---

## Examples

### Example 1: Writing a React Component

**Bad Prompt:**
```
make a component
```

What's wrong here? There's no Context (what project? what framework version?), a vague Task (what kind of component?), and zero Details (styling approach? props? state?).

**Good Prompt:**
```
Context: I'm building a React 18 e-commerce app using TypeScript and Tailwind CSS.

Task: Create a ProductCard component that displays a product's image, name,
price, and an "Add to Cart" button.

Details:
- Use functional component syntax with proper TypeScript interfaces for props
- The price should format as USD currency
- The "Add to Cart" button should accept an onClick handler passed as a prop
- Make the card responsive: stack vertically on mobile, horizontal on tablet+
- Do not use any external component libraries
```

The good prompt gives the AI everything it needs in one shot. No back-and-forth. No "actually, I meant..."

---

### Example 2: Debugging Help

**Bad Prompt:**
```
my code doesn't work, fix it
```

**Good Prompt:**
```
Context: I have a Node.js Express API (v4.18) using PostgreSQL. The /api/users
endpoint should return a paginated list of users.

Task: Help me find and fix the bug causing a 500 error on this endpoint.

Details:
- The error only happens when the `page` query parameter is missing
- Here's the error from the logs: "TypeError: Cannot read properties of
  undefined (reading 'toString')"
- Here's the relevant route handler: [paste code]
- Expected behavior: when `page` is omitted, default to page 1
```

---

### Example 3: Code Review

**Bad Prompt:**
```
review this code
```

**Good Prompt:**
```
Context: I'm a junior developer submitting my first PR to a production
Python FastAPI service. The codebase follows PEP 8 and uses type hints
throughout.

Task: Review the following function for bugs, performance issues, and
style violations.

Details:
- Focus especially on error handling --- this function processes payments
- Flag any security concerns (SQL injection, input validation)
- Suggest improvements but keep the current function signature
- Rate severity of each issue as low/medium/high
```

---

### Breaking Down the Pattern

Notice how each good prompt follows the same skeleton:

```
Context:  [Who I am / What I'm working on / What tech I'm using]
Task:     [The specific thing I need the AI to produce or do]
Details:  [Constraints, formats, edge cases, preferences]
```

You don't need to literally write "Context:" and "Task:" as labels (though it doesn't hurt). What matters is that all three components are present.

---

## Practice Exercise

Below are three prompts. For each one, identify which component(s) are **present** and which are **missing**. Then rewrite the prompt to include all three.

**Prompt A:**
```
Write unit tests for the login function.
```

**Prompt B:**
```
I'm working on a Django REST Framework app with a PostgreSQL database.
The User model has custom fields for organization and role. Fix the
serializer.
```

**Prompt C:**
```
I need a function. It should be fast and clean.
```

<details>
<summary>See Suggested Answers</summary>

**Prompt A Analysis:**
- Context: Missing (what language? what framework? what does login do?)
- Task: Present ("write unit tests")
- Details: Missing (how many tests? what testing framework? what edge cases?)

**Rewrite:**
```
Context: I have a TypeScript Express app. The login function in
auth.service.ts takes an email and password, validates them against a
PostgreSQL database, and returns a JWT token.

Task: Write unit tests for the login function.

Details:
- Use Jest with ts-jest
- Cover: valid credentials, wrong password, non-existent user, empty
  inputs, and SQL injection attempts
- Mock the database calls
- Each test should have a descriptive name following "should [expected
  behavior] when [condition]" format
```

**Prompt B Analysis:**
- Context: Present (Django, DRF, PostgreSQL, custom User model)
- Task: Partially present ("fix the serializer" --- but which serializer? what's broken?)
- Details: Missing (what error? what's the expected behavior?)

**Rewrite:**
```
Context: I'm working on a Django REST Framework app (Django 4.2, DRF 3.14)
with PostgreSQL. The User model has custom fields: organization (ForeignKey)
and role (CharField with choices).

Task: Fix the UserSerializer so that creating a new user through the
POST /api/users/ endpoint correctly saves the organization and role fields.

Details:
- Currently, POST requests return 201 but organization and role are null
  in the database
- The fields appear in the serializer's `fields` list
- Here's my serializer: [paste code]
- Explain what caused the bug, not just the fix
```

**Prompt C Analysis:**
- Context: Missing entirely
- Task: Barely present ("a function" --- doing what?)
- Details: Vague ("fast and clean" is subjective)

**Rewrite:**
```
Context: I'm building a Go microservice that processes CSV uploads
containing up to 1 million rows of transaction data.

Task: Write a function that parses a CSV file and returns a slice of
Transaction structs.

Details:
- Use the encoding/csv standard library
- Stream the file line-by-line (do not load entire file into memory)
- Skip rows where the amount field is empty or non-numeric
- Return an error if the CSV has fewer than the 5 required columns
- Include Go doc comments on the function
```

</details>

---

## Key Takeaways

1. **Every effective prompt has three parts:** Context, Task, and Details/Constraints.
2. **Missing components force the AI to guess** --- and its guesses often don't match your intent.
3. **You don't need a rigid template.** Just make sure all three components are present in some form.
4. **Better prompts save time.** One well-structured prompt beats five rounds of "no, I actually meant..."

---

## Next Steps

You now know the *structure* of a good prompt. In the next lesson, we'll zoom into the first component --- **Context** --- and learn exactly how to give AI the background it needs to produce useful output.

When you're ready, head to the **Prompt Escape Rooms** game to practice identifying prompt components under pressure. Room 1 ("The Missing Pieces") is designed to reinforce exactly what you learned here.

**Next Lesson:** [Day 1, Lesson 2 - Provide Context](day1-lesson2-provide-context.md)
