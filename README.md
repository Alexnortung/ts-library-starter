# Typescript library starter

[![pkg.pr.new](https://pkg.pr.new/badge/Alexnortung/ts-library-starter)](https://pkg.pr.new/~/Alexnortung/ts-library-starter)
[![npm version](https://img.shields.io/npm/v/ts-library-starter.svg)](https://www.npmjs.com/package/ts-library-starter)
[![bundle size](https://img.shields.io/bundlephobia/minzip/ts-library-starter)](https://bundlephobia.com/package/ts-library-starter)
[![CI](https://github.com/Alexnortung/ts-library-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/Alexnortung/ts-library-starter/actions)
[![Snyk](https://snyk.io/test/github/Alexnortung/ts-library-starter/badge.svg)](https://snyk.io/test/github/Alexnortung/ts-library-starter)
[![Dependabot](https://badgen.net/github/dependabot/Alexnortung/ts-library-starter)](https://github.com/Alexnortung/ts-library-starter/security/dependabot)
[![License](https://img.shields.io/npm/l/ts-library-starter)](LICENSE)

---

This repo is a template for anyone who wants to build a typescript package, that can be published on npm.
It contains a lot of tools that you often need or is best practice in the development cycle.

**Tools**

- Bundling: With [tsup](https://tsup.egoist.dev/) as it needs very little configuration and can build both esm and cjs.
- [.editorconfig](./.editorconfig): Developers often use different editors and this file makes it much easier to work together.
- formatting and linting: with [biome](https://biomejs.dev/).
- [publint](https://publint.dev/): ensures package builds are correctly configured.
- [Knip](https://knip.dev/): Helps you remove old files and dependencies, which is often the result of incomplete refactors.
- API documentation: generated with [Deno doc](https://docs.deno.com/runtime/reference/cli/doc/) and published to [GitHub Pages](https://alexnortung.github.io/ts-library-starter/).
- CI: GitHub action workflows that checks that files have been formatted and linted, etc.
- Releases: [Release Please](https://github.com/googleapis/release-please) maintains a release PR from conventional commits. Merging that PR publishes the package to npm with provenance and creates a GitHub release.

## How to use this template

- find and replace every occurance of `Alexnortung` with your GitHub username.
- find and replace every occurance of `ts-library-starter` with the package name of your new package. (If the repo name is not the same as the package name, you should also search for github and replace the github links to this repo)
- Follow [pkg.pr.new instructions](https://pkg.pr.new) and install [the GitHub app](https://github.com/apps/pkg-pr-new)
- On npm, add this repository as a trusted publisher using the `release-please.yml` workflow. No `NPM_TOKEN` secret is needed.
- Protect the `main` branch and require the `CI / check` check.
- Go to repository settings -> Actions -> General -> Workflow permissions: Enable read and write + Allow GitHub Actions to create and approve pull requests
- Remove this section from the README file.

---

## Usage

Install with your package manager

```bash
$ npm install ts-library-starter
$ pnpm add ts-library-starter
$ bun add ts-library-starter
$ yarn add ts-library-starter
```

```ts
import { hello } from "ts-library-starter";

console.log(hello("World")); // Hello, World!
```

## License

Licensed under MIT see [LICENSE](./LICENSE).
