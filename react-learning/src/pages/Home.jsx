import { Link } from 'react-router'

const features = [
  {
    title: 'Fast to set up',
    text: 'Create an account and start working in minutes. No long forms and no training needed.',
    icon: 'M13 3L4 14h7l-1 7 9-11h-7l1-7Z',
  },
  {
    title: 'Works on any device',
    text: 'The same experience on your phone, tablet and laptop, so your team can work from anywhere.',
    icon: 'M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm5 15h.01',
  },
  {
    title: 'Secure by default',
    text: 'Your data stays encrypted and only the people you choose can see it.',
    icon: 'M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Zm-2.5 9l2 2 3.5-4',
  },
]

const rows = [
  { label: 'Website redesign', status: 'In progress', width: 'w-2/3' },
  { label: 'Customer survey', status: 'Done', width: 'w-full' },
  { label: 'Mobile app launch', status: 'Starting', width: 'w-1/4' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Manage your work in one simple place
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-600">
            Plan projects, track progress and keep your team in sync without
            switching between tools.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/signup"
              className="rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Get started
            </Link>
            <Link
              to="/about"
              className="rounded-lg border border-slate-300 px-6 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Product preview */}
        <div
          className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6"
          aria-hidden="true"
        >
          <div className="mb-4 flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>
          <ul className="space-y-3">
            {rows.map(({ label, status, width }) => (
              <li key={label} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-900">{label}</span>
                  <span className="text-slate-500">{status}</span>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-slate-100">
                  <div className={`h-1.5 rounded-full bg-emerald-600 ${width}`} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-slate-900">
            Everything your team needs to get things done
          </h2>

          <ul className="mt-12 grid gap-10 md:grid-cols-3">
            {features.map(({ title, text, icon }) => (
              <li key={title} className="border-t-2 border-emerald-600 pt-5">
                <svg
                  className="h-7 w-7 text-emerald-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d={icon} />
                </svg>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to action */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-emerald-600 px-6 py-10 sm:px-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to try it with your team?
            </h2>
            <p className="mt-2 text-emerald-50">
              Create a free account today. No credit card needed.
            </p>
          </div>
          <Link
            to="/signup"
            className="shrink-0 rounded-lg bg-white px-6 py-3 text-base font-semibold text-emerald-700 transition-colors hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Create free account
          </Link>
        </div>
      </section>
    </>
  )
}