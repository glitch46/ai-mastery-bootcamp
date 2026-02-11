<!--
title: "CLI + Prompt Engineering Integration: Where Terminal Meets AI"
day: 4
lesson: 3
difficulty: 4
estimated_time: "14 min"
prerequisites:
  - "Day 1: Introduction to Prompt Engineering"
  - "Day 2: Writing Clear Instructions & Role-Based Prompting"
  - "Day 3: Iterative Prompting, Task Decomposition & Clarification"
  - "Day 4, Lesson 1: Prompt Drafting by the AI"
  - "Day 4, Lesson 2: Adjusting Tone and Depth"
-->

# CLI + Prompt Engineering Integration: Where Terminal Meets AI

You've spent the first three days learning to communicate with AI effectively. You've also been building command-line skills through the bootcamp's [Terminal Velocity](/terminal-velocity-game.html) game and [CLI Mastery](/cli-mastery.html) tutorial. Today, we connect those two worlds.

The developers who get the most out of AI aren't the ones who type the cleverest prompts into a chat window. They're the ones who **wire AI into their terminal workflows** -- piping real data into AI tools, automating repetitive tasks, and building feedback loops between their code and their AI.

This is the power combo: **CLI + AI**.

---

## Learning Objectives

By the end of this lesson, you will be able to:

1. Explain how piping terminal output into AI tools provides better context than manual copy-paste
2. Use CLI-based AI tools (Claude CLI, OpenCode, GitHub Copilot CLI) in development workflows
3. Build three practical CLI + AI workflow patterns: diagnostic, generative, and review
4. Design custom shell commands that combine standard Unix tools with AI prompts

---

## Why This Matters

Chat-based AI tools (ChatGPT in a browser, for example) are useful. But they have a friction problem: you see an error in your terminal, switch to a browser, paste the error, wait for a response, switch back, apply the fix, re-run, and repeat. Every context switch costs you time and focus.

CLI-integrated AI eliminates that friction. The error, the diff, the log output -- it's already in your terminal. With the right setup, you pipe it directly into an AI tool without leaving your workflow. The AI sees the *exact* output, not a paraphrased version you typed from memory.

This is also where the prompt engineering skills from Days 1-3 pay compound interest. When you combine a well-structured prompt with real terminal data as context, the AI's responses jump from "generic advice" to "specific, actionable fixes for your exact situation."

---

## The Technique Explained

### The Pipe Pattern

The fundamental pattern for CLI + AI integration is the Unix pipe:

```bash
<command that produces output> | <ai tool> "<prompt explaining what to do with it>"
```

This is powerful because:

- **The AI sees real data**, not your summary of it
- **Context is automatic** -- whatever the command outputs is the context
- **It's composable** -- you can chain multiple transformations
- **It's repeatable** -- save it as an alias or script and run it again

### CLI-Based AI Tools

Several tools bring AI directly into your terminal:

| Tool | What It Does | Example |
|------|-------------|---------|
| **OpenCode** | Interactive AI coding agent in the terminal | `opencode` to launch, then work with your codebase |
| **Claude CLI** | Anthropic's CLI tool for Claude | `echo "explain this" \| claude` |
| **GitHub Copilot CLI** | AI-powered command suggestions | `gh copilot suggest "find large files in git history"` |
| **llm** (by Simon Willison) | Multi-provider CLI for LLMs | `cat error.log \| llm "what went wrong?"` |
| **aichat** | Terminal-based AI chat | `aichat -e "optimize this SQL query"` |

The specific tool matters less than the pattern. Once you understand the pipe pattern, you can use it with any CLI AI tool.

### Three Workflow Patterns

Most CLI + AI workflows fall into three categories:

**1. Diagnostic** -- Pipe a problem into AI, get an explanation or fix
```
<broken output> | ai "<what's wrong and how to fix it>"
```

**2. Generative** -- Use AI to create code, scripts, or config from a description
```
ai "<generate a thing>" > output_file
```

**3. Review** -- Pipe existing code or changes into AI for analysis
```
<code or diff> | ai "<review this for X>"
```

---

## Real-World Walkthrough

### Workflow 1: Diagnostic -- Fix Failing Tests

You run your test suite and get failures. Instead of reading through the output and debugging manually, pipe it to AI:

```bash
npm test 2>&1 | opencode "These test results include failures. For each failing test:
1. Explain why it's likely failing
2. Suggest a specific fix
3. Show the corrected code

Focus on the root cause, not just making the test pass."
```

**What's happening:**
- `npm test 2>&1` runs the tests and captures both stdout and stderr
- The pipe sends the full test output -- assertion errors, stack traces, and all -- directly to the AI
- The prompt tells the AI exactly what to do with the data

**Why this beats chat:** The AI sees the exact error messages, line numbers, and stack traces. You don't lose details by paraphrasing.

### Workflow 2: Generative -- AI-Written Commit Messages

You've made changes and need a commit message. Let the diff write it:

```bash
git diff --staged | opencode "Write a commit message for these changes.
Use Conventional Commits format (type: subject).
The subject line should be max 72 characters, imperative mood.
Add a body paragraph explaining WHY the change was made, not WHAT files changed.
If there are multiple logical changes, suggest splitting into separate commits."
```

**What's happening:**
- `git diff --staged` shows exactly what's about to be committed
- The AI reads the actual code changes and generates a message that reflects them
- The prompt specifies the format convention your team uses

**Advanced version -- commit directly:**

```bash
git diff --staged | opencode "Write only the commit message, no other text. Conventional Commits format." | git commit -F -
```

This pipes the AI-generated message directly into `git commit`. Use with caution -- review the message before pushing.

### Workflow 3: Review -- Security Audit a Diff

Before merging a PR, pipe the diff through a security review:

```bash
git diff main...feature-branch | opencode "Review this diff for security issues. Check for:
- SQL injection or NoSQL injection
- Cross-site scripting (XSS) vectors
- Sensitive data exposure (API keys, tokens, passwords in code)
- Missing input validation on user-supplied data
- Authentication or authorization bypasses

For each finding: state the file and line, the vulnerability, the severity (critical/high/medium/low), and a suggested fix.
If no issues are found, state that explicitly."
```

**What's happening:**
- `git diff main...feature-branch` shows all changes between the main branch and the feature branch
- The AI performs a focused security review on the exact changes, not the entire codebase
- The prompt defines what to look for and how to report findings

### Workflow 4: Generative -- Bash Script Creation

Need a script but don't want to write it from scratch? Describe what you need:

```bash
opencode "Write a bash script that:
1. Finds all .log files in /var/log older than 30 days
2. Compresses them with gzip
3. Moves the compressed files to /var/log/archive/
4. Creates the archive directory if it doesn't exist
5. Logs each action to /var/log/log-cleanup.log with timestamps
6. Runs safely with 'set -euo pipefail'

Output only the script, no explanation." > cleanup-logs.sh
```

**Then test it before running in production:**

```bash
# Review what the AI generated
cat cleanup-logs.sh

# Dry-run: replace the dangerous commands with echo to see what would happen
bash -x cleanup-logs.sh  # trace mode shows each command before execution
```

**Critical rule:** Never pipe AI-generated scripts directly into `bash` or `sh` without reviewing them first. Always write to a file, review, then execute.

---

## Advanced Tips

### 1. Build Shell Aliases for Common Patterns

Save your most-used CLI + AI workflows as aliases or shell functions:

```bash
# Add to your .bashrc or .zshrc

# AI-powered commit message from staged changes
alias aicommit='git diff --staged | opencode "Write a conventional commit message for these changes. Subject line only, max 72 chars, imperative mood."'

# Explain the last command's error
alias explain='fc -ln -1 | xargs -I {} opencode "I ran this command: {}. It produced an error. Explain what went wrong and how to fix it."'

# Summarize a file
aisum() {
    cat "$1" | opencode "Summarize this file. What does it do? What are the key functions/classes? What dependencies does it use?"
}
```

### 2. Chain AI With Traditional Unix Tools

AI tools work best as one link in a pipeline chain:

```bash
# Find the largest functions in your codebase, then ask AI to suggest refactoring
rg -c "function" --sort-files src/ | sort -t: -k2 -rn | head -5 | \
  xargs -I {} sh -c 'echo "=== {} ===" && cat {}' | \
  opencode "These are the files with the most functions. Identify any functions over 50 lines and suggest how to refactor them."
```

### 3. Use Environment Variables for Prompt Templates

Store complex prompt templates in environment variables or files:

```bash
# In .bashrc
export CODE_REVIEW_PROMPT="Review this code for: readability, performance, error handling, and adherence to SOLID principles. Format findings as a numbered list with severity."

# Usage
cat src/services/auth.ts | opencode "$CODE_REVIEW_PROMPT"
```

### 4. Leverage the Terminal Velocity Skills

The CLI skills you've been building in the bootcamp's [Terminal Velocity](/terminal-velocity-game.html) game -- navigation, piping, file manipulation, process control -- are the foundation for these AI workflows. Every command you've practiced (`grep`, `find`, `xargs`, `awk`, pipes, redirects) becomes a building block for AI-powered automation.

If you haven't completed the [CLI Mastery](/cli-mastery.html) tutorial yet, circle back to it. The commands you learn there are the left side of every pipe in this lesson.

---

## Practice Exercise

Design three CLI + AI workflow commands for common developer tasks. For each one:

1. Write the full command (or short script)
2. Explain what each part of the pipeline does
3. Include the prompt with appropriate tone/depth modifiers (from Lesson 2)
4. Note any safety considerations

---

**Task A: Dependency Audit**

Your project has outdated dependencies. Design a command that:
- Lists outdated npm packages (hint: `npm outdated`)
- Pipes the list to an AI tool
- Asks the AI to identify which outdated packages have known security vulnerabilities, which have breaking changes in the latest version, and which are safe to update

*Starting point:*
```bash
npm outdated --json | opencode "<your prompt here>"
```

---

**Task B: Log Analysis**

Your production application has been throwing intermittent errors. Design a command that:
- Extracts the last 100 error-level log entries (hint: `grep` or `rg`)
- Pipes them to an AI tool
- Asks the AI to identify patterns, group related errors, and suggest the most likely root cause

*Starting point:*
```bash
rg "ERROR" /var/log/app/app.log --max-count 100 | opencode "<your prompt here>"
```

---

**Task C: PR Description Generator**

You're about to open a pull request. Design a command that:
- Gathers the commit history and diff between your branch and main
- Pipes it to an AI tool
- Asks the AI to generate a PR description with a summary, list of changes, testing notes, and any migration steps

*Starting point:*
```bash
(git log main..HEAD --oneline && echo "---DIFF---" && git diff main...HEAD --stat) | opencode "<your prompt here>"
```

---

**Bonus challenge:** Implement one of your three designs as a shell function in your `.bashrc` or `.zshrc`. Test it on a real project.

---

## Key Takeaways

- **Pipe real terminal output into AI tools** for context that's more accurate than anything you'd type manually. The AI sees exact error messages, diffs, and logs.
- **Three workflow patterns cover most use cases:** diagnostic (fix problems), generative (create code/scripts), and review (analyze existing code).
- **CLI + AI eliminates context switching.** You stay in your terminal, stay in flow, and get answers faster.
- **Never blindly execute AI-generated scripts.** Always write to a file, review, then run. Use trace mode (`bash -x`) for verification.
- **Build aliases and shell functions** for workflows you repeat. This turns multi-step AI interactions into single commands.
- **Your CLI skills are the foundation.** Every Unix tool you know becomes more powerful when you can chain it with an AI tool. The [Terminal Velocity](/terminal-velocity-game.html) game and [CLI Mastery](/cli-mastery.html) tutorial give you these building blocks.

---

## Next Steps

You've completed Day 4 of the AI Mastery Bootcamp. Today you learned three advanced techniques:

- **Meta-prompting** -- letting the AI tell you what context to provide (Lesson 1)
- **Tone and depth control** -- making the AI's output match your audience (Lesson 2)
- **CLI + AI integration** -- piping terminal data into AI tools for real development workflows (Lesson 3)

These techniques build on everything from Days 1-3: clear prompts, specific context, defined outcomes, iterative refinement, and task decomposition. Combined with command-line fluency, you now have a toolkit for making AI a practical part of your daily development workflow -- not just a chat window you visit occasionally.

Proceed to: **Day 5 -- Putting It All Together**
