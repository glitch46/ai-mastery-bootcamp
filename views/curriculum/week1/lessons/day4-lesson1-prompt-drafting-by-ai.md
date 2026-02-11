<!--
title: "Prompt Drafting by the AI: Let the Model Tell You What It Needs"
day: 4
lesson: 1
difficulty: 4
estimated_time: "12 min"
prerequisites:
  - "Day 1: Introduction to Prompt Engineering"
  - "Day 2: Writing Clear Instructions & Role-Based Prompting"
  - "Day 3: Iterative Prompting, Task Decomposition & Clarification"
-->

# Prompt Drafting by the AI: Let the Model Tell You What It Needs

Here's an uncomfortable truth: you don't always know what information the AI needs to give you a great answer. You can spend ten minutes crafting a detailed prompt and still miss a critical piece of context. Today you'll learn to flip the script -- instead of guessing what to include, **ask the AI to tell you what it needs**.

This is called **meta-prompting**, and it's one of the most powerful advanced techniques in prompt engineering.

---

## Learning Objectives

By the end of this lesson, you will be able to:

1. Explain the meta-prompting pattern and why it reduces wasted iterations
2. Use the "What do you need from me?" technique to surface hidden requirements
3. Apply prompt drafting to complex software development tasks
4. Evaluate when meta-prompting is worth the extra turn vs. prompting directly

---

## Why This Matters

Most prompt engineering advice focuses on *how to write better prompts*. But there's a fundamental problem: for complex tasks, **you don't know what you don't know**.

Consider database schema design. You might provide the entity names and a few relationships, then wonder why the AI's output doesn't account for soft deletes, audit trails, multi-tenancy isolation, or your team's naming conventions. It's not that you forgot -- it's that you didn't realize those details would shape the output.

Meta-prompting solves this by turning the AI into a **requirements interviewer**. Instead of you pushing information at the model, the model pulls the right information from you.

The result: fewer iterations, more targeted output, and the discovery of requirements you hadn't considered.

---

## The Technique Explained

### The Meta-Prompting Pattern

The pattern has three steps:

| Step | What You Do | What Happens |
|------|-------------|--------------|
| **1. Ask** | Tell the AI your goal and ask what information it needs | AI generates a requirements checklist tailored to the task |
| **2. Fill** | Answer each item on the checklist | You provide precisely the context the AI needs -- no more, no less |
| **3. Generate** | Ask the AI to produce the output using your answers | AI generates highly targeted output based on complete context |

**Step 1 -- The meta-prompt:**

> "I want to [goal]. Before you start, what information do you need from me to do this well?"

That's it. One sentence changes the entire dynamic.

### Why This Works

When you ask the AI "what do you need?", the model draws on its training data -- thousands of similar projects, design docs, and technical discussions -- to surface the dimensions that matter for *this specific task*. It knows, from pattern recognition, what variables affect the quality of a database schema, a deployment strategy, or a marketing plan. You're tapping into that knowledge to build a better prompt.

### When to Use It

Meta-prompting adds an extra conversational turn, so it's not always worth it. Use it when:

- **The task is complex** -- multi-step, multi-concern, or requires domain knowledge
- **You're not sure what context matters** -- you know the goal but not the details that shape it
- **The cost of iteration is high** -- generating the output takes significant tokens or time
- **You're outside your expertise** -- you need the AI's knowledge of what questions to ask

Skip it when the task is straightforward: "Write a Python function to validate an email address" doesn't need a requirements interview.

---

## Real-World Walkthrough

### Scenario: Designing a Database Schema

Let's walk through this with a real developer task.

**Step 1: The meta-prompt**

> "I need to design a database schema for a multi-tenant SaaS application. Before you generate anything, what information do you need from me to create a well-designed schema?"

**AI response (typical):**

> To design a solid multi-tenant database schema, I'd need to know:
>
> 1. **Tenancy model** -- Shared database with tenant ID column? Separate schemas per tenant? Separate databases?
> 2. **Core entities** -- What are the main objects in the system? (e.g., users, projects, invoices, etc.)
> 3. **Relationships** -- How do entities relate? One-to-many, many-to-many?
> 4. **Authentication/authorization** -- Do tenants have roles? Are there tenant admins vs. regular users?
> 5. **Data isolation requirements** -- Can any data be shared across tenants, or is everything strictly isolated?
> 6. **Audit requirements** -- Do you need created_at/updated_at timestamps? Soft deletes? Change history?
> 7. **Scale expectations** -- Rough number of tenants? Records per tenant? Read-heavy or write-heavy?
> 8. **Database engine** -- PostgreSQL, MySQL, MongoDB, etc.?
> 9. **Naming conventions** -- snake_case? Plural table names? Prefix conventions?
> 10. **Existing constraints** -- Any existing tables this needs to integrate with?

Look at that list. Items 5, 6, 7, and 9 are things many developers wouldn't think to include in their initial prompt. The AI just surfaced them for you.

**Step 2: Fill in the answers**

> Here are the details:
>
> 1. Shared database with tenant_id column on all tenant-scoped tables
> 2. Core entities: tenants, users, projects, tasks, comments, attachments
> 3. Tenants have many users, users have many projects, projects have many tasks, tasks have many comments. Attachments can belong to tasks or comments (polymorphic).
> 4. Three roles: tenant_admin, member, viewer. Tenant admins manage users within their tenant.
> 5. Strictly isolated -- no cross-tenant data sharing. Row-level security preferred.
> 6. All tables need created_at, updated_at. Soft deletes on users, projects, and tasks (deleted_at column). No change history needed yet.
> 7. Target: 500 tenants, up to 10,000 users per tenant, read-heavy (80/20).
> 8. PostgreSQL 15
> 9. snake_case, plural table names, foreign keys suffixed with _id
> 10. No existing tables -- greenfield

**Step 3: Generate**

> "Based on the requirements above, generate the PostgreSQL schema. Include table definitions with constraints, indexes for common queries, and row-level security policies for tenant isolation."

The AI now has *everything* it needs. The resulting schema will account for polymorphic attachments, RLS policies, appropriate indexes for read-heavy workloads, and your naming conventions -- all because you let the AI tell you what context to provide.

---

## Advanced Tips

### 1. Stack Meta-Prompting With Role Assignment

Combine this with a role prompt for even better requirements questions:

> "You are a senior database architect with 15 years of experience designing multi-tenant systems. I need to design a database schema for a new SaaS application. What information do you need from me to create a production-ready schema?"

The role primes the model to ask *expert-level* questions it might skip otherwise.

### 2. Use It for Prompt Templates

Meta-prompting is excellent for creating reusable prompt templates:

> "I frequently need to write technical design documents for new features. What information should I always provide you to generate a high-quality design doc?"

Save the AI's response as a template. Next time, fill in the blanks and skip the meta-prompt step entirely.

### 3. Challenge the Checklist

The AI's requirements list isn't always complete. After receiving it, ask:

> "Are there any other considerations you'd want to know about that you didn't list? Anything that's often overlooked in [this type of task]?"

This second pass often surfaces edge cases and non-obvious requirements.

### 4. Use It When You're Stuck

Meta-prompting is a powerful unblocking tool. If you're staring at a blank prompt and don't know where to start, the "what do you need?" question gives you a structured starting point. It turns a blank page into a form to fill out.

---

## Practice Exercise

Use the meta-prompting pattern for each of the following three scenarios. For each one:

1. Write the meta-prompt (the "what do you need from me?" question)
2. Review the AI's requirements checklist
3. Fill in realistic answers
4. Submit the final generation prompt

---

**Scenario A: Marketing Strategy**

You're a developer who just launched a side project -- an open-source CLI tool for managing Docker containers. You want the AI to help you create a marketing strategy to get your first 1,000 GitHub stars.

*Start with:* "I want to create a marketing strategy for my open-source CLI tool. What information do you need from me to create an effective plan?"

---

**Scenario B: Technical Documentation**

Your team needs to write API documentation for a payment processing service. The docs will be public-facing and used by third-party developers integrating with your API.

*Start with:* "I need to write comprehensive API documentation for a payment processing service. What information do you need from me to generate documentation that third-party developers will find useful?"

---

**Scenario C: Team Workshop**

You've been asked to run a 90-minute workshop for your engineering team on incident response procedures.

*Start with:* "I need to plan a 90-minute workshop on incident response for my engineering team. What information do you need from me to create an effective workshop plan?"

---

**For each scenario:** Compare the AI's requirements list against what you would have included on your own. Note any items you wouldn't have thought to specify. That gap is the value of meta-prompting.

---

## Key Takeaways

- **You don't always know what context the AI needs.** Meta-prompting lets the model tell you, drawing on its pattern recognition across thousands of similar tasks.
- **The pattern is simple:** Ask your goal, request a requirements checklist, fill it in, then generate.
- **It surfaces hidden requirements.** The AI will often ask about dimensions you hadn't considered -- scale, edge cases, conventions, audience.
- **Use it for complex tasks** where the cost of a bad first attempt is high. Skip it for simple, well-defined requests.
- **Combine it with role prompts** for expert-level requirements gathering.
- **Save the checklists as templates** for tasks you repeat often.

---

## Next Steps

You now know how to get the AI to help you craft better prompts. But even with perfect context, the AI's response might not *sound* right -- too casual for a design doc, too dense for a README, too shallow for a senior audience. In the next lesson, you'll learn how to **control the tone and depth** of AI outputs with precision.

Proceed to: **Day 4, Lesson 2 -- Adjusting Tone and Depth**
