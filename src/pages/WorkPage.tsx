import { useState } from 'react'

export function WorkPage() {
  const [showAskRed, setShowAskRed] = useState(false)
  const [showGhTracker, setShowGhTracker] = useState(false)
  const [showVerbali, setShowVerbali] = useState(false)
  const [showMatly, setShowMatly] = useState(false)
  const [showRightHere, setShowRightHere] = useState(false)
  const [showAmigoLocal, setShowAmigoLocal] = useState(false)

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight text-textPrimary sm:text-3xl">
          Work
        </h1>
        <p className="max-w-2xl text-sm text-textMuted">
          Real products, shipped to real users — across mobile, backend, and
          AI-enabled systems.
        </p>
      </section>

      <div className="space-y-8">
        {/* AskRed */}
        <article className="space-y-3 rounded-2xl border border-borderSubtle bg-surface/80 p-5 sm:p-6">
          <header className="flex flex-col gap-3 sm:flex-row sm:items-start">
            <img
              src="/assets/images/askRed/Screenshot 2026-03-11 at 11.12.32.png"
              alt="AskRed screenshot"
              className="h-24 w-40 rounded-lg border border-borderSubtle object-cover"
            />
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-textPrimary">
                AskRed — AI-Powered Q&amp;A Platform
              </h2>
              <p className="text-sm text-textMuted">
                Production AI Q&amp;A platform with an admin system, Gemini
                integration, and a React/Node.js/Postgres stack.
              </p>
              <div className="mt-1 text-sm">
                <a
                  href="https://askred.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:text-accentSoft"
                >
                  Visit website
                </a>
              </div>
            </div>
          </header>
          {showAskRed && (
            <>
              <p className="text-sm text-textMuted">
                Designed to deliver structured answers from curated knowledge,
                with Gemini powering answer generation and an admin dashboard
                for content management.
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                <img
                  src="/assets/images/askRed/Screenshot 2026-03-11 at 11.12.32.png"
                  alt="AskRed marketing site"
                  className="h-24 w-full rounded-lg border border-borderSubtle object-cover"
                />
                <img
                  src="/assets/images/askRed/Screenshot 2026-03-11 at 11.13.11.png"
                  alt="AskRed reporting dashboard"
                  className="h-24 w-full rounded-lg border border-borderSubtle object-cover"
                />
                <img
                  src="/assets/images/askRed/Screenshot 2026-03-11 at 11.14.23.png"
                  alt="AskRed customer chat experience"
                  className="h-24 w-full rounded-lg border border-borderSubtle object-cover"
                />
              </div>
              <ul className="mt-3 grid gap-2 text-sm text-textMuted sm:grid-cols-2">
                <li>React-based frontend for the end-user Q&amp;A experience.</li>
                <li>Node.js and PostgreSQL backend architecture.</li>
                <li>Admin dashboard for maintaining knowledge and content.</li>
                <li>Gemini LLM integration with guardrails and structure.</li>
                <li>CDN-hosted files and assets for performance and scale.</li>
              </ul>
            </>
          )}
          <div className="mt-3 flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accentMuted">
              React · TypeScript · Node.js · PostgreSQL · Gemini · Admin Dashboard
            </p>
            <button
              type="button"
              className="text-xs font-medium text-accent hover:text-accentSoft"
              onClick={() => setShowAskRed((open) => !open)}
            >
              {showAskRed ? 'Less' : 'More'}
            </button>
          </div>
        </article>

        {/* GH Tracker */}
        <article className="space-y-3 rounded-2xl border border-borderSubtle bg-surface/80 p-5 sm:p-6">
          <header className="flex flex-col gap-3 sm:flex-row sm:items-start">
            <img
              src="/assets/images/ghtracker/0x0ss.png"
              alt="GH Tracker mobile app"
              className="h-24 w-40 rounded-lg border border-borderSubtle object-cover"
            />
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-textPrimary">
                GH Tracker — Mobile Health Tracking App
              </h2>
              <p className="text-sm text-textMuted">
                Modernized iOS and Android app for growth hormone treatment
                tracking.
              </p>
              <div className="mt-1 flex flex-wrap gap-4 text-sm">
                <a
                  href="https://ghtracker.netlify.app/"
                  className="text-accent hover:text-accentSoft"
                  target="_blank"
                  rel="noreferrer"
                >
                  Product website
                </a>
                <a
                  href="https://apps.apple.com/us/app/gh-tracker/id1171234313"
                  className="text-accent hover:text-accentSoft"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apple App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.kalf.ghinjections"
                  className="text-accent hover:text-accentSoft"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Play
                </a>
              </div>
            </div>
          </header>
          {showGhTracker && (
            <>
              <p className="text-sm text-textMuted">
                Families use GH Tracker to log injections, doses, growth metrics,
                reminders, and progress trends across platforms.
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-4">
                <img
                  src="/assets/images/ghtracker/0x0ss.png"
                  alt="GH Tracker home screen"
                  className="h-24 w-full rounded-lg border border-borderSubtle object-cover"
                />
                <img
                  src="/assets/images/ghtracker/0x0ss (1).png"
                  alt="GH Tracker growth chart"
                  className="h-24 w-full rounded-lg border border-borderSubtle object-cover"
                />
                <img
                  src="/assets/images/ghtracker/0x0ss (2).png"
                  alt="GH Tracker calculations screen"
                  className="h-24 w-full rounded-lg border border-borderSubtle object-cover"
                />
                <img
                  src="/assets/images/ghtracker/0x0ss (3).png"
                  alt="GH Tracker change order screen"
                  className="h-24 w-full rounded-lg border border-borderSubtle object-cover"
                />
              </div>
              <ul className="mt-3 grid gap-2 text-sm text-textMuted sm:grid-cols-2">
                <li>React Native app for iOS and Android.</li>
                <li>Injection and dose tracking, height and weight logging.</li>
                <li>Reminders and notifications to keep treatment on schedule.</li>
                <li>Progress trends and history for families and clinicians.</li>
                <li>
                  Rewritten experience with performance and reliability
                  improvements.
                </li>
              </ul>
            </>
          )}
          <div className="mt-3 flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accentMuted">
              React Native · Mobile Product · iOS · Android · HealthTech
            </p>
            <button
              type="button"
              className="text-xs font-medium text-accent hover:text-accentSoft"
              onClick={() => setShowGhTracker((open) => !open)}
            >
              {showGhTracker ? 'Less' : 'More'}
            </button>
          </div>
        </article>

        {/* Verbali / MaTalk AI */}
        <article className="space-y-3 rounded-2xl border border-borderSubtle bg-surface/80 p-5 sm:p-6">
          <header className="flex flex-col gap-3 sm:flex-row sm:items-start">
            <img
              src="/assets/images/verbali/0x0ss.png"
              alt="Verbali mobile experience"
              className="h-24 w-40 rounded-lg border border-borderSubtle object-cover"
            />
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-textPrimary">
                Verbali — AI Communication Platform
              </h2>
              <p className="text-sm text-textMuted">
                AI-first communication product built around contextual, mobile-first
                assistance.
              </p>
              <div className="mt-1 flex flex-wrap gap-4 text-sm">
                <a
                  href="https://apps.apple.com/us/app/matalk-ai/id6747360381"
                  className="text-accent hover:text-accentSoft"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apple App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.verbali.matalkai&utm_source=na_Med"
                  className="text-accent hover:text-accentSoft"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Play
                </a>
              </div>
            </div>
          </header>
          {showVerbali && (
            <>
              <p className="text-sm text-textMuted">
                Helps users draft and refine messages with context-aware AI,
                combining mobile UX, workflows, and tailored prompts.
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-4">
                <img
                  src="/assets/images/verbali/0x0ss.png"
                  alt="Verbali smart answers screen"
                  className="h-24 w-full rounded-lg border border-borderSubtle object-cover"
                />
                <img
                  src="/assets/images/verbali/0x0ss (1).png"
                  alt="Verbali customizable board"
                  className="h-24 w-full rounded-lg border border-borderSubtle object-cover"
                />
                <img
                  src="/assets/images/verbali/0x0ss (2).png"
                  alt="Verbali emotion board"
                  className="h-24 w-full rounded-lg border border-borderSubtle object-cover"
                />
                <img
                  src="/assets/images/verbali/0x0ss (4).png"
                  alt="Verbali main communication board"
                  className="h-24 w-full rounded-lg border border-borderSubtle object-cover"
                />
              </div>
              <ul className="mt-3 grid gap-2 text-sm text-textMuted sm:grid-cols-2">
                <li>Mobile-first UX centered on real-world communication flows.</li>
                <li>
                  Context-aware AI assistance for drafting and refining messages.
                </li>
                <li>End-to-end product ownership from UX to architecture.</li>
                <li>AI workflow design tuned to user intent and tone.</li>
              </ul>
            </>
          )}
          <div className="mt-3 flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accentMuted">
              React Native · AI Product · Mobile UX · Context-Aware Systems
            </p>
            <button
              type="button"
              className="text-xs font-medium text-accent hover:text-accentSoft"
              onClick={() => setShowVerbali((open) => !open)}
            >
              {showVerbali ? 'Less' : 'More'}
            </button>
          </div>
        </article>

        {/* Matly */}
        <article className="space-y-3 rounded-2xl border border-borderSubtle bg-surface/80 p-5 sm:p-6">
          <header className="flex flex-col gap-3 sm:flex-row sm:items-start">
            <img
              src="/assets/images/matly/matly1.jpeg"
              alt="Matly AI coach"
              className="h-24 w-40 rounded-lg border border-borderSubtle object-cover"
            />
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-textPrimary">
                Matly — AI-Powered Brazilian Jiu-Jitsu Coach
              </h2>
              <p className="text-sm text-textMuted">
                Consulting on AI-driven training and coaching workflows.
              </p>
            </div>
          </header>
          {showMatly && (
            <>
              <p className="text-sm text-textMuted">
                Led backend and LLM integration in Node.js and built the overall
                coaching application — from training interactions to how AI
                supports users before, during, and after practice.
              </p>
              <ul className="mt-3 grid gap-2 text-sm text-textMuted sm:grid-cols-2">
                <li>
                  Node.js backend with LLM integration powering coaching flows.
                </li>
                <li>AI-driven training workflows for BJJ practitioners.</li>
                <li>End-to-end app implementation and product structure.</li>
              </ul>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <img
                  src="/assets/images/matly/matly1.jpeg"
                  alt="Matly AI coaching interface"
                  className="h-24 w-full rounded-lg border border-borderSubtle object-cover"
                />
                <img
                  src="/assets/images/matly/matly2.jpeg"
                  alt="Matly training metrics"
                  className="h-24 w-full rounded-lg border border-borderSubtle object-cover"
                />
              </div>
            </>
          )}
          <div className="mt-3 flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accentMuted">
              React Native · Node.js · LLM Integration · Sports Tech · Product Strategy
            </p>
            <button
              type="button"
              className="text-xs font-medium text-accent hover:text-accentSoft"
              onClick={() => setShowMatly((open) => !open)}
            >
              {showMatly ? 'Less' : 'More'}
            </button>
          </div>
        </article>

        {/* RightHear (consulting) */}
        <article className="space-y-3 rounded-2xl border border-borderSubtle bg-surface/80 p-5 sm:p-6">
          <header className="flex flex-col gap-3 sm:flex-row sm:items-start">
            <img
              src="/assets/images/rightHear/RightHear_logo.png"
              alt="RightHear logo"
              className="h-16 w-40 rounded-lg border border-borderSubtle object-contain bg-white"
            />
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-textPrimary">
                RightHear — Accessibility &amp; AI Consulting
              </h2>
              <p className="text-sm text-textMuted">
                Consultant on team management, motivation, project management,
                product engineering, and AI LLM integration.
              </p>
              <div className="mt-1 text-sm">
                <a
                  href="https://www.right-hear.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:text-accentSoft"
                >
                  Visit RightHear
                </a>
              </div>
            </div>
          </header>
          {showRightHere && (
            <>
              <p className="text-sm text-textMuted">
                Worked with the RightHear team as a consultant on team
                management, motivation, and delivery across engineering and
                product.
              </p>
              <ul className="mt-3 grid gap-2 text-sm text-textMuted sm:grid-cols-2">
                <li>Team management and motivation support.</li>
                <li>Project management and product engineering workflows.</li>
                <li>AI and LLM integration strategy for the product.</li>
              </ul>
            </>
          )}
          <div className="mt-3 flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accentMuted">
              Consulting · Team Management · Product Engineering · AI &amp; LLMs
            </p>
            <button
              type="button"
              className="text-xs font-medium text-accent hover:text-accentSoft"
              onClick={() => setShowRightHere((open) => !open)}
            >
              {showRightHere ? 'Less' : 'More'}
            </button>
          </div>
        </article>

        {/* AmigoLocal */}
        <article className="space-y-3 rounded-2xl border border-borderSubtle bg-surface/80 p-5 sm:p-6">
          <header className="flex flex-col gap-3 sm:flex-row sm:items-start">
            <img
              src="/assets/images/amigolocal/0x0ss.png"
              alt="AmigoLocal on-device LLM sandbox mockup"
              className="h-24 w-40 rounded-lg border border-borderSubtle object-cover"
            />
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-textPrimary">
                AmigoLocal — On-Device LLM Sandbox
              </h2>
              <p className="text-sm text-textMuted">
                Experimental application for running large language models directly on-device.
              </p>
              <div className="mt-1 text-sm">
                <a
                  href="https://apps.apple.com/us/app/amigolocal/id6748647430"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:text-accentSoft"
                >
                  Apple App Store
                </a>
              </div>
            </div>
          </header>
          {showAmigoLocal && (
            <>
              <p className="text-sm text-textMuted">
                Evaluates the feasibility of private, low-latency AI interactions without cloud inference. 
                Serves as a sandbox for testing model architectures, prompt strategies, and mobile interaction patterns.
              </p>
              <ul className="mt-3 grid gap-2 text-sm text-textMuted sm:grid-cols-2">
                <li>On-device LLM inference for privacy and offline access.</li>
                <li>Latency comparisons between local and cloud AI models.</li>
                <li>Prompt design optimized for constrained mobile models.</li>
                <li>Mobile interaction patterns for AI assistants.</li>
                <li>Privacy-preserving AI architectures.</li>
              </ul>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                <img
                  src="/assets/images/amigolocal/0x0ss.png"
                  alt="AmigoLocal interface"
                  className="h-24 w-full rounded-lg border border-borderSubtle object-cover"
                />
                <img
                  src="/assets/images/amigolocal/0x0ss (1).png"
                  alt="AmigoLocal model settings"
                  className="h-24 w-full rounded-lg border border-borderSubtle object-cover"
                />
                <img
                  src="/assets/images/amigolocal/0x0ss (2).png"
                  alt="AmigoLocal performance tracking"
                  className="h-24 w-full rounded-lg border border-borderSubtle object-cover"
                />
              </div>
            </>
          )}
          <div className="mt-3 flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accentMuted">
              React Native · Mobile Inference · LLMs · Privacy · AI Architecture
            </p>
            <button
              type="button"
              className="text-xs font-medium text-accent hover:text-accentSoft"
              onClick={() => setShowAmigoLocal((open) => !open)}
            >
              {showAmigoLocal ? 'Less' : 'More'}
            </button>
          </div>
        </article>
      </div>

    </div>
  )
}

