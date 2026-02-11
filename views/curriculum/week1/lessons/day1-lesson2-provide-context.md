<!--
title: "Provide Context"
day: 1
lesson: 2
difficulty: 1
estimated_time: "8 min"
prerequisites: "Day 1 Lesson 1 - The Anatomy of a Great Prompt"
-->

# Provide Context

In Lesson 1, you learned that every prompt needs Context, Task, and Details. Now we're going deep on Context --- the component most people skip entirely, and the one that makes the biggest difference.

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Explain why AI models need explicit context to produce relevant output
- Apply the "new team member" mental model when writing prompts
- Identify the five types of context that improve software development prompts
- Transform vague prompts into context-rich prompts

---

## Key Concepts

### Why Context Matters

Here's the fundamental thing to understand: **AI has no idea what you're working on.**

It doesn't know your programming language. It doesn't know your project structure. It doesn't know that you tried three other approaches before this one. It doesn't know your team uses tabs instead of spaces (or that your team has strong feelings about it).

Every prompt without context forces the AI into a guessing game. Sometimes it guesses right. More often, it gives you a technically correct answer to the wrong problem.

### The "New Team Member" Mental Model

Imagine a skilled developer just joined your team today --- their first day. They're good at their job, but they know nothing about your project. How would you ask them for help?

You wouldn't walk up and say:

> "Fix the bug."

You'd say:

> "We have a React app that manages inventory for warehouses. There's a bug on the dashboard page --- when a user filters by date range, products with null timestamps crash the filter instead of being excluded. Here's the component that handles it..."

**That's the level of context your prompts need.** Treat the AI like a talented colleague who just walked in the door.

### The Five Types of Context

When writing prompts for software development, these are the five categories of context to consider:

| Type | What to Include | Example |
|------|----------------|---------|
| **Tech Stack** | Languages, frameworks, versions, tools | "Python 3.11, FastAPI, SQLAlchemy 2.0, PostgreSQL 15" |
| **Project Scope** | What the project does, who it's for | "An internal dashboard for the ops team to monitor deployments" |
| **Current State** | What exists now, what's working, what's broken | "The auth middleware works, but the /refresh endpoint returns 401" |
| **Constraints** | Team standards, performance requirements, limitations | "Must stay under 200ms response time, no external dependencies allowed" |
| **History** | What you've already tried, why it didn't work | "I tried using useEffect but it creates an infinite loop" |

You don't need all five every time. Use judgment. A simple "write a function" prompt might only need Tech Stack and Constraints. A complex debugging session might need all five.

---

## Examples

### Example 1: "Fix the Bug"

**Vague Prompt (no context):**
```
Fix this bug in my code.
```

The AI will ask what language you're using, what the code does, and what the bug is. You've wasted a round trip.

**Context-Rich Prompt:**
```
I'm working on a Node.js 20 Express API that serves a React frontend.

The /api/orders endpoint returns a 500 error intermittently. It works
fine when the orders table has fewer than 100 rows, but fails with
larger datasets.

Here's the error from the server logs:
"RangeError: Maximum call stack size exceeded"

Here's the route handler:
[paste code]

I suspect the issue is in the recursive function that builds the
nested order->items->variants tree, but I'm not sure.

The database query itself returns correctly when I test it in pgAdmin.
```

**Why this works:** The AI now knows the stack, the symptom, the conditions that trigger it, the error message, the suspect area, and what you've already ruled out. It can jump straight to solving the problem.

---

### Example 2: "Write a Migration"

**Vague Prompt:**
```
Write a database migration to add a new field.
```

**Context-Rich Prompt:**
```
I'm using Django 4.2 with PostgreSQL 15. The project is a SaaS platform
where each tenant has their own set of users.

I need to add an `is_verified` boolean field to the existing
`accounts_user` table. This table currently has about 2 million rows
in production.

The field should default to False for existing rows. Our team convention
is to include both the forward migration and a reverse migration that
removes the field. We name migrations with a brief description, like
0042_add_user_verified_field.

We also need to avoid locking the table during the migration since
this is a production database serving live traffic.
```

**What context adds here:** Without context, the AI might generate a migration for the wrong ORM, use a pattern that locks a 2M-row table, skip the reverse migration, or use a naming convention your team doesn't follow.

---

### Example 3: "Help Me With This Error"

**Vague Prompt:**
```
I'm getting a type error. Help.
```

**Context-Rich Prompt:**
```
I'm building a CLI tool in Rust (edition 2021) using the clap crate
(v4.4) for argument parsing and reqwest for HTTP requests.

When I run `cargo build`, I get this error:

error[E0308]: mismatched types
  --> src/client.rs:47:24
   |
47 |     let response = client.get(url).send()?;
   |                                     ^^^^ expected `Result<Response,
   |                     Error>`, found `impl Future<Output = Result<...>>`

I think this is an async issue. The function `fetch_data` is not marked
async, but reqwest's `send()` returns a future. I want to keep this
function synchronous because the rest of my codebase is sync. I'm using
reqwest version 0.11 with the "blocking" feature in Cargo.toml.
```

**What context adds here:** The AI immediately sees this is a sync/async mismatch, knows the developer wants to stay synchronous, and knows the blocking feature should already handle this --- so the real fix is likely a different import (`reqwest::blocking::Client` vs `reqwest::Client`). Without that context, the AI might suggest converting everything to async.

---

## Practice Exercise

Below are three vague prompts. Rewrite each one by adding appropriate context. Use the five context types (Tech Stack, Project Scope, Current State, Constraints, History) as a checklist.

**Prompt 1:**
```
How do I set up authentication?
```

**Prompt 2:**
```
This function is too slow. Optimize it.
```

**Prompt 3:**
```
Write a Dockerfile for my app.
```

<details>
<summary>See Suggested Rewrites</summary>

**Prompt 1 Rewrite:**
```
Tech Stack: I'm building a Next.js 14 app (App Router) with TypeScript
and Prisma ORM connected to a PostgreSQL database on Supabase.

Project Scope: It's a project management tool where users belong to
organizations. Each org has admins and members with different permissions.

Current State: I have the User and Organization models defined in Prisma
but no auth implemented yet. The app currently has no login page.

Constraints: I'd like to use NextAuth.js (Auth.js v5) with Google OAuth
as the initial provider. Session data should include the user's org ID
and role. Must support adding email/password login later.

How do I set up authentication for this project? Please walk me through
the key files I need to create or modify.
```

**Prompt 2 Rewrite:**
```
Tech Stack: Python 3.12, pandas 2.1, running on an AWS Lambda with
256MB memory and a 30-second timeout.

Project Scope: This Lambda processes daily CSV exports from our ERP
system and loads them into Redshift.

Current State: The `transform_records` function takes 45 seconds on
a 500K-row CSV, which exceeds our Lambda timeout. It works correctly
on smaller files.

History: I profiled it with cProfile and the bottleneck is a nested
for-loop that checks each row against every other row to find
duplicates (O(n^2)). I tried converting to a set lookup, but the
comparison involves multiple columns.

Constraints: Cannot increase Lambda timeout or memory (org policy).
The function signature must stay the same since other Lambdas call it.

Here's the function: [paste code]

How can I optimize this to run within 30 seconds for 500K rows?
```

**Prompt 3 Rewrite:**
```
Tech Stack: Go 1.21 service using the Gin framework, with a PostgreSQL
database. The app is built with `go build` and produces a single binary.

Project Scope: It's an internal REST API for our CI/CD pipeline that
manages deployment configurations.

Current State: The app runs fine locally with `go run main.go`. No
existing Dockerfile.

Constraints:
- Production image must be as small as possible (use multi-stage build)
- Must run as a non-root user
- Needs to include ca-certificates for outbound HTTPS calls
- The app reads config from environment variables (no config files to copy)
- Expose port 8080
- Our registry requires images based on Alpine or distroless

Write a production-ready Dockerfile following these constraints.
```

</details>

---

## Key Takeaways

1. **AI has no background knowledge about your project.** Everything it needs to know, you need to tell it.
2. **Use the "new team member" test.** If a skilled developer on their first day wouldn't understand your request, neither will the AI.
3. **Five types of context to consider:** Tech Stack, Project Scope, Current State, Constraints, and History.
4. **Context eliminates guessing.** Every piece of context you provide is one less assumption the AI makes --- and one fewer wrong answer you have to correct.
5. **You don't always need all five types.** Match the depth of context to the complexity of the task.

---

## Next Steps

You've learned how to set the scene with Context. But even a well-contextualized prompt can fall flat if the Task and Details are vague. In the next lesson, we'll tackle **specificity** --- how to tell the AI exactly what you want, down to measurable dimensions.

Try **Prompt Escape Rooms**, Room 2 ("Context is King") to practice adding context to prompts in timed scenarios. You'll be given stripped-down prompts and challenged to add enough context for the AI to produce a working solution in one shot.

**Next Lesson:** [Day 1, Lesson 3 - Be Specific](day1-lesson3-be-specific.md)
