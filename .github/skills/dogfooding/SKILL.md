---
name: dogfooding
description: 'Critically test an app like a real user and give blunt product feedback. Use when asked to dogfood, evaluate fun, identify friction, assess replayability, or provide actionable UX/gameplay critique.'
argument-hint: 'What should I dogfood and what should I optimize for?'
user-invocable: true
---

# Dogfooding Review

Run a realistic, critical product pass that focuses on user joy, friction, trust, and repeat usage.

Scope: Workspace-scoped skill for this repository.

## When To Use
- User asks to dogfood an app, feature, flow, or prototype
- User asks for critical feedback instead of implementation
- User asks whether something is fun, engaging, sticky, or boring
- User asks for product critique from a first-time-user perspective

## Outputs
- A mandatory rubric table with category scores from 1 to 10
- A final weighted verdict score from 1 to 10
- Findings ordered by severity
- Evidence tied to observed behavior and implementation points
- A short, prioritized list of high-impact improvements

## Default Tone
- Candid and direct by default
- Constructive, specific, and non-hostile
- Avoid sugarcoating or vague praise

## Procedure
1. Define test intent and constraints.
Ask what "good" looks like for this run (fun, speed, clarity, trust, conversion, etc.).

2. Exercise the real flow first (required).
Use the running app when possible and step through:
- Entry/start screen
- Primary interaction loop
- Success state and post-success path
- Recovery and reset behavior

If you cannot access or interact with a running build, do not provide a final verdict score. Report the blocker, provide provisional observations, and request a runnable target.

3. Use code as evidence, not a substitute.
Read key files behind the tested flow to validate observed behavior and hidden constraints.

4. Score using a required product rubric.
Use a table and rate each category 1 to 10:
- First 30 seconds hook
- Core loop momentum
- Reward and celebration quality
- Social tension or motivation
- Replayability
- Trust and fairness

Also provide:
- Weighted final score = average of all rubric categories (rounded to one decimal)
- One-line rationale for each category score

5. Identify friction and root causes.
For each issue, answer:
- What the user feels
- Why it happens
- Which code/content choice causes it

6. Prioritize fixes by impact.
Recommend 3 to 5 changes with highest likely effect on enjoyment and retention.

## Decision Branches
- If live page is unavailable: do not issue final verdict score; provide provisional critique only and clearly flag missing runtime validation.
- If interaction appears smooth but fun is low: focus on mechanics depth, content novelty, and emotional payoff.
- If major bugs are found: report bugs first, then fun critique.
- If no major issues are found: state that clearly and highlight remaining risks and testing gaps.

## Quality Checks
- Feedback is specific, not generic
- Findings are evidence-backed
- Critique separates usability issues from fun-design issues
- Suggestions are practical and implementation-ready
- Tone is candid but constructive
- Rubric table is present in every completed review
- Final score is present only when live interaction occurred

## Suggested Response Shape
1. Dogfooder verdict
2. Mandatory rubric table and weighted score
3. What works
4. Critical findings
5. Top improvements
6. Optional next-step experiment plan
