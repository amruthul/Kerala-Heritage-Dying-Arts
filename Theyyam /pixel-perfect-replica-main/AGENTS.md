<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Kerala Heritage images and copy live in src/lib/heritage-data.ts so placeholder visuals can be swapped for verified photos in one place.
- Scroll effects use IntersectionObserver + rAF scroll progress (no GSAP) to keep the bundle light and respect reduced motion.
