import { Link } from "react-router-dom";

export function ConsultingPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight text-textPrimary sm:text-3xl">
          Consulting Engagements
        </h1>
        <p className="max-w-2xl text-sm text-textMuted">
          I offer targeted consulting for teams that need engineering
          leadership, technical project management, or senior React Native /
          Node.js execution without adding a full-time executive hire.
        </p>

        <p className="max-w-2xl text-sm text-textMuted">
          <h2 className="text-2xl font-semibold tracking-tight text-accent sm:text-2xl">
            First week is free ( no credit card required - no commitment )
          </h2>
          Lets chat and see if we're a good fit.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {/* Offer 1 */}
        <article className="flex flex-col gap-3 rounded-2xl border border-borderSubtle bg-surface/80 p-5">
          <header className="space-y-1">
            <h2 className="text-sm font-semibold text-textPrimary">
              Engineering Leadership &amp; Delivery Consulting
            </h2>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentMuted">
              Best for startups that need stronger execution.
            </p>
          </header>
          <p className="text-sm text-textMuted">
            I join as an engineering leadership partner focused on delivery:
            aligning the roadmap, clarifying priorities, and building the
            structures your team needs to ship reliably. This is a good fit when
            you need an Engineering Manager / Senior Engineering Manager
            presence without a full-time hire.
          </p>
          <ul className="mt-1 space-y-1.5 text-xs text-textMuted">
            <li>Project planning that turns ideas into actionable plans.</li>
            <li>
              Delivery structure tailored to your team’s size and maturity.
            </li>
            <li>Engineering process improvement to reduce interruptions.</li>
            <li>Roadmap breakdown into phases, milestones, and ownership.</li>
            <li>Architecture review with a practical, product-focused lens.</li>
            <li>Technical leadership integrated with your existing team.</li>
          </ul>
        </article>

        {/* Offer 2 */}
        <article className="flex flex-col gap-3 rounded-2xl border border-borderSubtle bg-surface/80 p-5">
          <header className="space-y-1">
            <h2 className="text-sm font-semibold text-textPrimary">
              Project Management for Technical Teams
            </h2>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentMuted">
              Best for teams with shipping problems.
            </p>
          </header>
          <p className="text-sm text-textMuted">
            I provide project management that understands the realities of
            engineering work. Instead of generic status tracking, I focus on
            technical project leadership — helping teams scope, sequence, and
            deliver complex work with fewer surprises.
          </p>
          <ul className="mt-1 space-y-1.5 text-xs text-textMuted">
            <li>Turning ideas into scoped phases that fit your constraints.</li>
            <li>
              Milestone definition with realistic timelines and dependencies.
            </li>
            <li>Technical coordination across mobile, backend, and AI work.</li>
            <li>
              Managing moving parts across product, design, and engineering.
            </li>
            <li>
              Bringing clarity to delivery so everyone knows what “done” means.
            </li>
            <li>Reducing risk by surfacing technical trade-offs early.</li>
          </ul>
        </article>

        {/* Offer 3 */}
        <article className="flex flex-col gap-3 rounded-2xl border border-borderSubtle bg-surface/80 p-5">
          <header className="space-y-1">
            <h2 className="text-sm font-semibold text-textPrimary">
              React Native / Node.js Consulting
            </h2>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentMuted">
              Best for teams that need senior hands-on help.
            </p>
          </header>
          <p className="text-sm text-textMuted">
            I join your team as a senior React Native and Node.js contributor to
            help you ship features, stabilize production, or modernize
            architecture. This is ideal when you need extra senior capacity
            without a long-term hire.
          </p>
          <ul className="mt-1 space-y-1.5 text-xs text-textMuted">
            <li>React Native feature work and architecture improvements.</li>
            <li>Mobile app performance and stability tuning.</li>
            <li>Node.js backend support for APIs and services.</li>
            <li>Debugging and stabilization of existing systems.</li>
            <li>Production optimization before major launches.</li>
            <li>AI feature integration into existing apps.</li>
          </ul>
        </article>
      </section>

      <section className="rounded-2xl border border-borderSubtle bg-surface/80 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base font-semibold text-textPrimary">
              Ready to talk about an engagement?
            </h2>
            <p className="mt-1 max-w-xl text-sm text-textMuted">
              Share a bit about your team and what you’re building, and we can
              explore whether leadership, delivery, or hands-on consulting is
              the right fit.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-soft-card hover:bg-accentSoft transition"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
