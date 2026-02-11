<!--
title: "Project-Based AI Workflows (Capstone)"
day: 5
lesson: 2
difficulty: 5
estimated_time: "15 min"
prerequisites:
  - "Day 1: Introduction to Prompt Engineering"
  - "Day 2: Writing Clear Instructions & Role-Based Prompting"
  - "Day 3: Iterative Prompting & Task Decomposition"
  - "Day 4: Advanced Prompt Patterns for Developers"
  - "Day 5, Lesson 1: Recognize Limitations & Verify Information"
-->

# Project-Based AI Workflows (Capstone)

You have spent four and a half days learning individual techniques: structure, context, specificity, roles, examples, constraints, iteration, decomposition, clarification, and verification. Each technique improves a single prompt. But real work is not a single prompt --- it's a **project**. A project has phases, dependencies, context that accumulates, and outputs that build on each other.

This capstone lesson teaches you how to orchestrate AI across an entire project lifecycle. You'll learn five workflow templates, a universal project pattern, and then you'll build one yourself.

---

## Learning Objectives

By the end of this lesson, you will be able to:

1. Explain the **Project Workflow Pattern** and its six phases
2. Apply at least one of the five workflow templates to a real project
3. Design a setup prompt, context package, and follow-up prompt sequence for a complete workflow
4. Define measurable success criteria for an AI-assisted project
5. Identify where each of the 13 techniques from Week 1 fits into a project workflow

---

## Why This Is Critical

Individual prompts solve individual problems. Workflows solve **projects**. The difference matters because:

- A single prompt might generate a function. A workflow generates the function, its tests, its documentation, its error handling, and its integration plan --- all with consistent context.
- A single prompt loses context when you start a new conversation. A workflow is designed so context compounds across prompts.
- A single prompt is ad hoc. A workflow is **repeatable** --- you can use it on the next project, train your team on it, and improve it over time.

The professionals who get the most value from AI are not the ones writing the cleverest individual prompts. They are the ones who have built workflows they run every week.

---

## Deep Dive

### The Project Workflow Pattern

Every AI-assisted project follows the same six-phase pattern, regardless of domain:

```
1. DEFINE SCOPE
   What exactly are we building/producing? What are the boundaries?
        |
        v
2. GATHER CONTEXT
   What information does the AI need to do this well?
        |
        v
3. CREATE PROMPTS
   Write the setup prompt and planned follow-up sequence.
        |
        v
4. ITERATE
   Run the prompts, refine based on output, adjust context.
        |
        v
5. VERIFY
   Apply the Verification Workflow from Lesson 1 to all outputs.
        |
        v
6. SHIP
   Deliver the final output. Document what worked for next time.
```

Each phase maps directly to techniques you've already learned:

| Phase | Techniques Used |
|-------|----------------|
| Define Scope | Be specific (Day 1), Define outcomes (Day 2) |
| Gather Context | Provide context (Day 1), Set guidelines (Day 2) |
| Create Prompts | Prompt anatomy (Day 1), Role assignment (Day 2), Break tasks down (Day 3) |
| Iterate | Iterative prompting (Day 3), Clarify prompts (Day 3) |
| Verify | Recognize limitations & verify (Day 5, Lesson 1) |
| Ship | All techniques combined into a polished deliverable |

---

### The Five Workflow Templates

Below are five complete workflow templates. Each one defines a **setup prompt**, the **context package** you need to prepare, and the **expected outcomes**. These are not theoretical --- they are designed to be copied, adapted, and used on real work starting today.

---

#### Workflow 1: Client Research Hub

**Purpose:** Transform scattered client and market information into structured research that drives outreach and strategy.

**Setup Prompt:**
> "You are a senior business researcher specializing in B2B SaaS markets. I'm going to provide you with information about our ideal customer profile, our key competitors, and specific prospect companies. Your job is to synthesize this into actionable research briefs that our sales and marketing teams can use immediately. Ask me clarifying questions before starting if anything in my context is unclear."

**Context Package (prepare before prompting):**
- Your Ideal Customer Profile (ICP): industry, company size, tech stack, pain points, buying signals
- Competitor list with known positioning and pricing
- 3--5 target company profiles (public info: recent press releases, job postings, tech stack signals)
- Your product's key differentiators and value propositions
- Your current outreach channels and messaging

**Follow-Up Prompt Sequence:**
1. "Based on the ICP and competitor analysis, identify the three strongest positioning angles for our product against [Competitor X]."
2. "For [Target Company], draft a research brief that includes: company overview, likely pain points based on their job postings and tech stack, recommended outreach angle, and three personalized talking points."
3. "Generate an outreach strategy for this segment: recommended channels, messaging framework, and a sequence of 3 touchpoints."

**Expected Outcomes:**
- Structured research briefs for each target company
- Competitive positioning matrix
- Outreach strategies with personalized messaging
- Prioritized prospect list with rationale

---

#### Workflow 2: Campaign Command Center

**Purpose:** Go from campaign brief to complete messaging, content, and ad copy --- all aligned to brand and audience.

**Setup Prompt:**
> "You are a senior marketing strategist with expertise in integrated campaigns for developer-focused products. I'll provide our brand guidelines, audience personas, and campaign objectives. Help me build a complete campaign package from strategy through execution-ready assets. Maintain brand voice consistency across every output."

**Context Package:**
- Brand guidelines: voice, tone, visual language, do's and don'ts
- Audience personas: 2--3 detailed personas with demographics, motivations, objections, and preferred channels
- Campaign objective: launch, awareness, conversion, retention
- Budget and timeline constraints
- Past campaign performance data (what worked, what didn't)

**Follow-Up Prompt Sequence:**
1. "Based on the personas and objectives, propose three campaign concepts. For each, provide: theme, primary message, channels, and expected audience reaction."
2. "For the selected concept, write the core messaging framework: headline, subhead, 3 supporting points, and call-to-action. Tailor for [Persona A] and [Persona B] separately."
3. "Generate the following assets using the approved messaging: (a) 3 LinkedIn ad variations (headline + body + CTA), (b) 1 landing page hero section, (c) 1 email sequence (3 emails)."

**Expected Outcomes:**
- Campaign strategy document
- Messaging framework per persona
- Platform-specific ad copy
- Landing page copy
- Email sequence drafts

---

#### Workflow 3: Operations Playbook

**Purpose:** Convert tribal knowledge and ad hoc processes into documented, repeatable standard operating procedures.

**Setup Prompt:**
> "You are an operations consultant specializing in process documentation for technology companies. I'll share our current workflows, checklists, and policies --- some formal, some informal. Help me build a comprehensive operations playbook that any team member can follow. Prioritize clarity, completeness, and actionability. Flag any gaps or risks you identify in the processes I describe."

**Context Package:**
- Current process descriptions (even if informal or incomplete)
- Existing checklists and templates
- Team structure and roles (who owns what)
- Known pain points and failure modes
- Compliance or regulatory requirements
- Tools and systems in use

**Follow-Up Prompt Sequence:**
1. "Based on the processes I've described, create a process inventory table: process name, owner, frequency, current documentation status, and risk level if it fails."
2. "For [Process X], write a complete SOP that includes: purpose, scope, prerequisites, step-by-step procedure, decision points, exception handling, and success criteria."
3. "Review the full set of SOPs and generate a risk assessment: what are the single points of failure, what processes lack backup procedures, and what compliance gaps exist?"

**Expected Outcomes:**
- Process inventory and prioritization matrix
- Standard Operating Procedures for critical processes
- Risk assessment with remediation recommendations
- Onboarding checklist for new team members

---

#### Workflow 4: Support Knowledge Base

**Purpose:** Turn support ticket history and help documentation into a structured knowledge base that reduces ticket volume.

**Setup Prompt:**
> "You are a technical support architect building a knowledge base for a SaaS product. I'll provide our existing help documentation, common support ticket categories, and sample ticket resolutions. Help me build a comprehensive, searchable knowledge base that enables customers to self-serve and gives support agents consistent response templates. Write at a technical level appropriate for developers who use our product."

**Context Package:**
- Existing help documentation and FAQs
- Top 20 support ticket categories by volume
- Sample resolved tickets (3--5 per category) with successful resolutions
- Product documentation and changelog
- Known bugs and workarounds
- Customer feedback on current documentation gaps

**Follow-Up Prompt Sequence:**
1. "Analyze the ticket categories and identify the top 10 that could be resolved with better documentation. For each, note the common root cause and the typical resolution."
2. "For [Category X], draft a knowledge base article that includes: problem description, common causes, step-by-step resolution, related articles, and when to escalate to support."
3. "For our support agents, generate response templates for the top 5 ticket types. Each template should include: greeting, acknowledgment of the issue, diagnostic questions, resolution steps, and a closing that links to the relevant KB article."

**Expected Outcomes:**
- Prioritized list of self-serve documentation needs
- Knowledge base articles for high-volume categories
- Agent response templates with consistent formatting
- Gap analysis identifying undocumented issues

---

#### Workflow 5: Developer Project Accelerator

**Purpose:** Go from project requirements to a working codebase scaffold with tests, documentation, and deployment configuration.

**Setup Prompt:**
> "You are a senior full-stack engineer helping me scaffold a new project. I'll provide the tech stack, architecture decisions, and functional requirements. Help me generate the project structure, boilerplate code, test scaffolds, and documentation. Follow the conventions and patterns I specify --- do not introduce additional dependencies without explaining why. Flag any requirements that are ambiguous or potentially conflicting."

**Context Package:**
- Tech stack: languages, frameworks, versions
- Architecture: monolith vs. microservices, API style, database choice
- Functional requirements: user stories or feature list
- Non-functional requirements: performance targets, security requirements, compliance
- Team conventions: code style, naming conventions, project structure patterns
- CI/CD and deployment targets

**Follow-Up Prompt Sequence:**
1. "Based on the requirements and tech stack, propose a project directory structure. Explain the purpose of each top-level directory and list the initial files that should exist in each."
2. "Generate the boilerplate for the following: (a) application entry point with configuration loading, (b) database connection and migration setup, (c) authentication middleware, (d) a sample CRUD endpoint with request validation. Include error handling throughout."
3. "For each module generated, write: (a) unit test scaffolds covering happy path, error cases, and edge cases, (b) a README section explaining the module's purpose, public API, and configuration options."
4. "Generate the CI/CD pipeline configuration for [platform]: build, test, lint, and deploy stages. Include environment variable management and secret handling."

**Expected Outcomes:**
- Project directory structure with rationale
- Boilerplate code for core modules
- Test scaffolds with comprehensive case coverage
- Module-level documentation
- CI/CD pipeline configuration

---

## Case Studies

### Case Study 1: From Requirements to MVP in One Workflow

A solo developer used the Developer Project Accelerator workflow to scaffold a REST API for a task management app. Their context package included:

- **Stack:** Node.js 20, Express, TypeScript, PostgreSQL, Prisma ORM
- **Requirements:** CRUD for tasks, user authentication, task assignment, due date filtering
- **Conventions:** ESLint with Airbnb config, Prettier, Jest for tests, feature-folder project structure

Over a single working session, they:

1. Generated the directory structure and validated it against their conventions
2. Produced boilerplate for auth, task CRUD, and database models
3. Generated 47 test cases across the modules
4. Created a GitHub Actions CI pipeline

**Time to working scaffold:** 3 hours instead of the typical 2--3 days. Critically, they spent about 40% of that time on Phase 5 (Verify) --- reviewing generated code, fixing assumptions the AI made about their Prisma schema, and correcting an authentication middleware that didn't properly handle token expiration.

**Lesson:** The workflow compressed the *creative* phase dramatically. The verification phase was non-negotiable and took real time. Total time savings: roughly 60%.

### Case Study 2: Operations Playbook Saves Onboarding

A 15-person startup used the Operations Playbook workflow to document their deployment, incident response, and on-call processes. Before the workflow, these processes existed only in the heads of two senior engineers.

They fed in Slack messages, runbook fragments, and verbal descriptions of processes. The AI produced:

- 12 SOPs covering deployment, rollback, incident response, and database operations
- A risk assessment that identified three single-points-of-failure they hadn't recognized
- An onboarding checklist that reduced new engineer ramp-up from 3 weeks to 1 week

**Lesson:** The AI didn't invent processes --- it structured and formalized what already existed. The team still had to verify every SOP by actually running through the steps. Two SOPs had incorrect sequences that would have caused outages if followed literally.

---

## Advanced Strategies

### Strategy 1: Context Compounding

Design your prompt sequence so each step builds on the outputs of previous steps:

```
Prompt 1: "Generate the data model."
    -> Output: data model

Prompt 2: "Based on the data model above, generate the API endpoints."
    -> Output: API endpoints (uses data model as context)

Prompt 3: "Based on the API endpoints above, generate the test suite."
    -> Output: tests (uses both data model and API as context)
```

Each prompt inherits the accumulated context. This produces more consistent output than generating each piece independently.

### Strategy 2: The Checkpoint Pattern

After each major phase, pause and verify before continuing:

> "Before we continue, let me verify the data model you generated. I've confirmed that [X] is correct, but [Y] needs to change: [specify change]. Update the data model with this correction, then we'll proceed to API endpoint generation."

This prevents errors in early phases from propagating through the entire workflow.

### Strategy 3: Parallel Workstreams

Some workflow outputs are independent and can be generated in parallel (in separate conversations):

- Code generation and documentation can run in parallel
- Test writing can happen in parallel with CI/CD configuration
- Research briefs for different prospects are independent

Use separate conversations for independent workstreams, then merge outputs in the verification phase.

### Strategy 4: Workflow Templates as Team Standards

Once you've refined a workflow, document it as a team standard:

- The setup prompt becomes a team template
- The context package becomes an onboarding checklist ("gather these items before starting")
- The follow-up sequence becomes a playbook
- Success criteria become the definition of done

This turns individual productivity into team productivity.

---

## Capstone Exercise

This is the final exercise of Week 1. Choose **one** of the five workflow templates and complete all four parts below.

### Part 1: Write the Setup Prompt

Choose a workflow template and adapt the setup prompt to a real project you're working on (or a realistic project you could work on). The setup prompt should:

- Assign a clear role to the AI
- State the project scope
- Specify conventions or constraints
- Instruct the AI to ask clarifying questions if context is insufficient

```
Your setup prompt:
_________________________________________________________
_________________________________________________________
_________________________________________________________
_________________________________________________________
```

### Part 2: Define the Context Package

List **five specific pieces of context** you would provide to the AI. Be concrete --- not "project requirements" but the actual requirements.

```
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________
4. _______________________________________________
5. _______________________________________________
```

### Part 3: Draft the Follow-Up Sequence

Write **three follow-up prompts** that build on each other. Each prompt should reference or build on the expected output of the previous one.

```
Follow-up 1:
_________________________________________________________
_________________________________________________________

Follow-up 2 (builds on output of #1):
_________________________________________________________
_________________________________________________________

Follow-up 3 (builds on output of #1 and #2):
_________________________________________________________
_________________________________________________________
```

### Part 4: Define Success Criteria

How will you know the workflow produced good results? Write **four measurable success criteria**.

```
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________
4. _______________________________________________
```

**Stretch goal:** Actually run the workflow. Execute your setup prompt, provide the context, run the follow-up sequence, and apply the Verification Workflow from Lesson 1 to every output. Document what worked, what you had to correct, and how you would improve the workflow next time.

---

## Key Takeaways

1. **Workflows beat individual prompts.** Real work is projects, not one-shot questions. Design your AI usage as a multi-step process with compounding context.
2. **The Project Workflow Pattern applies universally:** Define Scope -> Gather Context -> Create Prompts -> Iterate -> Verify -> Ship.
3. **Prepare your context package before you start prompting.** The quality of your context determines the quality of every output in the workflow.
4. **Verification is a phase, not an afterthought.** Budget real time for it. AI-assisted does not mean AI-verified.
5. **Workflows are reusable and teachable.** Once you refine a workflow, it becomes a team asset, not just a personal trick.

---

## Week 1 Wrap-Up: The Complete Toolkit

Over five days, you have learned **13 techniques** that form the foundation of effective AI-assisted work:

| Day | Techniques | Core Skill |
|-----|-----------|------------|
| **Day 1** | 1. Prompt Anatomy (Context + Task + Details) | Structure |
| | 2. Provide Context | Background |
| | 3. Be Specific | Precision |
| **Day 2** | 4. Define Outcomes (Format, Tone, Audience) | Expectations |
| | 5. Set Guidelines & Constraints | Boundaries |
| | 6. Assign Roles & Personas | Perspective |
| **Day 3** | 7. Iterative Prompting | Refinement |
| | 8. Break Tasks into Smaller Steps | Decomposition |
| | 9. Clarify Ambiguous Prompts | Diagnosis |
| **Day 4** | 10. Few-Shot Examples & Advanced Patterns | Demonstration |
| **Day 5** | 11. Recognize AI Limitations | Awareness |
| | 12. Verify AI-Generated Information | Validation |
| | 13. Project-Based AI Workflows | Integration |

These 13 techniques are not independent skills you select from a menu. They are **layers** that stack on top of each other. A great project workflow (Technique 13) uses all 12 techniques that came before it.

### The Week 1 Competency Check

You should now be able to:

- [ ] Write a structured prompt with context, task, and constraints (Days 1--2)
- [ ] Assign a role and define the expected output format (Day 2)
- [ ] Iterate on AI responses and decompose complex tasks (Day 3)
- [ ] Provide examples and use advanced prompt patterns (Day 4)
- [ ] Identify when AI output needs verification and apply the Verification Workflow (Day 5)
- [ ] Design and execute a complete AI-assisted project workflow (Day 5)

If any of these feel shaky, revisit the relevant lesson before moving to Week 2. The advanced material builds directly on these foundations.

---

## What's Coming in Week 2: Agent Deployment

Week 1 taught you how to work with AI through prompts --- single conversations where you drive every interaction. Week 2 changes the paradigm entirely.

**Week 2: Agent Deployment** covers:

- **What AI agents are** and how they differ from prompt-response interactions
- **Multi-agent systems** where specialized agents collaborate on complex tasks
- **Tool use and function calling** --- giving agents the ability to execute code, query databases, and interact with external services
- **Agent orchestration patterns** --- how to design, deploy, and monitor agents that run autonomously
- **Guardrails and safety** --- ensuring agents operate within defined boundaries

In Week 1, you were the driver and the AI was the tool. In Week 2, you become the **architect** --- designing systems where agents operate with increasing autonomy under your supervision.

The prompt engineering skills from this week are not left behind. They become the foundation for how you instruct, constrain, and evaluate your agents. Every technique you learned this week will be used in Week 2 at a higher level of abstraction.

See you in Week 2.
