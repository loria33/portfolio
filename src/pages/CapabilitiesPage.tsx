export function CapabilitiesPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight text-textPrimary sm:text-3xl">
          How I Can Help
        </h1>
        <p className="max-w-2xl text-sm text-textMuted">
          I work at the intersection of engineering leadership, technical
          project management, and senior mobile/backend execution. Below is how
          I typically engage with teams and products.
        </p>
      </section>

      {/* Engineering Leadership */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-textPrimary">
            Engineering Leadership
          </h2>
          <p className="max-w-2xl text-sm text-textMuted">
            I operate as an Engineering Manager or Senior Engineering Manager
            who stays close to delivery. I help teams clarify priorities, make
            sound technical decisions, and create a culture that ships.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-textMuted sm:grid-cols-2">
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Engineering Manager / Senior EM leadership for growing teams.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Delivery ownership from roadmap to release.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Project scoping that balances ambition and realism.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Engineering process improvement to reduce friction and fire drills.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Technical planning and architecture review with senior engineers.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Cross-functional communication with product, design, and operations.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Distributed team coordination across time zones and disciplines.
          </div>
        </div>
      </section>

      {/* Technical Project Leadership */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-textPrimary">
            Technical Project Leadership &amp; Delivery
          </h2>
          <p className="max-w-2xl text-sm text-textMuted">
            Many teams have ideas and talent, but need more structure in how
            work gets defined and delivered. I provide project management with
            deep technical understanding — focused on product delivery, not
            status reporting.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-textMuted sm:grid-cols-2">
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Breaking large projects into executable phases that teams can own.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Defining milestones and scope with clear success criteria.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Translating business goals into engineering plans that make sense.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Reducing delivery chaos by creating predictable, visible workflows.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Improving execution clarity and accountability across teams.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Ensuring technical constraints and risks are surfaced early.
          </div>
        </div>
      </section>

      {/* React Native / Node.js */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-textPrimary">
            React Native &amp; Node.js Execution
          </h2>
          <p className="max-w-2xl text-sm text-textMuted">
            I still build. I work hands-on in React Native and Node.js codebases
            to help teams ship features, improve performance, and stabilize
            production systems.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-textMuted sm:grid-cols-2">
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            React Native mobile apps for iOS and Android.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Node.js APIs and services backed by PostgreSQL.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Postgres-backed systems with real-world performance and reliability.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Admin dashboards for internal and customer-facing tools.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Production releases and app store submissions.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Architecture modernization for legacy or stalled projects.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Debugging and rescue work when things are on fire.
          </div>
        </div>
      </section>

      {/* AI Product work */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-textPrimary">
            AI Product &amp; LLM Integration
          </h2>
          <p className="max-w-2xl text-sm text-textMuted">
            I help teams design AI-powered features that are trustworthy,
            understandable, and aligned with product goals — not just demos.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-textMuted sm:grid-cols-2">
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Gemini and other LLM integrations for production products.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            AI-assisted workflows that map to real user tasks.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Knowledge-driven Q&amp;A systems with curated content and controls.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Mobile AI experiences that feel native to the app.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Prompt architecture and evaluation for reliability.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Context-aware product design that uses data and history responsibly.
          </div>
        </div>
      </section>
    </div>
  )
}

