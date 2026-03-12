import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'

type LayoutProps = {
  children: ReactNode
}

const navLinkBase =
  'text-sm font-medium transition-colors hover:text-accentSoft text-textMuted'

const CONTACT_EMAIL = 'loria3@gmail.com'
const LINKEDIN_URL = 'https://www.linkedin.com/in/loriazerrad/'
const GITHUB_URL = 'https://github.com/loria33'

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background text-textPrimary">
      <header className="border-b border-borderSubtle/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accentMuted">
              LORI AZERRAD
            </span>
            <span className="hidden text-xs text-textMuted sm:inline">
              Engineering Leadership & Product Delivery
            </span>
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-borderSubtle bg-surface/40 p-2 text-textPrimary transition hover:border-accent/60 hover:bg-surface/70 sm:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>

          <nav className="hidden items-center gap-6 text-xs sm:flex sm:text-sm">
            <NavLink to="/" className={navLinkBase} end>
              Home
            </NavLink>
            <NavLink
              to="/capabilities"
              className={navLinkBase}
            >
              Capabilities
            </NavLink>
            <NavLink
              to="/work"
              className={navLinkBase}
            >
              Work
            </NavLink>
            <NavLink
              to="/leadership"
              className={navLinkBase}
            >
              Leadership
            </NavLink>
            <NavLink
              to="/consulting"
              className={navLinkBase}
            >
              Consulting
            </NavLink>
            <a href={`mailto:${CONTACT_EMAIL}`} className={navLinkBase}>
              Contact
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className={`${navLinkBase} hidden sm:inline`}
            >
              LinkedIn
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className={`${navLinkBase} hidden sm:inline`}
            >
              GitHub
            </a>
          </nav>
        </div>

        {mobileMenuOpen ? (
          <div className="sm:hidden">
            <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
              <div className="rounded-2xl border border-borderSubtle bg-surface/70 p-2 shadow-soft-card">
                <div className="grid gap-1 text-sm">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `rounded-xl px-3 py-2 transition hover:bg-background/40 ${
                        isActive ? 'text-textPrimary' : 'text-textMuted'
                      }`
                    }
                    end
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/capabilities"
                    className={({ isActive }) =>
                      `rounded-xl px-3 py-2 transition hover:bg-background/40 ${
                        isActive ? 'text-textPrimary' : 'text-textMuted'
                      }`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Capabilities
                  </NavLink>
                  <NavLink
                    to="/work"
                    className={({ isActive }) =>
                      `rounded-xl px-3 py-2 transition hover:bg-background/40 ${
                        isActive ? 'text-textPrimary' : 'text-textMuted'
                      }`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Work
                  </NavLink>
                  <NavLink
                    to="/leadership"
                    className={({ isActive }) =>
                      `rounded-xl px-3 py-2 transition hover:bg-background/40 ${
                        isActive ? 'text-textPrimary' : 'text-textMuted'
                      }`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Leadership
                  </NavLink>
                  <NavLink
                    to="/consulting"
                    className={({ isActive }) =>
                      `rounded-xl px-3 py-2 transition hover:bg-background/40 ${
                        isActive ? 'text-textPrimary' : 'text-textMuted'
                      }`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Consulting
                  </NavLink>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="rounded-xl px-3 py-2 text-textMuted transition hover:bg-background/40 hover:text-textPrimary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                </div>

                <div className="my-2 h-px bg-borderSubtle/70" />

                <div className="grid gap-1 text-sm">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl px-3 py-2 text-textMuted transition hover:bg-background/40 hover:text-textPrimary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    LinkedIn
                  </a>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl px-3 py-2 text-textMuted transition hover:bg-background/40 hover:text-textPrimary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
          {children}
        </div>
      </main>

      <footer className="border-t border-borderSubtle/60 bg-background/80">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-5 text-xs text-textMuted sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Lori Azerrad.</p>
          <p className="max-w-xl text-[11px] sm:text-xs">
            Engineering leadership, product delivery consulting, and senior React
            Native / Node.js execution — especially where AI is part of the
            roadmap.
          </p>
        </div>
      </footer>
    </div>
  )
}

