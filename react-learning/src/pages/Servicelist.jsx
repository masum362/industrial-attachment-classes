import { Link } from 'react-router'
import { services } from '../data/services'

// Index route: shown at /services
export default function ServiceList() {
  return (
    <div>
      <p className="max-w-xl text-lg leading-relaxed text-slate-600">
        Choose a service to see what is included and how we work.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {services.map(({ slug, title, summary }) => (
          <li key={slug}>
            <Link
              to={slug}
              className="block h-full rounded-xl border border-slate-200 p-5 transition-colors hover:border-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
              <p className="mt-2 text-slate-600">{summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}