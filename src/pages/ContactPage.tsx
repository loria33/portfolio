export function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <section className="space-y-6 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-textPrimary sm:text-4xl">
            Let’s Talk
          </h1>
          <p className="mx-auto max-w-xl text-base text-textMuted">
            If you’re looking for engineering leadership, technical project
            management, Web, React Native and Node.js support, or AI product
            consulting, I’d be happy to learn more about what you’re building.
          </p>
        </section>

        <section className="rounded-2xl border border-borderSubtle bg-surface/80 p-8 text-center shadow-soft-card">
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-textPrimary">
              Get in Touch
            </h2>
            <p className="text-sm text-textMuted mb-8">
              Send me an email directly and include a brief note on what you’re working on.
            </p>
            <a
              href="mailto:redcalf2007@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white shadow-soft-card hover:bg-accentSoft transition"
            >
              redcalf2007@gmail.com
            </a>
          </div>
        </section>

        <section className="text-center space-y-2">
            <p className="text-xs uppercase tracking-[0.18em] text-accentMuted">
              LinkedIn
            </p>
            <a
              href="https://www.linkedin.com/in/loriazerrad/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-accent hover:text-accentSoft"
            >
              linkedin.com/in/loriazerrad/
            </a>
        </section>
      </div>
    </div>
  )
}

