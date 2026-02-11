<!--
title: "Clarify Your Prompt: Diagnosing and Fixing Ambiguity"
day: 3
lesson: 3
difficulty: 3
estimated_time: "11 min"
prerequisites:
  - "Day 1: Introduction to Prompt Engineering"
  - "Day 2: Writing Clear Instructions & Role-Based Prompting"
  - "Day 3, Lesson 1: Iterative Prompting"
  - "Day 3, Lesson 2: Breaking Tasks into Smaller Steps"
-->

# Clarify Your Prompt: Diagnosing and Fixing Ambiguity

You've learned to iterate on responses and decompose complex tasks. But sometimes the AI gives you something completely off-target -- not wrong in quality, but wrong in *direction*. When that happens, the problem almost always traces back to **ambiguity in your prompt**. This lesson gives you a systematic method for finding and eliminating that ambiguity before you ever hit send.

---

## Learning Objectives

By the end of this lesson, you will be able to:

1. Identify the five most common sources of ambiguity in developer prompts
2. Apply the **Clarification Checklist** to any prompt before submitting it
3. Transform vague prompts into precise, actionable requests
4. Diagnose off-target AI responses by reverse-engineering what was ambiguous

---

## Key Concepts

### Why AI Misunderstands You

AI models don't ask clarifying questions by default (unless instructed to). When your prompt is ambiguous, the model picks the **most statistically likely interpretation** -- which may not be yours.

Consider this prompt:

> "Write about APIs."

What does the model do with this? It has to guess:
- Is this a blog post? Documentation? An essay? A tutorial?
- For beginners? Senior engineers? Non-technical stakeholders?
- How long? 100 words? 2,000 words?
- Which kind of APIs? REST? GraphQL? Operating system APIs?
- What tone? Academic? Casual? Technical?

The AI will produce *something* -- but the odds of it matching your intent are low. That's not a failure of the AI. It's a failure of the prompt.

### The Five Ambiguity Traps

Most vague developer prompts fall into one or more of these categories:

| Trap | What's Missing | Example |
|------|---------------|---------|
| **Unclear audience** | Who will read/use this? | "Explain microservices" -- for a CTO or a junior dev? |
| **Vague scope** | How much ground to cover? | "Write about testing" -- unit tests? E2E? Test strategy? |
| **Missing constraints** | Technology, length, format? | "Build a login system" -- which language? Which auth method? |
| **Undefined purpose** | What is this for? | "Write a README" -- for onboarding? For an open-source release? |
| **Ambiguous tone** | Formal? Casual? Technical depth? | "Describe our deployment process" -- for the team wiki or a client? |

### The Clarification Checklist

Before submitting any non-trivial prompt, run it through these five questions:

1. **Who is the audience?**
   Define who will consume the output. A tutorial for beginners reads very differently than documentation for senior engineers.

2. **What's the purpose?**
   State what the output will be used for. "An internal design doc for the team to review" gives the AI vastly different direction than "a blog post for our engineering blog."

3. **How long/detailed should it be?**
   Give a word count, line count, or complexity signal. "A brief overview" and "a comprehensive guide" produce wildly different results.

4. **What tone is appropriate?**
   Technical and precise? Conversational and approachable? Formal and executive-friendly?

5. **Are there constraints?**
   Name the language, framework, version, coding style, or any rules the output must follow. "Use Python 3.11+ with type hints" eliminates a whole category of guesswork.

Not every prompt needs all five. A quick "write a Python function to sort a list" is clear enough. But for anything involving explanation, documentation, architecture, or multi-file code -- run the checklist.

---

## The Technique in Action

### Before/After Example 1: The Tutorial

**Before (ambiguous):**
> "Write about APIs."

**Reverse-engineering the ambiguity:** No audience, no format, no scope, no technology, no length. The AI has to guess on every dimension.

**After (clarified):**
> "Write a 500-word beginner-friendly tutorial about REST APIs using Node.js with Express. Include code examples for a GET endpoint that returns a list of users and a POST endpoint that creates a new user. Use JSON for request/response bodies. Assume the reader knows basic JavaScript but has never built an API."

**What changed:**
- Audience: beginners who know basic JavaScript
- Purpose: tutorial (not reference docs, not blog post)
- Length: 500 words
- Constraints: Node.js, Express, REST, JSON
- Scope: GET and POST with specific examples

---

### Before/After Example 2: The Code Review

**Before (ambiguous):**
> "Review this code."

**What's wrong:** Review for what? Performance? Security? Readability? Style? Bugs? All of the above?

**After (clarified):**
> "Review this Express.js middleware function for security vulnerabilities. Specifically check for: SQL injection, missing input validation, improper error handling that could leak internal details, and any issues with the JWT verification logic. Format your review as a numbered list of findings, each with the line number, the issue, the severity (high/medium/low), and a suggested fix."

**What changed:**
- Purpose: security review (not general review)
- Scope: four specific vulnerability categories
- Format: numbered findings with severity and line numbers
- Context: Express.js middleware with JWT

---

### Before/After Example 3: The Architecture Prompt

**Before (ambiguous):**
> "Help me design a notification system."

**What's wrong:** What kind of notifications? What scale? What technology stack? Real-time or batched? Email? Push? In-app?

**After (clarified):**
> "Design a notification system for a SaaS application with ~10,000 active users. Requirements:
> - Support three channels: in-app, email, and push notifications
> - Users can configure which channels they want per notification type
> - In-app notifications should update in real-time (WebSocket or SSE)
> - Email should be sent asynchronously via a job queue
> - Tech stack: Node.js backend, PostgreSQL, Redis for pub/sub
>
> Provide a high-level architecture diagram (as ASCII art), the database schema for notification preferences and notification logs, and the key API endpoints."

**What changed:**
- Scale defined (10,000 users -- not 100, not 10 million)
- Channels specified (in-app, email, push)
- Technical requirements (real-time, async email, job queue)
- Technology constraints (Node.js, PostgreSQL, Redis)
- Expected deliverables (architecture, schema, endpoints)

---

## Diagnosing Off-Target Responses

When the AI gives you something unexpected, resist the urge to just re-prompt. Instead, diagnose:

1. **Read the response carefully.** What interpretation did the AI choose?
2. **Compare against your intent.** Where does the AI's interpretation diverge from yours?
3. **Find the ambiguity.** Which of the five traps did your prompt fall into?
4. **Rewrite and resubmit.** Address the specific ambiguity -- don't just add more words.

**Example diagnosis:**

You prompted: "Write a function to handle user data."

The AI wrote a function that parses a CSV file of user records.

**Diagnosis:** You meant "handle" as in "validate and sanitize user input from a web form." The AI interpreted "handle" as "process." The word "handle" was the ambiguity. The fix isn't adding more detail about CSV files -- it's replacing the vague verb.

**Revised:** "Write a TypeScript function that validates and sanitizes user registration data from a web form. Validate email format, password strength (min 8 chars, one uppercase, one number), and name length (2-50 chars). Return an object with `isValid: boolean` and `errors: string[]`."

---

## Common Mistakes

### 1. Adding Length Without Adding Clarity

**Bad fix:** "Write about APIs. Make it detailed and comprehensive and cover everything important."

You added words, but every one of them is vague. "Detailed," "comprehensive," and "everything important" are all subjective.

**Good fix:** Specify what "detailed" means to you -- which topics, which depth, which format.

### 2. Over-Constraining Simple Prompts

Not every prompt needs the full checklist. If you're asking "Write a Python function that reverses a string," you don't need to specify audience, tone, and word count. Match the level of specification to the complexity of the task.

### 3. Assuming Context the AI Doesn't Have

You know your project, your team's conventions, and your tech stack. The AI doesn't -- unless you tell it. Prompts like "update the service layer" assume the AI knows which service, which codebase, and which patterns you follow.

### 4. Using Jargon That Has Multiple Meanings

Words like "service," "controller," "handler," "module," and "component" mean different things in different frameworks. If there's any chance of confusion, be explicit: "an Express.js route handler function" is unambiguous; "a handler" is not.

---

## Practice Exercise

Apply the Clarification Checklist to each of these three ambiguous prompts. For each one:

1. Identify which of the five ambiguity traps it falls into
2. Write a clarified version that addresses all relevant checklist items

---

**Prompt A:**
> "Explain Docker."

*Hints: Who needs this explanation? How deep should it go? What's it for?*

---

**Prompt B:**
> "Write tests for the login feature."

*Hints: What kind of tests? Which framework? What should be covered? What's the tech stack?*

---

**Prompt C:**
> "Create documentation for our API."

*Hints: What kind of documentation? For whom? Which endpoints? What format?*

---

**Stretch goal:** Take one of the prompts from the [Prompt Engineering Game](/prompt-engineering-game.html) that you scored low on. Run your original prompt through the Clarification Checklist. Rewrite it and see if your score improves.

---

## Key Takeaways

- **Ambiguity is the #1 cause of off-target AI responses.** When the output is wrong, audit the prompt first.
- **Use the Clarification Checklist** (audience, purpose, length, tone, constraints) for any non-trivial prompt.
- **Diagnose before you rewrite.** Figure out *which* ambiguity caused the problem, then fix that specific thing.
- **Be precise with verbs and nouns.** "Handle," "process," "manage," and "work with" are vague. "Validate and sanitize user input" is not.
- **Match specification to complexity.** Simple tasks need simple prompts. Complex tasks need the checklist.

---

## Next Steps

You've now completed the Day 3 intermediate prompt engineering lessons. You can:

- **Iterate** on responses instead of restarting (Lesson 1)
- **Decompose** complex tasks into focused sub-prompts (Lesson 2)
- **Clarify** ambiguous prompts using a systematic checklist (Lesson 3)

These three techniques form the core of effective prompt engineering for software development. In Day 4, you'll start applying these skills to more advanced scenarios, including working with code generation, debugging prompts, and prompt patterns for specific development workflows.

Proceed to: **Day 4 -- Advanced Prompt Patterns for Developers**
