---
title: 'Hello, world — and why this site exists'
description: 'A new home for notes on engineering, distributed systems, security, and building the Kāra programming language.'
pubDate: 2026-06-19
tags: ['meta', 'kara']
draft: true
---

This is the first post on the rebuilt site. The portfolio moved from Next.js to
Astro so that writing — not just a static résumé — is a first-class part of the
project. Posts live as Markdown, render to fully static HTML, and ship with
syntax highlighting, RSS, and per-post comments.

## What I'll write about

- **Distributed systems** — the parts that don't fit in a system-design diagram.
- **Platform security & integrity** — what account-recovery abuse actually looks
  like at scale.
- **Kāra** — a compiled, auto-parallelizing language I work on. Expect code.

Here's a taste of Kāra's effect-driven concurrency — the compiler proves the two
fetches are independent and runs them at once, with no `async`/`await`:

```rust
fn load(ids: [UserId]) -> [Profile] !io {
    ids.par_map(|id| {
        let user = fetch_user(id)      // !io
        let prefs = fetch_prefs(id)    // !io — independent, runs concurrently
        Profile { user, prefs }
    })
}
```

More soon. This post is marked `draft: true`, so it won't appear in the published
list until that's flipped — a handy way to stage writing.
