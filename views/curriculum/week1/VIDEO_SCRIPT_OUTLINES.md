# Week 1 Video Script Outlines

**Total Videos:** 10
**Format:** Screen recording + talking head hybrid
**Target Length:** 8-15 minutes each
**Style:** Conversational, practical, demo-heavy

---

## Video 1: "The Anatomy of a Great Prompt" (Day 1 Morning)

**Duration:** 10 min
**Lesson Reference:** day1-lesson1-prompt-anatomy.md

### Script Outline

**[0:00 - 1:00] Hook**
- Show a side-by-side: bad prompt vs good prompt, both sent to Claude
- Bad: "Help me build a website" -> generic, useless response
- Good: detailed prompt -> perfect, targeted React component
- "The difference? Three simple ingredients."

**[1:00 - 3:00] The Three Components**
- Screen: animated diagram showing Context + Task + Details
- CONTEXT: "Give AI the background it needs"
- TASK: "Tell it exactly what to do"
- DETAILS: "Set the boundaries"
- Use the cooking analogy: context = ingredients, task = recipe, details = plating instructions

**[3:00 - 6:00] Live Demo**
- Open Claude/ChatGPT
- Write a bad prompt, show the result
- Add Context -> show improvement
- Add Task clarity -> show improvement
- Add Details -> show perfect result
- Real example: building a React authentication form

**[6:00 - 8:00] Common Mistakes**
- Too vague (no context)
- Too restrictive (over-constraining)
- Missing the task (all context, no direction)
- Show examples of each

**[8:00 - 10:00] Practice Challenge**
- "Pause the video. Open the Prompt Builder tool (link in description)"
- Show how to use the interactive Prompt Builder
- Challenge: build a 75+ score prompt
- "In the next video, we'll deep-dive into Context..."

---

## Video 2: "Context is Everything" (Day 1 Afternoon)

**Duration:** 8 min
**Lesson Reference:** day1-lesson2-provide-context.md

### Script Outline

**[0:00 - 1:00] Hook**
- "Imagine hiring a developer who knows nothing about your project, your stack, or your team. That's what AI is without context."

**[1:00 - 3:00] The 5 Types of Context**
- Screen: animated list
  1. Tech Stack (React, Node, PostgreSQL)
  2. Project Scope (what you're building)
  3. Current State (what exists already)
  4. Constraints (deadlines, requirements)
  5. History (what you've tried before)
- Each with a quick example

**[3:00 - 5:00] Live Demo: Bug Fixing**
- Bad: "Fix the bug in my app"
- Show the terrible response
- Add context step by step: error log, stack trace, expected behavior, environment
- Show dramatically better response

**[5:00 - 7:00] The "New Team Member" Mental Model**
- Explain: pretend you're briefing a new hire
- What would they need to know?
- That's your context

**[7:00 - 8:00] Transition**
- "Context tells AI WHERE you are. Specificity tells it WHAT you want."
- "Next video: Be Specific."

---

## Video 3: "The Specificity Spectrum" (Day 1 Afternoon)

**Duration:** 8 min
**Lesson Reference:** day1-lesson3-be-specific.md

### Script Outline

**[0:00 - 1:00] Hook**
- Show 4 prompts on screen, ask "which gets the best result?"
- Reveal: the most specific one wins every time

**[1:00 - 3:00] Six Dimensions of Specificity**
- Quantity, Format, Technology, Audience, Quality Criteria, Edge Cases
- Quick example for each

**[3:00 - 5:00] Live Demo: Writing Tests**
- Vague: "Write tests for my code"
- Specific: "Write 5 Jest unit tests for calculateTotal() covering negative numbers, zero, overflow, and decimal precision, using describe/it blocks"
- Show both results side by side

**[5:00 - 7:00] The Specificity Spectrum**
- Level 1: Generic ("Write code")
- Level 2: Directional ("Write a React component")
- Level 3: Targeted ("Write a React TypeScript form component with validation")
- Level 4: Surgical ("Write a React 18 TypeScript functional component for a login form with email/password validation using Zod, Tailwind styling, and accessible ARIA labels")

**[7:00 - 8:00] Day 1 Wrap-Up**
- Recap: Context + Task + Details
- "Take the Day 1 Quiz now (link in description)"
- Preview Day 2: Outcomes and Guidelines

---

## Video 4: "Define Your Outcomes" (Day 2 Morning)

**Duration:** 10 min
**Lesson Reference:** day2-lesson1-define-outcomes.md

### Script Outline

**[0:00 - 1:30] Hook**
- "Most people tell AI what to write. Great prompt engineers tell AI what the result should look like."

**[1:30 - 4:00] The Outcome Template**
- "[Task] in [Format] using [Tone] for [Audience]"
- Walk through each variable with 3 examples
- Show format options: step-by-step, bullet points, table, code with comments, FAQ

**[4:00 - 6:00] Tone Matching Demo**
- Same content, 4 different tones:
  - Professional (API docs)
  - Casual (blog post)
  - Technical (architecture doc)
  - Persuasive (PR description)
- Show live in AI tool

**[6:00 - 8:00] Developer Scenarios**
- Writing a PR description
- Generating API documentation
- Creating a code review response
- Drafting commit messages
- Each with the template applied

**[8:00 - 10:00] Practice**
- "Open the Transformation Challenge (link in description)"
- Show first 2 challenges
- "Complete all 8 for 80 XP"

---

## Video 5: "Setting Guidelines for AI" (Day 2 Afternoon)

**Duration:** 8 min
**Lesson Reference:** day2-lesson2-set-guidelines.md

### Script Outline

**[0:00 - 1:00] Hook**
- "Think of guidelines as .editorconfig for AI. Set them once, consistent output every time."

**[1:00 - 3:00] The Four Guideline Categories**
- Acceptable content
- Tone requirements
- Coding standards
- Output limitations
- Show a real team guideline document

**[3:00 - 5:00] Live Demo: Before/After Guidelines**
- Send same prompt without guidelines -> inconsistent output
- Send with guidelines -> perfectly formatted, consistent output
- Show: React component generation with TypeScript, hooks-only, JSDoc, max 100 lines

**[5:00 - 7:00] The "Twice Rule"**
- If you correct the same thing twice, add a guideline
- Build up a personal guideline library
- Show how to save guidelines for reuse

**[7:00 - 8:00] Day 2 Wrap-Up**
- Take the Tier 2 Quiz
- "Tomorrow: the power of iteration"

---

## Video 6: "Iterative Prompting Mastery" (Day 3 Morning)

**Duration:** 12 min
**Lesson Reference:** day3-lesson1-iterative-prompting.md

### Script Outline

**[0:00 - 2:00] Hook**
- "The biggest mistake beginners make: starting over when the first response isn't perfect."
- Show the iteration pattern: General -> Focused -> Reformatted

**[2:00 - 5:00] Live Multi-Turn Demo**
- Build a complete REST API through 4 turns of iteration
- Turn 1: "Design an API for a task manager" (generic)
- Turn 2: "Add authentication endpoints" (focused)
- Turn 3: "Include error handling for each endpoint" (refined)
- Turn 4: "Convert to OpenAPI 3.0 spec" (reformatted)
- Show quality improving each round

**[5:00 - 8:00] Task Decomposition**
- Complex request: "Build a full-stack weather app"
- Break into 6 sub-prompts, show each getting better results
- Demonstrate the compound effect of good decomposition

**[8:00 - 10:00] The Clarification Checklist**
- 5 questions to ask before prompting
- Show debugging a bad prompt using the checklist
- Before/After transformation

**[10:00 - 12:00] Practice**
- "Open the Iterative Prompting Simulator"
- Demo one scenario
- "Complete all 3 scenarios for 150 XP"

---

## Video 7: "Advanced Technique: Let AI Write Your Prompts" (Day 4 Morning)

**Duration:** 10 min
**Lesson Reference:** day4-lesson1-prompt-drafting-by-ai.md

### Script Outline

**[0:00 - 1:30] Hook**
- "What if I told you the best prompt engineer... is the AI itself?"
- Show the meta-prompting technique

**[1:30 - 4:00] The Meta-Prompting Pattern**
- Ask -> Fill -> Generate
- "What information do you need to design a database schema for a multi-tenant SaaS app?"
- Show AI's requirements checklist
- Fill in each item
- Show the dramatically better result

**[4:00 - 7:00] Live Demo: Three Scenarios**
- Technical documentation
- Architecture decision
- Code review automation
- Each: ask AI what it needs, provide it, get perfect output

**[7:00 - 9:00] Tone and Depth Control**
- Tone modifiers demo
- Depth modifiers demo
- The tone/depth matrix for different audiences
- Same content rewritten 3 ways live

**[9:00 - 10:00] Transition to CLI**
- "Now let's combine this with terminal power..."
- Preview the CLI integration

---

## Video 8: "CLI + AI: The Power Combo" (Day 4 Afternoon)

**Duration:** 12 min
**Lesson Reference:** day4-lesson3-cli-prompt-integration.md

### Script Outline

**[0:00 - 2:00] Hook**
- Live terminal demo: pipe git diff into AI, get perfect commit message
- "This is what happens when CLI mastery meets prompt engineering"

**[2:00 - 5:00] Three Workflow Patterns**
- Diagnostic: pipe errors into AI for analysis
- Generative: use AI to create scripts and configs
- Review: send code diffs for automated review
- Live demo of each

**[5:00 - 8:00] Building AI-Powered Shell Commands**
- Create shell aliases for common AI workflows
- `alias commit-msg='git diff --staged | claude "Write a conventional commit message"'`
- `alias test-fix='npm test 2>&1 | claude "Fix these failing tests"'`
- Show creating and testing each

**[8:00 - 10:00] Terminal Velocity Connection**
- Show how the game skills translate to real workflows
- Demo using learned commands (ls, cd, git, npm) with AI piping
- "The CLI skills you learned in Terminal Velocity? This is where they pay off."

**[10:00 - 12:00] Practice**
- "Open cli-mastery.html tutorial"
- "Complete the Terminal Velocity advanced levels"
- "Try building 3 CLI+AI workflows"

---

## Video 9: "Know Your Limits: AI Verification" (Day 5 Morning)

**Duration:** 10 min
**Lesson Reference:** day5-lesson1-limitations-verification.md

### Script Outline

**[0:00 - 2:00] Hook**
- Show an AI-generated function that looks correct but has a subtle off-by-one error
- "This passed code review. It broke production."
- "Today we learn the most critical skill: verification."

**[2:00 - 4:00] The Five Limitations**
- No real-time data
- No proprietary knowledge
- Unreliable complex reasoning
- No high-stakes subjective judgment
- Hallucination risk
- Real examples of each

**[4:00 - 6:00] The Verification Workflow**
- AI Response -> Your Review -> External Verification -> Final Decision
- Show the red flags that always require verification
- Demo: checking an AI-generated security implementation

**[6:00 - 8:00] Developer-Specific Gotchas**
- Hallucinated API methods
- Wrong library versions
- Outdated best practices
- Missing edge cases
- Show 3 real examples caught in the wild

**[8:00 - 10:00] Building Verification Into Your Workflow**
- Ask AI to identify its own uncertainties
- Generate verification tests automatically
- The two-source rule
- "Trust but verify - every single time"

---

## Video 10: "Capstone: Building AI Workflows" (Day 5 Afternoon)

**Duration:** 15 min
**Lesson Reference:** day5-lesson2-project-workflows.md

### Script Outline

**[0:00 - 2:00] Hook**
- "In 5 days, you've learned 13 techniques. Now we put them ALL together."
- Show the 6-phase workflow pattern

**[2:00 - 5:00] The Workflow Pattern**
- Define Scope -> Gather Context -> Create Prompts -> Iterate -> Verify -> Ship
- Map each phase to the techniques learned this week
- Show the complete developer project accelerator template

**[5:00 - 10:00] Live Capstone Build**
- Pick a real project: "Build a notification microservice"
- Walk through all 6 phases live
- Phase 1: Define scope and success criteria
- Phase 2: Gather tech stack, requirements, constraints
- Phase 3: Write setup prompt + 3 follow-ups using meta-prompting
- Phase 4: Iterate and refine based on output
- Phase 5: Verify code, check for security issues
- Phase 6: Package the final deliverable

**[10:00 - 13:00] Week 1 Review**
- Recap all 13 techniques in 3 minutes
- Show the progression: Day 1 (basics) -> Day 5 (complete workflows)
- Student competency checklist
- XP and achievements earned

**[13:00 - 15:00] What's Next: Week 2 Preview**
- "Next week: Agent Deployment"
- Agents, multi-agent systems, orchestration
- "You've mastered prompting. Now you'll master building."
- "Open the Project Workflow Designer for your capstone"
- "See you Monday."

---

## Production Notes

### Recording Setup
- Screen: 1920x1080, dark terminal theme
- Camera: talking head in bottom-right corner (optional)
- Audio: clear microphone, no background noise
- Tools visible: Claude, terminal, VS Code, browser

### Editing Style
- Quick cuts between demos
- Animated overlays for key concepts
- Side-by-side comparisons for before/after
- Highlight cursor movements
- Add captions for accessibility

### Distribution
- Embedded in bootcamp HTML pages
- Links in each day's lesson file
- Accessible from the curriculum dashboard

---

*Generated for AI Mastery Bootcamp Week 1*
*Total runtime: ~103 minutes across 10 videos*
*Version 1.0 - 2026-02-11*
