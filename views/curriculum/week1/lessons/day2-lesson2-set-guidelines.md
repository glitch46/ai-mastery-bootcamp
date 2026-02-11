<!--
title: Set Clear Guidelines - Establishing Boundaries and Consistency Rules
day: 2
lesson: 2
difficulty: 2
estimated_time: 10 min
prerequisites:
  - day1-lesson1-what-is-prompt-engineering
  - day1-lesson2-first-prompt
  - day2-lesson1-define-outcomes
-->

# Set Clear Guidelines: Establishing Boundaries and Consistency Rules

In the previous lesson you learned to define outcomes for individual prompts. That
works well when you are working alone on a single task. But what happens when an
entire team is using AI across dozens of tasks every day? Without shared rules, you
get inconsistent output -- one developer's AI-generated docs look nothing like
another's, commit message styles drift, and code suggestions ignore your team's
conventions.

The fix is **guidelines**: a reusable set of rules you attach to prompts (or
configure in your AI tooling) so every response stays within agreed boundaries.

---

## Learning Objectives

By the end of this lesson you will be able to:

1. Explain why guidelines are necessary for consistent AI-assisted development.
2. Identify the four categories of guidelines every team should define.
3. Write a concrete guideline set for a specific development workflow.
4. Recognize when a problem is best solved by adding a guideline rather than
   rewriting individual prompts.

---

## Key Concepts

### What Are Guidelines?

Guidelines are **standing instructions** that apply across multiple prompts. Think of
them like a linter config or an `.editorconfig` file -- they encode your standards
once so you don't have to repeat them every time.

A guideline answers the question: *"Regardless of the specific task, what rules
should the AI always follow when working in our codebase?"*

### The Four Guideline Categories

Every useful guideline set covers these four areas:

| Category                | What It Controls                                      |
|-------------------------|-------------------------------------------------------|
| **Acceptable Content**  | What the AI should and should not produce              |
| **Tone Requirements**   | Voice, formality, perspective                          |
| **Coding Standards**    | Language conventions, patterns, tooling preferences     |
| **Output Limitations**  | Length, scope, depth, what to omit                     |

Let's break each one down.

#### 1. Acceptable Content

Define what is in-bounds and out-of-bounds. This prevents the AI from generating
code that uses banned libraries, suggesting patterns your team has deprecated, or
producing content outside its role.

Examples:
- "Do not suggest class-based React components. We use functional components only."
- "Never generate mock data that resembles real customer information."
- "Do not recommend ORMs. We use raw SQL with parameterized queries."

#### 2. Tone Requirements

Even within a single team, different artifacts have different tone expectations. Your
guidelines can standardize this.

Examples:
- "Code review comments should be constructive and use 'we' language, not 'you'."
- "Documentation should be written in second person ('you') and present tense."
- "Commit messages should be imperative mood: 'Add feature' not 'Added feature'."

#### 3. Coding Standards

This is where guidelines have the highest impact for development teams. Instead of
correcting AI output after the fact, encode your standards up front.

Examples:
- "Use TypeScript strict mode. No `any` types unless justified in a comment."
- "All functions must have explicit return types."
- "Error handling must use custom error classes, never raw `throw new Error()`."
- "Use named exports. Default exports are reserved for page components only."

#### 4. Output Limitations

Without boundaries on scope and length, AI responses tend to be verbose or wander
into tangential advice. Set limits.

Examples:
- "Keep responses under 200 lines unless the task explicitly requires more."
- "Do not explain basic language syntax. Assume the reader is a mid-level developer."
- "When reviewing code, limit feedback to the top 5 most impactful issues."

---

## Real-World Application

### A Complete Guideline Set for a Development Team

Here is a real-world guideline set you might use with an AI coding assistant on a
team building a SaaS platform.

```markdown
# AI Assistant Guidelines -- Platform Team

## Coding Standards
- Language: TypeScript (strict mode, no `any`)
- Framework: React 18+ with functional components only
- Styling: Tailwind CSS utility classes, no inline styles, no CSS modules
- State management: Zustand for client state, TanStack Query for server state
- Testing: Vitest for unit tests, Playwright for E2E
- All components must include PropTypes via TypeScript interfaces
- Add JSDoc comments to all exported functions and components
- Maximum 100 lines per component file; extract sub-components if exceeded

## Acceptable Content
- Do not generate class components, HOCs, or mixins
- Do not suggest installing new dependencies without flagging it explicitly
- Do not use deprecated React APIs (e.g., componentWillMount, findDOMNode)
- Never output secrets, API keys, or credentials -- use environment variables

## Tone
- Code review comments: constructive, specific, with suggested fix
- Documentation: second person, present tense, concise
- Commit messages: Conventional Commits format, imperative mood

## Output Limitations
- Code suggestions: include only the changed code plus 3 lines of context
- Explanations: 2-3 sentences max unless the user asks for detail
- When multiple approaches exist, recommend one and briefly note alternatives
```

This set fits in a system prompt, a project-level config file, or a pinned document
in your team's AI tooling. Every prompt the team sends inherits these rules
automatically.

### When to Reach for a Guideline

Not every problem requires a new guideline. Use this decision process:

| Situation | Action |
|-----------|--------|
| AI produces wrong format once | Refine the individual prompt (Lesson 1) |
| AI produces wrong format repeatedly | Add a format guideline |
| New team member gets inconsistent AI output | Share the guideline set |
| AI suggests a pattern your team has banned | Add an acceptable-content rule |
| AI explanations are too long / too short | Add an output-limitation rule |
| Code style varies across AI suggestions | Add coding-standard rules |

The pattern: **if you find yourself correcting the same thing more than twice, it
belongs in your guidelines, not in individual prompts.**

---

## Examples

### Example 1: React Component Guidelines in Action

**Without guidelines:**

Prompt: "Create a user profile card component."

The AI might return a class component, use CSS modules, skip TypeScript, and produce
a 200-line file. You spend five minutes reformatting.

**With guidelines applied:**

Prompt: "Create a user profile card component."

Guidelines (from the set above) are already active. The AI returns:

```tsx
/**
 * Displays a user's profile information in a card layout.
 * Used on the team dashboard and profile settings pages.
 */

interface UserProfileCardProps {
  /** The user's display name */
  name: string;
  /** The user's role within the organization */
  role: string;
  /** URL to the user's avatar image */
  avatarUrl: string;
  /** Whether the user is currently online */
  isOnline?: boolean;
}

export function UserProfileCard({
  name,
  role,
  avatarUrl,
  isOnline = false,
}: UserProfileCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-lg border p-4 shadow-sm">
      <img
        src={avatarUrl}
        alt={`${name}'s avatar`}
        className="h-12 w-12 rounded-full object-cover"
      />
      <div>
        <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
      {isOnline && (
        <span className="ml-auto h-2.5 w-2.5 rounded-full bg-green-500" />
      )}
    </div>
  );
}
```

Functional component. TypeScript interfaces. JSDoc comments. Tailwind classes. Named
export. Under 100 lines. Zero corrections needed.

### Example 2: Commit Message Guidelines

**Guideline:**
> "Commit messages must use Conventional Commits format, imperative mood, with a
> body that explains *why* the change was made."

**AI output following the guideline:**

```
feat(auth): add refresh token rotation

Rotating refresh tokens on each use limits the window of
exposure if a token is leaked. This aligns with the OWASP
session management recommendations the team adopted in Q3.

Closes #847
```

### Example 3: Code Review Guidelines

**Guideline:**
> "Code review comments should be constructive, use 'we' language, and include a
> suggested fix. Limit to the 5 most impactful issues."

**AI output following the guideline:**

```
1. **Unhandled promise rejection** (line 42)
   `fetchUser()` can throw but isn't wrapped in try/catch. We should add error
   handling here to prevent silent failures.
   Suggested fix: wrap in try/catch and call `reportError(e)`.

2. **Magic number** (line 67)
   The retry count `3` appears without context. We could extract this to a
   named constant like `MAX_RETRY_ATTEMPTS` for clarity.
   Suggested fix: `const MAX_RETRY_ATTEMPTS = 3;`

3. ...
```

---

## Practice Exercise

You are the tech lead on a team that uses AI to assist with code reviews. Developers
on the team write Python (3.12+) for a FastAPI backend. Your stack includes
SQLAlchemy, Pydantic v2, and pytest.

Write a **complete guideline set** that your team would apply to all AI-assisted code
reviews. Cover all four categories.

Use the template below:

```markdown
# AI Code Review Guidelines -- [Your Team Name]

## Coding Standards
- _____________________________________________________
- _____________________________________________________
- _____________________________________________________
- _____________________________________________________
- _____________________________________________________

## Acceptable Content
- _____________________________________________________
- _____________________________________________________
- _____________________________________________________
- _____________________________________________________

## Tone
- _____________________________________________________
- _____________________________________________________
- _____________________________________________________

## Output Limitations
- _____________________________________________________
- _____________________________________________________
- _____________________________________________________
```

**Requirements for your guideline set:**

1. Include at least 5 coding standards specific to the Python/FastAPI stack.
2. Include at least 3 acceptable-content rules (what should the AI avoid?).
3. Include at least 2 tone rules for how review feedback should read.
4. Include at least 2 output-limitation rules to keep reviews focused.

**Stretch goal:** After writing your guidelines, test them. Give an AI a piece of
Python code along with your guidelines and ask it to perform a code review. Then
remove the guidelines and ask for the same review. Compare the two outputs. Which
one would you rather receive as a developer?

---

## Key Takeaways

1. **Guidelines are reusable rules; prompts are one-time requests.** Use guidelines
   to encode standards that apply across many prompts so you don't repeat yourself.
2. **Four categories cover most needs.** Acceptable content, tone, coding standards,
   and output limitations give you comprehensive control over AI behavior.
3. **The "twice rule" applies.** If you correct the AI for the same issue more than
   twice, stop editing prompts and add a guideline instead.
4. **Guidelines compound.** A well-maintained guideline set means every new team
   member and every new task benefits from all the corrections you've made before.
   This is how you scale AI usage across a team without scaling inconsistency.
5. **Guidelines are living documents.** Review and update them as your stack, team
   norms, and AI tooling evolve. Treat them like you treat your linter config --
   version-controlled, reviewed, and enforced.

---

## Next Steps

You now know how to define outcomes for individual prompts (Lesson 1) and how to set
standing guidelines that keep output consistent (Lesson 2). In Day 3, you will
combine both skills as you learn to **provide context effectively** -- giving the AI
the background information it needs to produce accurate, relevant results within your
defined boundaries.
