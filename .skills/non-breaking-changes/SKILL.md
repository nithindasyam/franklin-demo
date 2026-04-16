---
name: non-breaking-changes
description: Prevent regressions while implementing features or fixes. Use for any code, style, or behavior change where existing functionality must remain intact.
---

# Non-Breaking Changes

Apply this skill before and during implementation to ensure existing behavior is preserved.

## When to Use

Use for:
- Any modification to existing blocks, scripts, or styles
- Bug fixes that may affect shared behavior
- Refactors and cleanup work
- UI updates in pages/components with existing usage

## Core Rule

Do not ship a change unless you have validated that existing features still work.

## Workflow

1. Baseline current behavior
   - Identify what currently works and must not change.
   - Capture quick before-state notes (or screenshots when visual).

2. Define regression checklist
   - List 3-8 critical existing behaviors to preserve.
   - Include desktop/mobile for UI-impacting changes.

3. Implement minimally
   - Prefer small, targeted changes over broad overrides.
   - Avoid changing global behavior unless required.

4. Validate old + new behavior
   - Confirm the requested fix works.
   - Re-test checklist items for regressions.
   - Run lint/tests relevant to touched files.

5. Roll back risky deltas
   - If a change fixes one issue but breaks another, revert or narrow that change.
   - Prioritize stability over aggressive styling/logic rewrites.

## Regression Checklist Template

- Existing behavior 1 still works
- Existing behavior 2 still works
- Existing behavior 3 still works
- New change works as requested
- No console errors
- No lint/test failures in touched scope

## Guardrails

- Do not rely on assumptions about third-party DOM internals.
- Avoid speculative selectors when precise selectors are available.
- Prefer explicit, high-confidence selectors and isolated scopes.
- Do not claim completion without validation evidence.

## Success Criteria

- Requested change is implemented.
- No previously working feature is broken.
- Regression checklist is explicitly validated.
