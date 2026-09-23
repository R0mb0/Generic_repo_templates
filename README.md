<div align="center">

# Generic Repo Templates

[![pages-build-deployment](https://github.com/R0mb0/Generic_repo_templates/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/R0mb0/Generic_repo_templates/actions/workflows/pages/pages-build-deployment)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/df35ba28f8c447119cdad9bcad4b60d9)](https://app.codacy.com/gh/R0mb0/Generic_repo_templates/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/R0mb0/Love_link_generator)
[![Open Source Love svg3](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)](https://github.com/R0mb0/Love_link_generator)
![License](https://img.shields.io/badge/license-CC0%201.0-blue.svg?style=plastic)

**Ready-to-use community health files for any open source repository.**

<div align="center">
  <a href="http://paypal.me/R0mb0">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/R0mb0/Support_the_dev_badge/blob/main/Badge/SVG/Support_the_dev_badge_Dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://github.com/R0mb0/Support_the_dev_badge/blob/main/Badge/SVG/Support_the_dev_badge_Light.svg">
      <img alt="Saved you time? Support the dev" src="https://github.com/R0mb0/Support_the_dev_badge/blob/main/Badge/SVG/Support_the_dev_badge_Default.svg">
    </picture>
  </a>
</div>

</div>

---

## What's in here

A small, generic set of files that every open source repository should
have, but that most people copy-paste from somewhere and forget to
adapt — or never write at all:

| File | Purpose |
|---|---|
| [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md) | Standard Contributor Covenant 2.1 |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | How to report bugs, suggest features, and submit code |
| [`SECURITY.md`](SECURITY.md) | Private vulnerability disclosure policy |
| [`SUPPORT.md`](SUPPORT.md) | Where to get help |
| [`.github/ISSUE_TEMPLATE/bug_report.md`](.github/ISSUE_TEMPLATE/bug_report.md) | Bug report template |
| [`.github/ISSUE_TEMPLATE/feature_request.md`](.github/ISSUE_TEMPLATE/feature_request.md) | Feature request template |
| [`.github/PULL_REQUEST_TEMPLATE.md`](.github/PULL_REQUEST_TEMPLATE.md) | Pull request template |

## Why generic

Most templates you find online carry leftovers from the project they
were copied from — a mention of a specific build tool, a "Desktop vs.
Smartphone" environment split that only makes sense for a web app, a
"Firmware/Toolchain/SDK" section meant for an embedded project. These
files make **no assumption** about what your project is: a library, a
CLI tool, a web app, a game, a LaTeX package, anything.

## How to use

1. Copy the files into the root of your repository (and the
   `.github/ISSUE_TEMPLATE/` + `.github/PULL_REQUEST_TEMPLATE.md`
   files into your own `.github/` folder).
2. Replace the contact email in `SECURITY.md` and `CODE_OF_CONDUCT.md`
   with your own.
3. That's it — no other adaptation needed. If your project later needs
   something more specific (e.g. a CONTRIBUTING.md with build/test
   instructions), feel free to extend these, they're a starting point,
   not a strict standard.

If a repository doesn't have its own copy of these files, GitHub can
also serve organization-wide defaults from a special `.github`
repository — see [GitHub's documentation on community health
files](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions)
if you're setting that up for an organization instead of a single repo.

## License

Dedicated to the public domain under [CC0 1.0](LICENSE) — copy, adapt,
and reuse without attribution.

<a href="https://github.com/R0mb0/Crafted_with_AI">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/R0mb0/Crafted_with_AI/blob/main/Badge/SVG/CraftedWithAIDark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/R0mb0/Crafted_with_AI/blob/main/Badge/SVG/NotMadeByAILight.svg">
    <img alt="Not made by AI" src="https://github.com/R0mb0/Crafted_with_AI/blob/main/Badge/SVG/NotMadeByAIDefault.svg">
  </picture>
</a>
