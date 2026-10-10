import { NavLink, Outlet, useLoaderData } from 'react-router'

const linkClass = ({ isActive }) =>
  [
    'whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-emerald-50 text-emerald-700'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
  ].join(' ')

// Layout route: renders the sidebar and the matching child page in <Outlet />
export default function Services() {

  const {services} = useLoaderData();
  

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Services
      </h1>

      <div className="mt-8 grid gap-8 md:grid-cols-[220px_1fr] md:gap-12">
        <nav aria-label="Services">
          <ul className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-2 md:flex-col md:overflow-visible md:pb-0">
            <li>
              <NavLink to="/services" end className={linkClass}>
                All services
              </NavLink>
            </li>
            {services.map(({ slug, title }) => (
              <li key={slug}>
                <NavLink to={`/services/${slug}`} className={linkClass}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <section className="min-w-0">
          <Outlet />
        </section>
      </div>
    </div>
  )
}