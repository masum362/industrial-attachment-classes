import { Link } from 'react-router'

const columns = [
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About' },
      { to: '/services', label: 'Services' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { to: '/faq', label: 'FAQ' },
      { to: '/help', label: 'Help center' },
      { to: '/privacy', label: 'Privacy policy' },
      { to: '/terms', label: 'Terms of service' },
    ],
  },
]

const socials = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    path: 'M13.5 21v-7.5h2.5l.5-3h-3V8.6c0-.9.3-1.6 1.6-1.6H16.7V4.3C16.4 4.3 15.5 4.2 14.4 4.2c-2.3 0-3.9 1.4-3.9 4v2.3H8v3h2.5V21h3Z',
  },
  {
    label: 'X',
    href: 'https://x.com',
    path: 'M17.8 3h2.9l-6.3 7.2L21.8 21h-5.8l-4.5-5.9L6.3 21H3.4l6.7-7.7L2.9 3h5.9l4.1 5.4L17.8 3Zm-1 16.3h1.6L7.9 4.6H6.2l10.6 14.7Z',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    path: 'M6.9 8.9H3.6V20h3.3V8.9ZM5.3 3.6a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM20.4 13.4c0-3-1.6-4.7-3.9-4.7-1.4 0-2.3.8-2.7 1.4V8.9h-3.2V20h3.3v-6.1c0-1.6.8-2.5 2-2.5s1.7.9 1.7 2.5V20h3.3l-.5-6.6Z',
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-bold tracking-tight text-slate-900">
              Brand<span className="text-emerald-600">.</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
              Short description of what your company does and who it helps.
            </p>

            <ul className="mt-5 flex items-center gap-2">
              {socials.map(({ label, href, path }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-emerald-600"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d={path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          {columns.map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
              <ul className="mt-4 space-y-2.5">
                {links.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Brand. All rights reserved.</p>
          <p>Made in Dhaka, Bangladesh</p>
        </div>
      </div>
    </footer>
  )
}