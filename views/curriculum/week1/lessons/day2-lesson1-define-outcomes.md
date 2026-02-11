<!--
title: Define Outcomes - Making Your Expectations Explicit
day: 2
lesson: 1
difficulty: 2
estimated_time: 9 min
prerequisites:
  - day1-lesson1-what-is-prompt-engineering
  - day1-lesson2-first-prompt
-->

# Define Outcomes: Making Your Expectations Explicit

Yesterday you wrote your first prompts and saw how small changes in wording produce
different results. Today we raise the bar: you will learn to **define the outcome
before you write the prompt**. This single habit eliminates most of the "that's not
what I wanted" moments when working with AI.

---

## Learning Objectives

By the end of this lesson you will be able to:

1. Explain why explicit outcome definitions produce better AI responses.
2. Apply the **[Task] in [Format] using [Tone] for [Audience]** template to any
   developer scenario.
3. Choose the right structure and tone for at least four common development tasks.
4. Rewrite a vague prompt into one that specifies format, tone, and audience.

---

## Key Concepts

### Why Outcomes Matter

When you ask a colleague to "write something up about the new auth flow," you might
get a Slack message, a Confluence page, or a full RFC. The same ambiguity applies to
AI. If you have a desired structure or tone, **make it explicit**. The AI cannot read
your mind, but it is remarkably good at following clear instructions.

> **Rule of thumb:** If you would clarify the request when delegating to a junior
> developer, you need to clarify it for the AI too.

### The Outcome Template

Use this template as your starting point for any prompt:

```
[Task] in [Format] using [Tone] for [Audience]
```

Each slot removes a category of ambiguity:

| Slot       | What It Controls                          | Example Value                        |
|------------|-------------------------------------------|--------------------------------------|
| **Task**   | The action or deliverable                 | "Explain the retry logic"            |
| **Format** | The structure of the output               | "Step-by-step numbered guide"        |
| **Tone**   | The voice and register                    | "Technical but approachable"         |
| **Audience** | Who will read or use the result         | "Backend engineers new to the team"  |

### Choosing a Format

Different tasks call for different structures. Here are the ones you will use most
often as a developer:

- **Step-by-step guide** -- Onboarding docs, deployment runbooks, migration
  instructions.
- **Bullet-point summary** -- Standup updates, PR descriptions, decision logs.
- **FAQ format** -- Internal wikis, new-hire documentation, feature announcements.
- **Code with inline comments** -- Example implementations, code reviews, teaching
  snippets.
- **Table or comparison matrix** -- Library evaluations, config option references,
  permission mappings.

### Choosing a Tone

Tone is not decoration. It signals how the reader should engage with the content.

| Tone            | Best For                              | Characteristics                          |
|-----------------|---------------------------------------|------------------------------------------|
| **Professional** | Official documentation, RFCs         | Precise, neutral, third-person           |
| **Casual**       | Blog posts, team Slack updates       | Conversational, contractions, first-person|
| **Technical**    | API docs, architecture decision records | Jargon-appropriate, dense, exact       |
| **Persuasive**   | PR descriptions, proposals, pitches  | Benefit-focused, concise, action-oriented|

---

## Real-World Application

Let's walk through four developer scenarios and see how filling in the template
changes the quality of the output.

### Scenario 1: Pull Request Description

**Vague prompt:**
> "Describe what this PR does."

**Defined-outcome prompt:**
> "Summarize the changes in this PR **in a bullet-point list** using a **persuasive
> tone** for **the two senior engineers who will review it**. Lead with the problem
> being solved, then list the changes, then note any risks or trade-offs."

The second prompt tells the AI exactly what "done" looks like. The reviewer gets
context, not just a diff summary.

### Scenario 2: API Documentation

**Vague prompt:**
> "Document this endpoint."

**Defined-outcome prompt:**
> "Write documentation for the `POST /api/v2/deployments` endpoint **in a
> reference-doc format with request/response examples** using a **technical tone**
> for **third-party developers integrating our API**. Include parameter descriptions,
> error codes, and a cURL example."

### Scenario 3: Code Review Feedback

**Vague prompt:**
> "Review this function."

**Defined-outcome prompt:**
> "Review the `processPayment` function **as an inline code review with numbered
> comments** using a **professional, constructive tone** for **a mid-level developer
> who wrote the code**. Focus on error handling, edge cases, and naming conventions."

### Scenario 4: Commit Message

**Vague prompt:**
> "Write a commit message for this change."

**Defined-outcome prompt:**
> "Write a commit message **in Conventional Commits format (type: subject + body)**
> using a **concise, technical tone** for **other contributors reading the git log**.
> The change migrates user sessions from Redis to DynamoDB."

---

## Examples

Below are three complete prompts built with the template. Study how each slot shapes
the output.

### Example A -- Deployment Runbook

```
Task:     Document the steps to deploy the notification service to production
Format:   Numbered step-by-step guide with prerequisite checklist
Tone:     Professional and precise
Audience: On-call engineers who may not be familiar with this service

Prompt:
"Write a production deployment guide for the notification service as a numbered
step-by-step guide with a prerequisite checklist at the top. Use a professional,
precise tone written for on-call engineers who may not be familiar with this
service. Include rollback steps at the end."
```

### Example B -- Sprint Recap

```
Task:     Summarize what the platform team shipped this sprint
Format:   Bullet-point summary grouped by theme
Tone:     Casual and upbeat
Audience: The wider engineering org reading a Slack post

Prompt:
"Summarize this sprint's completed work for the platform team as a bullet-point
list grouped by theme (infrastructure, DX, bug fixes). Use a casual, upbeat tone
suitable for a Slack post to the wider engineering org. Keep it under 200 words."
```

### Example C -- Architecture Decision Record

```
Task:     Explain why we chose gRPC over REST for inter-service communication
Format:   ADR (Architecture Decision Record) with Status, Context, Decision,
          Consequences sections
Tone:     Technical and neutral
Audience: Current and future engineers referencing the decision log

Prompt:
"Write an Architecture Decision Record explaining the choice of gRPC over REST
for inter-service communication. Use the standard ADR format with Status, Context,
Decision, and Consequences sections. Keep the tone technical and neutral for
engineers who will reference this months or years from now."
```

---

## Practice Exercise

Complete the **[Task] in [Format] using [Tone] for [Audience]** template for each
of the three scenarios below. Then write the full prompt you would send to an AI.

### Exercise 1: Error Handling Documentation

You need to document your team's error handling patterns so new hires can follow
them consistently.

```
Task:     _______________________________________________
Format:   _______________________________________________
Tone:     _______________________________________________
Audience: _______________________________________________

Full prompt:
_________________________________________________________
_________________________________________________________
```

### Exercise 2: Feature Proposal

You want to pitch a new caching layer to your tech lead. You need a short document
that explains the problem, the proposed solution, and expected impact.

```
Task:     _______________________________________________
Format:   _______________________________________________
Tone:     _______________________________________________
Audience: _______________________________________________

Full prompt:
_________________________________________________________
_________________________________________________________
```

### Exercise 3: Release Notes

Your team is shipping v2.4.0 of an internal CLI tool. You need release notes that
other teams will actually read.

```
Task:     _______________________________________________
Format:   _______________________________________________
Tone:     _______________________________________________
Audience: _______________________________________________

Full prompt:
_________________________________________________________
_________________________________________________________
```

**Stretch goal:** Pick one of your completed prompts and actually run it through an
AI. Compare the output to what you would have gotten from the vague version. Save
both results -- you will reference them in a later lesson on evaluation.

---

## Key Takeaways

1. **Explicit beats implicit.** If you have expectations about structure or tone,
   state them. The AI will follow clear instructions far better than it will guess
   your preferences.
2. **The template is a tool, not a cage.** `[Task] in [Format] using [Tone] for
   [Audience]` covers 80% of cases. Adjust or extend it when a scenario demands
   additional context.
3. **Format drives usefulness.** The same information in a bullet list vs. a
   paragraph vs. a table serves different purposes. Choose the format that matches
   how the reader will consume the content.
4. **Tone signals intent.** A persuasive PR description and a neutral ADR contain
   similar technical facts but serve completely different goals.

---

## Next Steps

In the next lesson you will learn how to **set clear guidelines** -- reusable rules
that keep AI output consistent across your team. Where this lesson focused on
shaping a single prompt, the next lesson focuses on shaping every prompt by
establishing boundaries and standards up front.
