<div align="center">

# Generic Repo Templates

**Ready-to-use community health files for any open source repository.**

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
