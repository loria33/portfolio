import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'

type LayoutProps = {
  children: ReactNode
}

const navLinkBase =
  'text-sm font-medium transition-colors hover:text-accentSoft text-textMuted'

export function Layout({ children }: LayoutProps) {
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

          <nav className="flex items-center gap-6 text-xs sm:text-sm">
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
            <NavLink
              to="/contact"
              className={navLinkBase}
            >
              Contact
            </NavLink>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className={`${navLinkBase} hidden sm:inline`}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/your-handle"
              target="_blank"
              rel="noreferrer"
              className={`${navLinkBase} hidden sm:inline`}
            >
              GitHub
            </a>
          </nav>
        </div>
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

