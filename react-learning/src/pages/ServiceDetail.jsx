import { Link, useParams } from 'react-router'
import { services } from '../data/services'

// Child route: shown at /services/:slug
export default function ServiceDetail() {
  const {slug} = useParams()
  console.log(slug)
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Service not found</h2>
        <p className="mt-2 text-slate-600">
          We could not find a service called &ldquo;{slug}&rdquo;.
        </p>
        <Link
          to="/services"
          className="mt-5 inline-block rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          View all services
        </Link>
      </div>
    )
  }

  return (
    <article>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {service.title}
      </h2>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
        {service.description}
      </p>

      <h3 className="mt-10 text-lg font-semibold text-slate-900">What is included</h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-slate-700">
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          to="/contact"
          className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
        >
          Request a quote
        </Link>
        <Link
          to="/services"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Back to all services
        </Link>
      </div>
    </article>
  )
}