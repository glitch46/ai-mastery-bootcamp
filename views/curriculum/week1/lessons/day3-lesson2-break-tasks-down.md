<!--
title: "Breaking Tasks into Smaller Steps"
day: 3
lesson: 2
difficulty: 3
estimated_time: "12 min"
prerequisites:
  - "Day 1: Introduction to Prompt Engineering"
  - "Day 2: Writing Clear Instructions & Role-Based Prompting"
  - "Day 3, Lesson 1: Iterative Prompting"
-->

# Breaking Tasks into Smaller Steps

You've learned to refine responses iteratively. Now let's tackle a related but distinct skill: **task decomposition** -- breaking a large, complex request into a sequence of smaller, focused prompts. This is one of the most reliable ways to get high-quality output from AI on non-trivial projects.

---

## Learning Objectives

By the end of this lesson, you will be able to:

1. Recognize when a prompt is too broad for a single AI request
2. Apply the decomposition technique to split complex tasks into 4-7 sub-prompts
3. Structure sub-prompts so each one builds on the output of the previous step
4. Evaluate the quality benefits of decomposed prompts vs. monolithic prompts

---

## Key Concepts

### Why Large Prompts Fail

When you ask an AI to "build a full-stack app" or "write a comprehensive marketing plan" in a single prompt, several things go wrong:

- **Attention dilution.** The model has to juggle many requirements simultaneously. Details get dropped.
- **Shallow coverage.** Instead of going deep on any one area, the response skims the surface of everything.
- **Hard to review.** A 500-line response is difficult to evaluate. Errors hide in the volume.
- **All-or-nothing.** If one section is wrong, you're stuck trying to fix it while preserving everything else.

### The Decomposition Principle

The fix is the same principle you apply in software engineering every day: **break it down**.

A monolithic function that handles authentication, data validation, business logic, and response formatting is bad code. The same logic applies to prompts. One prompt should do one thing well.

### The Sweet Spot: 4-7 Sub-Prompts

For most complex tasks, decomposing into **4-7 sub-prompts** hits the right balance:

- Fewer than 4: you probably haven't broken it down enough
- More than 7: you might be micro-managing -- the AI can handle some complexity per step

This isn't a hard rule. A very complex project might need 10+ steps. But 4-7 is a strong default for most tasks.

---

## The Technique in Action

### The Bad Prompt

Let's start with what NOT to do:

> "Build me a full-stack task management application with a database, REST API, React frontend, authentication, and tests."

This prompt asks for five different engineering disciplines in one shot. The response will be superficial at best -- a sketch of each layer with no depth in any of them.

### The Decomposed Approach

Here's the same goal broken into focused sub-prompts, each producing a concrete, reviewable artifact:

---

**Step 1: Database Design**

> Design a PostgreSQL database schema for a task management app. Include tables for users and tasks. Tasks should have a title, description, status (todo/in-progress/done), priority (low/medium/high), due date, and timestamps. Include proper foreign keys, indexes, and constraints. Output as SQL CREATE statements.

*Why this works:* One clear deliverable (SQL schema). Specific column requirements. Named database technology. You can review and approve the schema before moving on.

---

**Step 2: API Routes**

> Using the database schema from our previous conversation, create Express.js route handlers for full CRUD operations on tasks. Include:
> - Input validation using Joi or Zod
> - Proper HTTP status codes (200, 201, 400, 404)
> - Error handling middleware
> - Parameterized SQL queries to prevent injection
>
> Organize the code with a routes file and a separate controller file.

*Why this works:* It references the schema from Step 1, specifies the framework, and defines quality expectations (validation, error handling, SQL injection prevention).

---

**Step 3: React Frontend**

> Build React components for the task list view of our task management app. Create:
> - A TaskList component that fetches and displays tasks from the GET /tasks endpoint
> - A TaskCard component showing title, status badge, priority, and due date
> - A CreateTaskForm component with validation
> - Use React Query (TanStack Query) for data fetching and cache management
>
> Use TypeScript and functional components with hooks.

*Why this works:* Specific component list. Named libraries. Clear technology choices. The AI focuses entirely on the frontend without getting distracted by backend concerns.

---

**Step 4: Authentication**

> Add JWT-based authentication middleware to our Express.js task management API. Include:
> - POST /auth/register -- hash passwords with bcrypt, store user, return JWT
> - POST /auth/login -- verify credentials, return JWT
> - An auth middleware function that validates the JWT on protected routes
> - Update the task routes to require authentication and scope queries to the authenticated user
>
> Show the middleware file and the updated route files.

*Why this works:* Authentication is isolated from the other concerns. Specific implementation details (JWT, bcrypt) prevent the AI from making choices you'd need to undo.

---

**Step 5: Integration Tests**

> Write integration tests for our task management API using Jest and Supertest. Cover:
> - User registration and login flow
> - Creating, reading, updating, and deleting tasks (authenticated)
> - Attempting task operations without authentication (should return 401)
> - Attempting to access another user's tasks (should return 404)
>
> Use a test database setup/teardown pattern. Include at least 10 test cases.

*Why this works:* Tests are written AFTER the implementation is settled, so they test the actual API. Specific test scenarios ensure coverage of auth, CRUD, and authorization edge cases.

---

### Comparing the Results

| Aspect | Monolithic Prompt | Decomposed (5 Steps) |
|--------|-------------------|----------------------|
| Schema quality | Generic, missing indexes | Production-ready with constraints |
| API error handling | Often missing | Explicitly requested and included |
| Frontend | Minimal or pseudo-code | Complete components with data fetching |
| Auth integration | Superficial | JWT + bcrypt + middleware + scoping |
| Tests | Usually omitted | 10+ targeted test cases |
| Review effort | High (parse 500+ lines) | Low (review each piece independently) |
| Time to usable code | Longer (more fixing) | Shorter (less rework) |

---

## When to Decompose vs. When to Keep It Simple

Not every prompt needs decomposition. Here's a quick decision guide:

**Keep it as one prompt when:**
- The task has a single, clear output (e.g., "Write a function that validates email addresses")
- The entire response fits in under ~50 lines
- There's only one technology or concept involved

**Decompose when:**
- The task spans multiple files, layers, or technologies
- You'd naturally break the work into separate tickets or PRs
- The word "and" appears more than twice in your request
- You find yourself writing a prompt longer than a paragraph

---

## Common Mistakes

### 1. Not Providing Context Between Steps

Each sub-prompt should reference relevant output from previous steps. Don't assume the AI will automatically connect them.

**Bad:** "Now write the frontend."

**Good:** "Using the API endpoints defined above (GET /tasks, POST /tasks, PUT /tasks/:id, DELETE /tasks/:id), build React components for..."

### 2. Going Too Granular

**Overly decomposed:**
- "Create the tasks table"
- "Now add the users table"
- "Now add the foreign key"
- "Now add an index on status"

This is micromanaging. The AI can handle "design a database schema with these tables and relationships" in one step.

### 3. Skipping the Review Between Steps

The power of decomposition is that you can **review and correct** after each step. If the schema from Step 1 is wrong, fix it before building routes on top of it. Don't just barrel through all five steps and hope for the best.

### 4. Rigid Ordering

Sometimes Step 3 reveals that you need to go back and adjust Step 1. That's fine -- it's the same as real development. Decomposition doesn't mean a strict linear pipeline; it means manageable chunks.

---

## Practice Exercise

Your task: decompose the following request into **5-7 focused sub-prompts**.

> "Create a weather dashboard web application that shows current weather and a 5-day forecast for any city, with a search function and the ability to save favorite cities."

Write out each sub-prompt in full. For each one, specify:
- What the prompt asks for
- What concrete output you expect (code file, schema, component, etc.)
- Which previous steps it depends on

**Example decomposition to get you started:**

**Sub-prompt 1: API Research and Data Model**
> I'm building a weather dashboard app. Using the OpenWeatherMap API (free tier), design a TypeScript interface for the data I'll need: current weather (temp, humidity, wind, conditions, icon) and 5-day forecast (daily high/low, conditions, icon). Also show the API endpoints I'll need to call and the query parameters required.

*Expected output:* TypeScript interfaces, API endpoint documentation
*Depends on:* Nothing -- this is the starting point

Now write sub-prompts 2 through 6 (or 7) covering: the search/geocoding logic, the UI components, the favorites feature (with local storage or a backend), styling, and error handling/loading states.

If you completed the [Prompt Engineering Game](/prompt-engineering-game.html) challenges from earlier in the bootcamp, think about how decomposition could have helped you score higher on the complex scenarios.

---

## Key Takeaways

- **Big prompts produce shallow results.** Decomposition lets you go deep on each piece.
- **Aim for 4-7 sub-prompts** for most complex tasks. Each should produce one reviewable artifact.
- **Reference previous outputs** in follow-up prompts to maintain continuity.
- **Review between steps.** Catching errors early prevents them from cascading through later steps.
- **Think like a developer:** if you'd split the work into multiple PRs or tickets, split the prompts the same way.

---

## Next Steps

You now know how to iterate on responses and how to break big tasks into small ones. But what happens when the AI gives you something completely off-target, and you're not sure why? In the next lesson, you'll learn how to **diagnose and clarify ambiguous prompts** -- the troubleshooting skill that ties these techniques together.

Proceed to: **Day 3, Lesson 3 -- Clarify Your Prompt**
