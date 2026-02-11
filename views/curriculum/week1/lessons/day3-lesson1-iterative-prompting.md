<!--
title: "Iterative Prompting: Refine, Don't Restart"
day: 3
lesson: 1
difficulty: 3
estimated_time: "11 min"
prerequisites:
  - "Day 1: Introduction to Prompt Engineering"
  - "Day 2: Writing Clear Instructions & Role-Based Prompting"
-->

# Iterative Prompting: Refine, Don't Restart

One of the biggest mistakes new prompt engineers make is treating every AI interaction as a one-shot deal. When the response isn't quite right, they scrap everything and start from scratch. Today you'll learn a better approach: **iterative prompting** -- the practice of refining your requests across multiple turns to progressively shape the output you need.

---

## Learning Objectives

By the end of this lesson, you will be able to:

1. Explain why iterative prompting produces better results than single-shot prompting
2. Apply the **General -> Focused -> Reformatted** iteration pattern
3. Write effective follow-up prompts that build on previous AI responses
4. Treat multi-turn conversations as a collaborative workflow

---

## Key Concepts

### The One-Shot Trap

Think about how you work with a human colleague. If a teammate drafts a design doc and it's missing a section, you don't say "forget everything, start over." You say "looks good -- can you also add an authentication section?" The same principle applies to AI.

**One-shot thinking:** "The response wasn't perfect, so my prompt must have been wrong. Let me try a completely different prompt."

**Iterative thinking:** "The response captured 70% of what I need. Let me guide the AI toward the remaining 30%."

### The Iteration Pattern: General -> Focused -> Reformatted

Most effective prompt iterations follow a three-stage pattern:

| Stage | Purpose | What You're Doing |
|-------|---------|-------------------|
| **General** | Establish the topic and scope | Getting the broad strokes on the table |
| **Focused** | Add specifics, constraints, or missing pieces | Drilling into the details that matter |
| **Reformatted** | Shape the output format for your needs | Making it usable for your actual workflow |

You don't always need all three stages. Sometimes two turns are enough. Sometimes you need five. The point is that each turn should **build on** the previous response rather than replace it.

### AI as a Collaborative Partner

The best mental model for iterative prompting is **pair programming**. You're the senior developer guiding direction; the AI is a capable partner doing the heavy lifting. You wouldn't expect a pair programming partner to read your mind on the first sentence -- you'd have a conversation.

---

## The Technique in Action

Let's walk through a real example: designing a REST API for a task management application.

### Turn 1: General -- Establish the Scope

**Your prompt:**
> Design a REST API for a task manager application. Include the main endpoints, HTTP methods, and a brief description of each.

**AI response (abbreviated):**
```
Task Manager API

Endpoints:
  GET    /tasks          - Retrieve all tasks
  POST   /tasks          - Create a new task
  GET    /tasks/:id      - Retrieve a specific task
  PUT    /tasks/:id      - Update a task
  DELETE /tasks/:id      - Delete a task

Request/Response format:
  Task object: { id, title, description, status, createdAt, updatedAt }
```

**Your assessment:** Good foundation, but the app needs user accounts and authentication. Rather than starting over, you *refine*.

### Turn 2: Focused -- Add Specifics

**Your prompt:**
> Good start. Now add authentication endpoints -- user registration, login, and logout. Also add an endpoint for filtering tasks by status (e.g., "completed", "in-progress"). Make sure each task is associated with a user.

**AI response (abbreviated):**
```
Updated Task Manager API

Authentication:
  POST   /auth/register   - Register a new user (email, password)
  POST   /auth/login       - Authenticate and receive JWT token
  POST   /auth/logout      - Invalidate the current token

Tasks (requires authentication):
  GET    /tasks            - Retrieve all tasks for authenticated user
  GET    /tasks?status=completed - Filter tasks by status
  POST   /tasks            - Create a task (linked to authenticated user)
  ...

Task object: { id, title, description, status, userId, createdAt, updatedAt }
User object: { id, email, hashedPassword, createdAt }
```

**Your assessment:** Now it has auth and filtering. But you need this in a standard spec format your team can use directly.

### Turn 3: Reformatted -- Shape the Output

**Your prompt:**
> Convert this API design to OpenAPI 3.0 spec in YAML format. Include request/response schemas, status codes (200, 201, 400, 401, 404), and example values for each endpoint.

**AI response:** A complete OpenAPI 3.0 YAML specification with schemas, examples, and proper status codes -- ready to drop into your project.

### What Just Happened

In three turns, you went from a vague idea to a production-ready API specification. Each prompt was short and targeted. The AI retained context from previous turns and built on it. If you had tried to cram all of this into a single prompt, it would have been a wall of text, and the output would likely have missed details.

---

## Common Mistakes

### 1. Starting Over Instead of Refining

**Bad pattern:**
- Prompt 1: "Design a REST API for task management"
- *Response is close but missing auth*
- Prompt 2 (new conversation): "Design a REST API for task management with authentication, filtering, JWT tokens, user registration..."

You're losing context and making yourself do more work. Build on what you have.

### 2. Vague Follow-Ups

**Bad follow-up:** "Make it better."

The AI doesn't know what "better" means to you. Be specific about *what* to change.

**Good follow-up:** "Add error response schemas for each endpoint. Include 400 for validation errors and 409 for duplicate email on registration."

### 3. Changing Too Many Things at Once

If you ask the AI to simultaneously add auth, change the format, restructure the data model, and add pagination -- the quality of each change drops. Focus each follow-up on one or two related modifications.

### 4. Not Referencing the Previous Response

**Weak:** "Add pagination."

**Stronger:** "The GET /tasks endpoint currently returns all tasks. Add cursor-based pagination with a `limit` parameter (default 20) and a `cursor` parameter for the next page."

Referencing what already exists helps the AI make precise edits.

---

## Practice Exercise

You asked an AI to help you write a function, and it gave you this response:

```python
def process_data(data):
    result = []
    for item in data:
        if item > 0:
            result.append(item * 2)
    return result
```

The function works, but it's not what you need for production. Write **three follow-up prompts** that progressively refine this code. Each prompt should address one concern:

1. **Follow-up 1 (Focused):** Ask the AI to add type hints, a docstring, and input validation (the function should raise a `ValueError` if `data` is not a list).

2. **Follow-up 2 (Focused):** Ask the AI to refactor the loop into a list comprehension and add logging for how many items were filtered out.

3. **Follow-up 3 (Reformatted):** Ask the AI to add a unit test class using `pytest` with at least three test cases: valid input, empty list, and invalid input.

**Challenge:** Try this exercise in your AI tool of choice. Notice how each follow-up builds on the accumulated context. Compare the final result against what you'd get from a single mega-prompt containing all requirements at once.

If you've been experimenting with the [Prompt Engineering Game](/prompt-engineering-game.html) from the bootcamp, try applying iterative prompting there -- submit an initial prompt, evaluate the response, and refine in the next round rather than starting fresh.

---

## Key Takeaways

- **Don't restart -- refine.** Each AI response is a draft you can shape, not a pass/fail test of your prompt.
- **Use the General -> Focused -> Reformatted pattern** to progressively narrow from broad concepts to specific, formatted output.
- **Be specific in follow-ups.** Reference what the AI already produced and state exactly what to add, remove, or change.
- **One concern per turn** keeps quality high and makes it easy to catch mistakes.
- **Multi-turn conversations are your most powerful tool.** The AI retains context -- use that to your advantage.

---

## Next Steps

In the next lesson, you'll learn how to **break complex tasks into smaller steps** -- a technique that pairs naturally with iterative prompting. Where iterative prompting refines a single output across turns, task decomposition splits a large goal into discrete prompts that each produce a focused result.

Proceed to: **Day 3, Lesson 2 -- Breaking Tasks into Smaller Steps**
