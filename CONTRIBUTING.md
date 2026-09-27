# Contribution Guide

## AI usage

You are allowed to use AI to help you contribute, but you should follow these rules.

### 1. Do not communicate through your LLM

If you want to open a pull request, comment on an issue, reply to a review, etc. You MUST use your own words and not use an LLM to answer for you or on your behalf. AI-generated summaries tend to be long-winded, dense, and often inaccurate. Simplicity is an art. The goal is not to sound impressive, but to communicate clearly.

### 2. Do not let the AI do the thinking for you

You may use AI to get an overview of the project, write code for you or ask questions for how something works, etc.
But you should do the thinking and understand what the code does and why those changes were made.
Do not act like a [meat proxy](https://meatproxy.me/), you may ask AI if you are unsure, but use your own words, and let the maintainers know if there is something you do not fully understand.

PRs that we consider fully vibe-coded may be closed without further explanation.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

## Coding standards

This repository follows multiple standards and best practices.

- Code must be formatted (run `pnpm run format`)
- Code must be linted (run `pnpm run lint`)

Your changes are run through [the CI pipeline checks](./.github/workflows/ci.yml), so make sure it will pass all these checks pass.
