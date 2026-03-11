import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="grid gap-10 lg:grid-cols-[1.35fr_minmax(0,1fr)] lg:items-center">
        <div className="space-y-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentMuted">
            Engineering Leadership • React / React Native • Node.js • AI Product
            Delivery
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-textPrimary sm:text-4xl lg:text-5xl">
            Engineering Leadership, Product Delivery, and AI-Powered
            Intergration Expertise
          </h1>
          <p className="max-w-xl text-sm text-textMuted sm:text-base">
            I help teams plan, build, and ship products — from engineering
            leadership and project structure to hands-on React Native and
            Node.js execution.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-soft-card shadow-accent/40 hover:bg-accentSoft transition"
            >
              Work With Me
            </Link>
            <Link
              to="/work"
              className="rounded-full border border-borderSubtle px-5 py-2.5 text-sm font-medium text-textPrimary hover:border-accent hover:text-accent transition"
            >
              See My Work
            </Link>
          </div>

          <p className="text-xs text-textMuted">
            Engineering Manager / Senior EM • React Native Consultant • Node.js
            Consultant • AI Product Consultant
          </p>
        </div>

        <div className="rounded-2xl border border-borderSubtle bg-surface/60 p-5 text-sm text-textMuted shadow-soft-card">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accentMuted">
            POSITIONING
          </p>
          <p className="mb-3">
            An Engineering Manager / Senior EM who can bring structure to
            delivery, consult on technical project execution, and contribute
            hands-on to React Native and Node.js products — especially where AI
            is part of the roadmap.
          </p>
          <p>
            Ideal for startup founders, small product teams, and companies that
            need senior delivery leadership without adding a full-time
            executive.
          </p>
          <img
            src="/images/lori.jpg"
            alt="Lori Azerrad"
            className="mt-4 h-28 w-28 rounded-full border border-borderSubtle object-cover"
          />
        </div>
      </section>

      {/* Credibility strip */}
      <section className="rounded-2xl border border-borderSubtle bg-surface/80 p-5 sm:p-6">
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accentMuted">
          <span>DELIVERY & EXECUTION</span>
        </div>
        <div className="grid gap-4 text-xs text-textMuted sm:grid-cols-3 sm:text-sm">
          <p>Built and shipped production mobile products.</p>
          <p>Experience as Engineering Manager / Senior Engineering Manager.</p>
          <p>React Native and Node.js consultant on real-world products.</p>
          <p>AI-powered product architecture and implementation.</p>
          <p>Led teams across mobile, backend, and product initiatives.</p>
          <p>Brought order to messy execution and unclear roadmaps.</p>
        </div>
      </section>

      {/* What I help with */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-textPrimary sm:text-2xl">
            What I Help With
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-textMuted">
            I work with startups and product teams that need both leadership and
            execution — from planning and architecture to shipping
            production-ready software.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="flex flex-col gap-3 rounded-2xl border border-borderSubtle bg-surface/80 p-5">
            <h3 className="text-sm font-semibold text-textPrimary">
              Engineering Leadership &amp; Project Delivery
            </h3>
            <p className="text-sm text-textMuted">
              Delivery-focused engineering leadership that brings structure,
              clarity, and momentum to your roadmap.
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-textMuted">
              <li>
                Technical project leadership across mobile, backend, and AI.
              </li>
              <li>Roadmap execution with clear milestones and ownership.</li>
              <li>Cross-functional alignment with product and design.</li>
              <li>Delivery process improvement to reduce chaos.</li>
              <li>Turning ambiguity into execution plans.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-borderSubtle bg-surface/80 p-5">
            <h3 className="text-sm font-semibold text-textPrimary">
              React Native &amp; Node.js Consulting
            </h3>
            <p className="text-sm text-textMuted">
              Senior-level hands-on help for mobile and backend systems.
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-textMuted">
              <li>React Native mobile app architecture and feature work.</li>
              <li>Node.js APIs and services ready for production.</li>
              <li>Performance improvement and stability tuning.</li>
              <li>Production hardening before major launches.</li>
              <li>Short-term senior execution support.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-borderSubtle bg-surface/80 p-5">
            <h3 className="text-sm font-semibold text-textPrimary">
              AI Product Consulting
            </h3>
            <p className="text-sm text-textMuted">
              Practical AI product work that connects LLMs to real user value.
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-textMuted">
              <li>LLM integrations, including Gemini, in mobile and web.</li>
              <li>AI workflow design for real user problems.</li>
              <li>Prompt-driven product experiences that feel natural.</li>
              <li>Admin systems for knowledge-based products.</li>
              <li>AI feature strategy and implementation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Problems I solve */}
      <section className="space-y-5">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-textPrimary sm:text-2xl">
            Problems I Help Solve
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-textMuted">
            If any of these sound familiar, I can probably help.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-textMuted md:grid-cols-2">
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Your team is building, but delivery feels messy and unpredictable.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            You need senior mobile/backend guidance without hiring a full-time
            executive.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            You have an app in progress and need help getting it shipped to
            production.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            You want AI features, but need someone who can translate ideas into
            architecture and workflows.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            You need someone who can lead planning and still contribute
            hands-on.
          </div>
          <div className="rounded-xl border border-borderSubtle bg-surface/80 p-4">
            Your product needs stronger technical structure and execution
            discipline.
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-textPrimary sm:text-2xl">
              Selected Work
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-textMuted">
              A few examples of products and platforms I’ve helped build and
              ship.
            </p>
          </div>
          <Link
            to="/work"
            className="text-sm font-medium text-accent hover:text-accentSoft"
          >
            See all work
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <article className="flex flex-col justify-between rounded-2xl border border-borderSubtle bg-surface/80 p-5">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-textPrimary">
                AskRed — AI-Powered Q&amp;A Platform
              </h3>
              <p className="text-sm text-textMuted">
                Built a production AI Q&amp;A platform with an admin system,
                Gemini integration, and a React/Node.js/Postgres architecture.
              </p>
            </div>
            <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-accentMuted">
              React · TypeScript · Node.js · PostgreSQL · Gemini
            </p>
          </article>

          <article className="flex flex-col justify-between rounded-2xl border border-borderSubtle bg-surface/80 p-5">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-textPrimary">
                GH Tracker — Mobile Health Tracking App
              </h3>
              <p className="text-sm text-textMuted">
                Rebuilt and modernized a live iOS and Android health-tracking
                app for growth hormone treatment.
              </p>
            </div>
            <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-accentMuted">
              React Native · iOS · Android · HealthTech
            </p>
          </article>

          <article className="flex flex-col justify-between rounded-2xl border border-borderSubtle bg-surface/80 p-5">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-textPrimary">
                Verbali — AI Communication Platform
              </h3>
              <p className="text-sm text-textMuted">
                Built an AI-first communication product focused on contextual,
                mobile-first assistance.
              </p>
            </div>
            <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-accentMuted">
              React Native · AI Product · Mobile UX
            </p>
          </article>
        </div>
      </section>

      {/* Leadership & consulting strip */}
      <section className="grid gap-6 rounded-2xl border border-borderSubtle bg-surface/80 p-5 sm:p-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-textPrimary sm:text-xl">
            Leadership That Still Builds
          </h2>
          <p className="text-sm text-textMuted">
            I combine Engineering Manager / Senior Engineering Manager
            experience with hands-on React Native and Node.js work. That means
            you get someone who can talk architecture with senior engineers,
            collaborate with product, and still help unblock code-level issues
            when it matters.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/leadership"
            className="rounded-full border border-borderSubtle px-4 py-2 text-sm font-medium text-textPrimary hover:border-accent hover:text-accent transition"
          >
            Explore Leadership Experience
          </Link>
          <Link
            to="/consulting"
            className="rounded-full border border-borderSubtle/70 bg-background px-4 py-2 text-sm font-medium text-textPrimary hover:border-accent hover:text-accent transition"
          >
            Consulting Offers
          </Link>
        </div>
      </section>

      {/* Contact banner */}
      <section className="rounded-2xl border border-accent/40 bg-gradient-to-r from-accent/20 via-surface to-surface/80 p-6 sm:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-textPrimary sm:text-xl">
              Need help with delivery, mobile, or AI?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-accentMuted">
              Whether you’re shipping a new product, stabilizing an existing
              app, or exploring AI-powered features, I can help you bring more
              structure — and momentum — to your engineering work.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-soft-card hover:bg-accentSoft transition"
          >
            Let’s Talk
          </Link>
        </div>
      </section>
    </div>
  );
}
