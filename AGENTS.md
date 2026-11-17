<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules
- Service names, prices and CTA labels live only in `src/lib/services.ts`; pages and the enquiry form read from it so prices never drift between pages.
- Each nav section (Home, About, Services, Portfolio, Process, Contact) is its own route with its own `head()`; service CTAs link to `/contact?service=<slug>` to preselect the form.
- Enquiries are validated with the shared zod schema in `src/lib/enquiry-schema.ts` and inserted by the `submitEnquiry` server function with the publishable key (insert-only RLS policy, no select/update/delete), because the site is self-hosted where no service-role key exists; visitors can never read submissions.
- `vite.config.ts` pre-bundles client deps via `optimizeDeps.include`; add any new client package there so mid-session re-optimization never loads a duplicate React.
- Portfolio items (concepts, uploaded mockup samples and uploaded trailer videos) live only in `src/lib/portfolio.ts` so labelling stays consistent; uploaded media is bundled unmodified as real files in `src/assets` (not CDN pointers), because Lovable's asset URLs 404 on self-hosted deployments.
- Brand logo variants are bundled as real files in `src/assets/logo/` (light-background pieces for the ivory header, dark-background full logo for the navy footer) and the favicon lives in `public/favicon.png`, for the same self-hosting reason as uploaded media.
