import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="grid gap-10 lg:grid-cols-[1.35fr_minmax(0,1fr)] lg:items-center">
        <div className="space-y-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentMuted">
            Engineering Leadership • Web • React Native • Node.js • AI Product Delivery
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-textPrimary sm:text-4xl lg:text-5xl">
            AI Engineering Leader Building Real Products
          </h1>
          <p className="max-w-xl text-sm text-textMuted sm:text-base">
            Engineering manager and hands-on developer building AI-powered mobile apps, LLM integrations, and experimental AI sandboxes.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/work"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-soft-card shadow-accent/40 hover:bg-accentSoft transition"
            >
              See My Work
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-borderSubtle px-5 py-2.5 text-sm font-medium text-textPrimary hover:border-accent hover:text-accent transition"
            >
              Work With Me
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-borderSubtle bg-surface/60 p-5 text-sm text-textMuted shadow-soft-card">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accentMuted">
            POSITIONING
          </p>
          <p className="mb-3">
            An Engineering Manager / Senior EM who can bring structure to
            delivery, consult on technical project execution, and contribute
            hands-on to Web, React Native and Node.js products — especially
            where AI is part of the roadmap.
          </p>
          <div className="mt-4 flex items-start gap-4">
            <img
              src="/assets/images/lori.jpeg"
              alt="Lori Azerrad"
              className="h-24 w-24 rounded-full border border-borderSubtle object-cover sm:h-28 sm:w-28"
            />
            <div className="space-y-1 text-xs text-textPrimary sm:text-sm">
              {/* <p className="font-semibold tracking-tight">
                LORI — how I work with teams:
              </p>
              <p className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-semibold text-white">
                  L
                </span>
                Leadership
              </p>
              <p className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-semibold text-white">
                  O
                </span>
                Operational Excellence
              </p>
              <p className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-semibold text-white">
                  R
                </span>
                Research &amp; Development
              </p>
              <p className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-semibold text-white">
                  I
                </span>
                Innovation
              </p> */}
            </div>
          </div>
        </div>
      </section>


      {/* Products Built */}
      <section className="space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-textPrimary sm:text-2xl">
              Selected Products
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-textMuted">
              Built and shipped production-ready mobile and web applications.
            </p>
          </div>
          <Link
            to="/work"
            className="text-sm font-medium text-accent hover:text-accentSoft"
          >
            See all work
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Link to="/work" className="flex flex-col justify-between rounded-2xl border border-borderSubtle bg-surface/80 p-5 hover:border-accent/60 hover:bg-surface transition-colors cursor-pointer block text-left">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-textPrimary">
                GH Tracker — Mobile Health Tracking App
              </h3>
              <p className="text-sm text-textMuted">
                Mobile health tracking app for growth hormone treatment.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-background px-2 py-0.5 text-[10px] text-textMuted border border-borderSubtle">React Native</span>
              <span className="rounded-full bg-background px-2 py-0.5 text-[10px] text-textMuted border border-borderSubtle">iOS</span>
              <span className="rounded-full bg-background px-2 py-0.5 text-[10px] text-textMuted border border-borderSubtle">Android</span>
              <span className="rounded-full bg-background px-2 py-0.5 text-[10px] text-textMuted border border-borderSubtle">HealthTech</span>
            </div>
          </Link>

          <Link to="/work" className="flex flex-col justify-between rounded-2xl border border-borderSubtle bg-surface/80 p-5 hover:border-accent/60 hover:bg-surface transition-colors cursor-pointer block text-left">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-textPrimary">
                Verbali
              </h3>
              <p className="text-sm text-textMuted">
                AI communication assistant designed to help non-verbal individuals communicate using contextual AI responses.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-background px-2 py-0.5 text-[10px] text-textMuted border border-borderSubtle">React Native</span>
              <span className="rounded-full bg-background px-2 py-0.5 text-[10px] text-textMuted border border-borderSubtle">Speech AI</span>
              <span className="rounded-full bg-background px-2 py-0.5 text-[10px] text-textMuted border border-borderSubtle">AI assistants</span>
            </div>
          </Link>

          <Link to="/work" className="flex flex-col justify-between rounded-2xl border border-borderSubtle bg-surface/80 p-5 hover:border-accent/60 hover:bg-surface transition-colors cursor-pointer block text-left">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-textPrimary">
                Matly — AI-Powered BJJ Coaching
              </h3>
              <p className="text-sm text-textMuted">
                AI-powered Brazilian Jiu-Jitsu coaching assistant.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* AI Sandbox Experiments */}
      <section className="space-y-5">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-textPrimary sm:text-2xl">
            AI Sandbox Experiments
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-textMuted">
            I build experimental applications to explore the capabilities of new AI models, including on-device LLMs, AI assistants, and real-world product integrations.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <Link to="/work" className="flex flex-col justify-between rounded-2xl border border-borderSubtle bg-surface/80 p-5 hover:border-accent/60 hover:bg-surface transition-colors cursor-pointer block text-left">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-textPrimary">
                AmigoLocal
              </h3>
              <p className="text-sm text-textMuted">
                On-device LLM experimentation platform designed to explore private AI interactions and evaluate mobile inference performance.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-background px-2 py-0.5 text-[10px] text-textMuted border border-borderSubtle">React Native</span>
              <span className="rounded-full bg-background px-2 py-0.5 text-[10px] text-textMuted border border-borderSubtle">On-device LLM</span>
              <span className="rounded-full bg-background px-2 py-0.5 text-[10px] text-textMuted border border-borderSubtle">AI experimentation</span>
            </div>
          </Link>

          <Link to="/work" className="flex flex-col justify-between rounded-2xl border border-borderSubtle bg-surface/80 p-5 hover:border-accent/60 hover:bg-surface transition-colors cursor-pointer block text-left">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-textPrimary">
                AskRed
              </h3>
              <p className="text-sm text-textMuted">
                AI-powered knowledge assistant using RAG pipelines and Gemini LLM to answer questions from structured knowledge bases.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-background px-2 py-0.5 text-[10px] text-textMuted border border-borderSubtle">React</span>
              <span className="rounded-full bg-background px-2 py-0.5 text-[10px] text-textMuted border border-borderSubtle">Node.js</span>
              <span className="rounded-full bg-background px-2 py-0.5 text-[10px] text-textMuted border border-borderSubtle">Postgres</span>
              <span className="rounded-full bg-background px-2 py-0.5 text-[10px] text-textMuted border border-borderSubtle">Gemini</span>
            </div>
          </Link>
        </div>
      </section>


      {/* Engineering Leadership */}
      <section className="grid gap-6 rounded-2xl border border-borderSubtle bg-surface/80 p-5 sm:p-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight text-textPrimary">
            Leadership That Still Builds
          </h2>
          <p className="text-sm text-textMuted">
            I combine Engineering Manager / Senior Engineering Manager experience with hands-on development. I help teams plan, structure, and ship products while still contributing directly to architecture and code.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-textMuted">
            <li className="flex items-center gap-2">
              <span className="text-accent">•</span> Engineering Manager – Standard AI
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent">•</span> Led mobile and product engineering teams
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent">•</span> React Native rewrite for CuriosityStream streaming platform
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent">•</span> Startup founder building production platforms
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/leadership"
            className="rounded-full border border-borderSubtle px-4 py-2 text-sm font-medium text-textPrimary hover:border-accent hover:text-accent transition"
          >
            Explore Leadership Experience
          </Link>
        </div>
      </section>

      {/* Where I Add Value */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-textPrimary sm:text-2xl">
            Where I Add Value
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-textMuted">
            I help teams bridge the gap between product vision and technical reality.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="flex flex-col gap-3 rounded-2xl border border-borderSubtle bg-surface/80 p-5">
            <h3 className="text-sm font-semibold text-textPrimary">
              Engineering Leadership
            </h3>
            <p className="text-sm text-textMuted">
              Delivery-focused leadership that brings structure and clarity to product teams.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-borderSubtle bg-surface/80 p-5">
            <h3 className="text-sm font-semibold text-textPrimary">
              Web, React Native &amp; Node.js
            </h3>
            <p className="text-sm text-textMuted">
              Hands-on support for production web applications, mobile apps, and backend systems.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-borderSubtle bg-surface/80 p-5">
            <h3 className="text-sm font-semibold text-textPrimary">
              AI Product Development
            </h3>
            <p className="text-sm text-textMuted">
              Practical AI integrations that connect LLM capabilities to real user workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Work With Me / Contact */}
      <section className="rounded-2xl border border-accent/40 bg-gradient-to-r from-accent/20 via-surface to-surface/80 p-6 sm:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-textPrimary sm:text-xl">
              Work With Me
            </h2>
            <div className="mt-3 space-y-1 text-sm text-accentMuted">
              <p>Available for:</p>
              <ul className="grid gap-1 sm:grid-cols-2">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent"></span> Engineering leadership consulting
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent"></span> Web &amp; React Native development
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent"></span> AI-powered product features
                </li>
              </ul>
            </div>
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
