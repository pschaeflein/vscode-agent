---
name: Dogfooding Variants
description: Run a candid dogfooding review in fast-pass, launch-readiness, or regression-dogfood mode.
argument-hint: Variant and optional focus (fast-pass | launch-readiness | regression-dogfood)
agent: agent
tools: ['browser', 'read', 'search', 'todo']
---

Run a dogfooding review using [dogfooding skill](../skills/dogfooding/SKILL.md).

## Variant Selection
Infer variant from user argument. If missing, default to fast-pass.

- fast-pass: quick candid review focused on top user pain and fun blockers
- launch-readiness: stricter release-focused review with pass or fail recommendation
- regression-dogfood: compare current behavior to expected baseline and call out regressions first

## Variant Rules
- Always interact with the running app before issuing any final verdict score.
- If no runnable interaction is possible, provide provisional findings only and explicitly state blocker.
- Always include the required rubric table and weighted score when live interaction succeeds.
- Keep tone candid, specific, and constructive.

## Output Contract
1. Variant used and scope
2. Dogfooder verdict
3. Required rubric table with weighted score
4. Findings ordered by severity
5. Top improvements
6. For launch-readiness only: go or no-go recommendation with release risks
7. For regression-dogfood only: explicit regression list and likely root causes
