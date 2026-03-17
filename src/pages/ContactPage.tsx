import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function ContactPage() {
  const [status, setStatus] = useState<FormState>('idle')

  const handleSubmit = () => {
    setStatus('submitting')
    // Let the browser submit to Formspree; we only optimistically set state.
    setTimeout(() => {
      setStatus('idle')
    }, 1000)
    // No preventDefault: the form posts normally.
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight text-textPrimary sm:text-3xl">
          Let’s Talk
        </h1>
        <p className="max-w-xl text-sm text-textMuted">
          If you’re looking for engineering leadership, technical project
          management, React Native / Node.js support, or AI product consulting,
          I’d be happy to learn more about what you’re building.
        </p>

        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="mt-4 space-y-4 rounded-2xl border border-borderSubtle bg-surface/80 p-5 sm:p-6"
          onSubmit={handleSubmit}
        >
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-xs font-medium text-textPrimary">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              type="text"
              className="w-full rounded-lg border border-borderSubtle bg-background px-3 py-2 text-sm text-textPrimary outline-none ring-0 focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="company"
              className="text-xs font-medium text-textPrimary"
            >
              Company (optional)
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full rounded-lg border border-borderSubtle bg-background px-3 py-2 text-sm text-textPrimary outline-none ring-0 focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="need"
              className="text-xs font-medium text-textPrimary"
            >
              What do you need help with?
            </label>
            <input
              id="need"
              name="need"
              required
              type="text"
              className="w-full rounded-lg border border-borderSubtle bg-background px-3 py-2 text-sm text-textPrimary outline-none ring-0 focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="engagementType"
              className="text-xs font-medium text-textPrimary"
            >
              Engagement type
            </label>
            <select
              id="engagementType"
              name="engagementType"
              required
              className="w-full rounded-lg border border-borderSubtle bg-background px-3 py-2 text-sm text-textPrimary outline-none ring-0 focus:border-accent focus:ring-1 focus:ring-accent"
              defaultValue=""
            >
              <option value="" disabled>
                Select an option
              </option>
              <option>Engineering leadership consulting</option>
              <option>Project delivery / project management</option>
              <option>React Native consulting</option>
              <option>Node.js consulting</option>
              <option>AI product consulting</option>
              <option>Advisory / strategy</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="text-xs font-medium text-textPrimary"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-borderSubtle bg-background px-3 py-2 text-sm text-textPrimary outline-none ring-0 focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-soft-card hover:bg-accentSoft transition disabled:cursor-not-allowed disabled:opacity-70"
            disabled={status === 'submitting'}
          >
            {status === 'submitting'
              ? 'Sending...'
              : 'Let’s build something that ships.'}
          </button>
        </form>
      </section>

      <aside className="space-y-5 rounded-2xl border border-borderSubtle bg-surface/80 p-5 sm:p-6">
        <div className="space-y-2">
          <h2 className="text-sm font-semibold text-textPrimary">
            Prefer email or LinkedIn?
          </h2>
          <p className="text-sm text-textMuted">
            Reach out directly and include a brief note on what you’re working
            on.
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accentMuted">
              Email
            </p>
            <a
              href="mailto:redcalf2007@gmail.com"
              className="text-sm text-accent hover:text-accentSoft"
            >
              redcalf2007@gmail.com
            </a>
          </div>
          <div>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-accentMuted">
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
          </div>
        </div>
      </aside>
    </div>
  )
}

