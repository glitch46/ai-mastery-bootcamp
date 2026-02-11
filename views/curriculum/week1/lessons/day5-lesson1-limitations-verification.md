<!--
title: "Recognize Limitations & Verify Information"
day: 5
lesson: 1
difficulty: 5
estimated_time: "14 min"
prerequisites:
  - "Day 1: Introduction to Prompt Engineering"
  - "Day 2: Writing Clear Instructions & Role-Based Prompting"
  - "Day 3: Iterative Prompting & Task Decomposition"
  - "Day 4: Advanced Prompt Patterns for Developers"
-->

# Recognize Limitations & Verify Information

Everything you have learned this week --- structure, context, iteration, decomposition, role assignment, examples, constraints --- makes AI dramatically more useful. But none of it makes AI **reliable by default**. This lesson teaches the most critical skill of the entire bootcamp: knowing when *not* to trust the output and how to verify it before it causes real damage.

This is not a cautionary afterthought. This is the skill that separates professionals who use AI effectively from people who ship bugs, propagate misinformation, and erode trust in their own work.

---

## Learning Objectives

By the end of this lesson, you will be able to:

1. Identify the five fundamental limitations of current AI models
2. Recognize red-flag categories that **always** require external verification
3. Apply the **Verification Workflow** to any AI-generated output before acting on it
4. Use the **Verification Checklist** to systematically validate facts, code, and recommendations
5. Diagnose a subtle bug in AI-generated code that passes surface-level review

---

## Why This Is Critical

In Days 1--4 you learned how to get *better* output from AI. Better is not the same as *correct*. Consider these real consequences of unverified AI output:

- A developer copies an AI-generated SQL query into production. It works on test data. In production, it silently drops rows where a nullable column is `NULL` because the AI used an inner join where a left join was needed. The bug ships. Revenue reports are wrong for two weeks before anyone notices.

- A junior engineer asks AI to implement JWT authentication. The AI produces clean, well-structured code that stores the JWT secret in a client-accessible environment variable. The code review catches it --- but only because the reviewer knew to look.

- A startup founder uses AI to draft terms of service. The AI produces fluent, professional-sounding legal text that omits a liability limitation clause standard in their jurisdiction. They don't verify with a lawyer.

None of these failures happened because the prompts were bad. The prompts were fine. The failure was **trusting the output without verification**.

---

## Deep Dive

### The Five Fundamental Limitations

Every AI model you use today --- regardless of vendor or version --- has these constraints:

#### 1. No Access to Real-Time or Post-Training Data

AI models are trained on data up to a specific cutoff date. They do not know:

- Today's stock prices, weather, or news
- Whether a software library released a new version last week
- The current status of a GitHub issue or pull request
- Any event that happened after their training data was collected

**Developer impact:** When AI recommends a library version, an API endpoint, or a configuration option, it may be referencing something that has been deprecated, renamed, or removed.

#### 2. No Access to Private or Proprietary Data

Unless you explicitly provide it in the prompt, the AI has no knowledge of:

- Your company's codebase, architecture, or internal APIs
- Your database schema, deployment pipeline, or infrastructure
- Private documentation, Slack conversations, or internal wikis
- Customer data, business metrics, or internal roadmaps

**Developer impact:** AI will generate plausible-looking code that references patterns, conventions, or APIs that don't exist in your system. It fills gaps with statistically likely guesses.

#### 3. Unreliable on Complex Reasoning and Mathematics

AI models are language models, not logic engines. They struggle with:

- Multi-step mathematical proofs
- Complex algorithmic analysis (Big-O for non-trivial cases)
- Formal verification of correctness
- Precise numerical calculations, especially with floating-point edge cases

**Developer impact:** AI can write a sorting algorithm and even explain its time complexity. But if you ask it to prove the correctness of a concurrent data structure or calculate the exact failure probability of a distributed consensus protocol, the answer may look rigorous while being subtly wrong.

#### 4. No Subjective Judgment on High-Stakes Topics

AI models produce text that reflects statistical patterns in training data. They do not have:

- Medical expertise or the ability to diagnose conditions
- Legal qualification or jurisdiction-specific knowledge
- Financial advisory credentials or awareness of your financial situation
- Ethical frameworks grounded in your organization's values

**Developer impact:** If AI recommends a software license, a data retention policy, or a security compliance approach, it is pattern-matching, not advising. The recommendation may be reasonable. It may also be wrong for your jurisdiction, industry, or company.

#### 5. No Guarantee of Accuracy (Hallucination)

AI models can and do generate:

- Function names, API endpoints, and library methods that don't exist
- Citations to papers, articles, and documentation that were never written
- Statistics, dates, and quotes that are fabricated but plausible
- Code that compiles and runs but produces incorrect results for certain inputs

**Developer impact:** This is the most dangerous limitation because hallucinated output often *looks* correct. It follows the right patterns, uses the right terminology, and presents information with the same confidence as factual responses.

---

### Red Flags: Categories That Always Require Verification

When AI output touches any of these domains, verify before acting --- no exceptions:

| Category | Why It's Dangerous | Verification Source |
|----------|-------------------|-------------------|
| **Financial advice** | Wrong numbers or outdated tax rules can cause real monetary loss | Licensed financial professional, official IRS/regulatory sites |
| **Medical information** | Incorrect dosages, interactions, or diagnoses can cause harm | Licensed medical professional, peer-reviewed sources |
| **Legal guidance** | Jurisdictions vary; AI doesn't know which laws apply to you | Licensed attorney in your jurisdiction |
| **Historical facts & dates** | AI frequently conflates similar events or fabricates details | Primary sources, academic references |
| **Technical specifications** | API signatures, config options, and version numbers drift | Official documentation for the specific version |
| **Statistics & data** | AI generates plausible-sounding numbers that may be fabricated | Original research papers, official data sources |
| **Security implementations** | A single flaw can compromise an entire system | Security audits, OWASP guidelines, peer review |
| **Library versions & compatibility** | Training data is frozen; ecosystems are not | `npm info`, `pip show`, official changelogs |

---

### The Verification Workflow

Every piece of AI output that will influence a decision or ship to production should pass through this pipeline:

```
AI Response
    |
    v
YOUR REVIEW
    - Does this match my domain knowledge?
    - Does anything feel "too smooth" or suspiciously confident?
    - Are there specific claims I can check?
    |
    v
EXTERNAL VERIFICATION
    - Cross-reference against official documentation
    - Check dates, version numbers, and statistics
    - Verify quotes and citations actually exist
    - Run code and test edge cases
    |
    v
FINAL DECISION
    - Verified facts: use them
    - Unverified claims: flag or remove them
    - Incorrect information: correct it and note the error
```

This is not paranoia. This is the same review process you would apply to a pull request from a new contributor. You don't merge without reviewing. Don't ship AI output without verifying.

---

### The Verification Checklist

Use this checklist for any non-trivial AI output:

- [ ] **Cross-reference claims** against at least one reliable external source
- [ ] **Check dates and timelines** --- are they historically accurate?
- [ ] **Verify statistics** --- do the numbers come from a real, citable source?
- [ ] **Confirm quotes and citations** --- do these documents/papers/articles actually exist?
- [ ] **Validate technical specs** --- do the function signatures, API endpoints, and config options match official docs for the version you're using?
- [ ] **Review legal implications** --- does any recommendation touch licensing, compliance, privacy, or liability?
- [ ] **Test code** --- run it, write tests, hit edge cases, check error handling
- [ ] **Check for recency** --- could this information have changed since the model's training cutoff?

---

### Developer-Specific Verification Rules

These rules apply specifically to AI-generated code and technical recommendations:

#### Never Trust AI-Generated Security Code Blindly

AI-generated authentication, authorization, encryption, and input validation code is **especially** dangerous because:

- It often produces code that works for the happy path but fails on adversarial input
- It may use deprecated cryptographic algorithms or weak defaults
- It can miss CSRF protections, SQL injection vectors, or XSS vulnerabilities
- It may hardcode secrets or use insecure storage patterns

**Rule:** Every line of security-related AI-generated code gets manual review by someone who understands the threat model.

#### Always Verify Library Versions and Imports

```python
# AI might generate this:
from flask_restful import Api, Resource, reqparse

# But in your project, you use:
from flask_restx import Api, Resource, reqparse
```

AI doesn't know which version of which library you have installed. It generates imports based on what was common in training data. Always verify:

- The library name is correct for your project
- The import path matches the installed version
- The API hasn't changed between the version AI "knows" and the version you're running

#### Test Edge Cases AI Misses

AI tends to generate code that handles the common case well but misses:

- Empty inputs, null values, and missing fields
- Boundary conditions (off-by-one errors, integer overflow, empty collections)
- Concurrent access and race conditions
- Unicode, special characters, and locale-specific formatting
- Error propagation and cleanup in failure paths

---

## Case Studies

### Case Study 1: The Off-by-One Error That Passed Code Review

A developer asked AI to write a function that paginates database results:

```javascript
function paginateResults(items, page, pageSize) {
  const startIndex = page * pageSize;
  const endIndex = startIndex + pageSize;
  return {
    data: items.slice(startIndex, endIndex),
    totalPages: Math.ceil(items.length / pageSize),
    currentPage: page,
    hasNext: endIndex < items.length,
    hasPrevious: page > 0
  };
}
```

This looks clean. It's well-structured. It was merged.

**The bug:** The function uses 0-based page indexing (`page * pageSize`). The front-end team was passing 1-based page numbers. Page 1 returned results starting at index `pageSize`, skipping the entire first page. Page 0 --- which the UI never sent --- contained the first page of results.

Nobody saw it in code review because the function is internally consistent. The logic is correct *for 0-based pages*. The bug was a **contract mismatch** --- the kind of thing AI cannot catch because it doesn't know your front-end conventions.

**The fix was trivial:**
```javascript
const startIndex = (page - 1) * pageSize;
```

**The lesson:** AI generates code that is internally consistent. It does not validate that its assumptions match your system's assumptions. You must test the integration, not just the unit.

### Case Study 2: The Hallucinated API Method

A developer asked AI to write a function that resizes images using the Sharp library in Node.js:

```javascript
const sharp = require('sharp');

async function createThumbnail(inputPath, outputPath) {
  await sharp(inputPath)
    .resize(200, 200, { fit: 'cover' })
    .normalizeColor()
    .toFile(outputPath);
}
```

**The bug:** `.normalizeColor()` does not exist in the Sharp API. The actual method is `.normalize()`. The AI generated a method name that *sounds right* and follows the naming convention of the library, but it's fabricated.

This code throws a runtime error: `sharp(...).normalizeColor is not a function`. Had the developer verified against the Sharp documentation, they would have caught it immediately.

### Case Study 3: The Confident but Outdated Recommendation

A developer asked AI which Node.js LTS version to use for a new project. The AI confidently recommended Node.js 18 LTS, explained its features, and provided setup instructions.

**The problem:** At the time of the query, Node.js 18 had already reached end-of-life, and Node.js 22 was the current LTS. The AI's training data predated the LTS transition.

A 30-second check of the [Node.js releases page](https://nodejs.org/en/about/releases/) would have caught this.

---

## Advanced Strategies

### Strategy 1: Ask the AI to Identify Its Own Uncertainties

Add this to your prompts when the stakes are high:

> "After generating your response, list any claims where you are less than fully confident. Flag any version-specific information, statistics, or API details that the reader should independently verify."

This doesn't make the AI reliable, but it primes it to surface hedges rather than bury them.

### Strategy 2: Use AI to Generate Verification Tests

Instead of trusting AI-generated code directly, ask it to also generate tests:

> "Write the function AND a comprehensive test suite that covers: valid inputs, empty inputs, boundary values, invalid types, and concurrent access. Include at least two tests that you think are most likely to catch subtle bugs."

Then run the tests. If the tests pass, you have higher (but not absolute) confidence. If they fail, you've caught a problem before it shipped.

### Strategy 3: Adversarial Prompting

After receiving AI-generated code, follow up with:

> "Now review the code you just wrote. What are the three most likely bugs or edge cases it doesn't handle? What assumptions does it make that might not hold in production?"

AI is often better at *critiquing* code than generating perfect code on the first pass. Use that asymmetry to your advantage.

### Strategy 4: The Two-Source Rule

For any factual claim that will influence a decision:

1. Get the AI's answer
2. Verify against one official/primary source
3. If the two disagree, trust the primary source

This takes 30--60 seconds per claim and prevents the most common errors.

---

## Capstone Exercise

Below are three AI-generated responses. For each one, identify **what needs verification**, **explain why**, and **describe how you would verify it**.

---

### Response A: Database Recommendation

> "For your real-time analytics dashboard processing 50,000 events per second, I recommend using TimescaleDB. It supports continuous aggregates out of the box, can handle ingestion rates up to 2 million rows per second on commodity hardware, and has a 40% smaller storage footprint than standard PostgreSQL due to its built-in compression. It's also fully ACID-compliant and supports standard SQL."

**Your task:**
1. Which specific claims need verification?
2. What sources would you use to verify each one?
3. What additional context would you need before accepting this recommendation?

<details>
<summary>Guidance</summary>

**Claims to verify:**
- "2 million rows per second on commodity hardware" --- This is a specific performance claim. Check TimescaleDB's official benchmarks. "Commodity hardware" is vague; performance depends heavily on schema, row size, and hardware specs.
- "40% smaller storage footprint" --- Another specific metric. Check TimescaleDB docs on compression ratios. The actual ratio depends on data type and compression settings.
- "Fully ACID-compliant" --- Verify against TimescaleDB documentation. This is likely true (it's a PostgreSQL extension), but confirm for the specific operations you need.
- "Continuous aggregates out of the box" --- Verify this feature exists and check what limitations it has.

**Additional context needed:**
- Your existing tech stack and operational expertise
- Whether your team has PostgreSQL operational experience
- Your query patterns (not just ingestion rate)
- Licensing and cost implications for your scale

</details>

---

### Response B: Security Implementation

> "To implement rate limiting in your Express.js API, use the `express-rate-limit` middleware. Here's a production-ready configuration:
>
> ```javascript
> const rateLimit = require('express-rate-limit');
>
> const limiter = rateLimit({
>   windowMs: 15 * 60 * 1000,
>   max: 100,
>   standardHeaders: true,
>   legacyHeaders: false,
>   store: new rateLimit.MemoryStore()
> });
>
> app.use(limiter);
> ```
>
> This will limit each IP to 100 requests per 15-minute window."

**Your task:**
1. Is this actually "production-ready"? What's missing?
2. What specific verification would you perform before deploying this?
3. What edge cases or failure modes should you consider?

<details>
<summary>Guidance</summary>

**Problems with "production-ready":**
- `MemoryStore` is **not suitable for production** in multi-process or multi-server deployments. Each process has its own counter. Use a Redis-backed store instead.
- No `trustProxy` consideration --- if behind a load balancer or reverse proxy, `req.ip` may be the proxy's IP, rate-limiting all users as one.
- No per-route granularity --- applying one blanket limit to all endpoints may be too restrictive for some and too permissive for others.
- No custom error response --- the default 429 response may not match your API's error format.

**Verification steps:**
- Check `express-rate-limit` npm page for the current API (is `MemoryStore` still the class name? is `rateLimit.MemoryStore` the correct reference?)
- Test with multiple server instances to confirm the store limitation
- Test behind your actual proxy/load balancer setup

</details>

---

### Response C: Historical Claim in Documentation

> "REST was formally defined by Roy Fielding in his 2000 PhD dissertation at UC Irvine. The dissertation introduced six architectural constraints: client-server, stateless, cacheable, uniform interface, layered system, and code-on-demand (optional). REST quickly became the dominant API paradigm, and by 2005, most major tech companies had adopted RESTful APIs as their primary interface standard."

**Your task:**
1. Which facts can you verify quickly?
2. Which claim is most likely to be inaccurate or misleading?
3. How would you fact-check the timeline claim?

<details>
<summary>Guidance</summary>

**Verifiable facts:**
- Roy Fielding's dissertation (2000, UC Irvine) --- True, easily verified. The dissertation is publicly available.
- Six architectural constraints --- Verify the exact list against the dissertation. The six listed here are correct.

**Likely inaccurate claim:**
- "By 2005, most major tech companies had adopted RESTful APIs as their primary interface standard" --- This is an overstatement. In 2005, SOAP and XML-RPC were still dominant in enterprise. REST adoption accelerated significantly after 2006--2008 with the rise of Web 2.0 APIs (Twitter 2006, etc.). "Most major tech companies" by 2005 is misleading.

**How to verify:** Check the launch dates of major public APIs (Google, Amazon, Twitter, Facebook) and what protocol they originally used.

</details>

---

## Key Takeaways

1. **AI has five fundamental limitations:** no real-time data, no access to your private context, unreliable complex reasoning, no qualified judgment on high-stakes domains, and no guarantee of accuracy (hallucination).
2. **Certain categories always require verification:** financial, medical, legal, historical facts, technical specs, statistics, security implementations, and library versions.
3. **Use the Verification Workflow:** AI Response -> Your Review -> External Verification -> Final Decision. Every time.
4. **Developer-specific risks are real:** off-by-one errors, hallucinated API methods, outdated library versions, and insecure defaults are common in AI-generated code.
5. **AI is a draft generator, not an authority.** Treat every AI response the way you treat a first draft from a new team member: review it, verify it, test it, then decide.

---

## Week 1 Wrap-Up (Part 1 of 2)

You are now equipped with the single most important meta-skill for working with AI: **healthy skepticism backed by a systematic verification process**. Every technique from Days 1--4 makes AI output better. This lesson ensures you don't confuse "better" with "correct."

In the next lesson --- the final lesson of Week 1 --- you'll put everything together into complete project workflows that take you from blank page to shipped deliverable.

**Next Lesson:** [Day 5, Lesson 2 -- Project-Based AI Workflows (Capstone)](day5-lesson2-project-workflows.md)
