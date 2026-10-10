import { useSearchParams } from "react-router";

// Sample data. Replace with your own array or data fetched from an API.
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "electronics",
    price: 4500,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "electronics",
    price: 8900,
    rating: 4.2,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    category: "electronics",
    price: 3200,
    rating: 4.0,
  },
  {
    id: 4,
    name: "Cotton Panjabi",
    category: "clothing",
    price: 1800,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Denim Jacket",
    category: "clothing",
    price: 3500,
    rating: 4.1,
  },
  {
    id: 6,
    name: "Running Shoes",
    category: "clothing",
    price: 5200,
    rating: 4.7,
  },
  {
    id: 7,
    name: "Bangla Novel Collection",
    category: "books",
    price: 950,
    rating: 4.8,
  },
  {
    id: 8,
    name: "Programming Handbook",
    category: "books",
    price: 1400,
    rating: 4.4,
  },
  { id: 9, name: "Ceramic Mug Set", category: "home", price: 780, rating: 3.9 },
  { id: 10, name: "Desk Lamp", category: "home", price: 1250, rating: 4.3 },
  { id: 11, name: "Study Table", category: "home", price: 7800, rating: 4.5 },
  { id: 12, name: "Backpack", category: "clothing", price: 2100, rating: 4.2 },
];

const categories = [
  { value: "all", label: "All" },
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
  { value: "books", label: "Books" },
  { value: "home", label: "Home" },
];

const sortOptions = [
  { value: "default", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Top rated" },
  { value: "name", label: "Name: A to Z" },
];

const sorters = {
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
  rating: (a, b) => b.rating - a.rating,
  name: (a, b) => a.name.localeCompare(b.name),
};

const formatPrice = (n) => `৳${n.toLocaleString("en-BD")}`;

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  // The URL is the single source of truth for the filters
  const q = searchParams.get("q") ?? "";

  const rawCategory = searchParams.get("category") ?? "all";
  const rawSort = searchParams.get("sort") ?? "default";

  const category = categories.some((c) => c.value === rawCategory)
    ? rawCategory
    : "all";
  const sort = sortOptions.some((s) => s.value === rawSort)
    ? rawSort
    : "default";

  // Update one param and keep the others. Empty or default values are removed from the URL.
  const updateParam = (key, value, defaultValue, { replace = false } = {}) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (!value || value === defaultValue) next.delete(key);
        else next.set(key, value);
        return next;
      },
      { replace },
    );
  };

  const getData = () => {
    const term = q.trim().toLowerCase();
    const list = products.filter(
      (p) =>
        (category === "all" || p.category === category) &&
        (!term || p.name.toLowerCase().includes(term)),
    );
    return sorters[sort] ? [...list].sort(sorters[sort]) : list;
  };

  const results = getData()

  const hasFilters = q !== "" || category !== "all" || sort !== "default";

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Products
      </h1>

      {/* Controls */}
      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative">
            <label htmlFor="search" className="sr-only">
              Search products
            </label>
            <svg
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
            <input
              id="search"
              type="search"
              value={q}
              onChange={(e) =>
                updateParam("q", e.target.value, "", { replace: true })
              }
              placeholder="Search products"
              className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-2 focus:outline-emerald-600 sm:w-72"
            />
          </div>

          <div>
            <label htmlFor="sort" className="sr-only">
              Sort by
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => updateParam("sort", e.target.value, "default")}
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 focus:outline-2 focus:outline-emerald-600 sm:w-auto"
            >
              {sortOptions.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div
          role="group"
          aria-label="Filter by category"
          className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
        >
          {categories.map(({ value, label }) => {
            const active = category === value;
            return (
              <button
                key={value}
                type="button"
                aria-pressed={active}
                onClick={() => updateParam("category", value, "all")}
                className={[
                  "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : "border-slate-300 text-slate-700 hover:bg-slate-50",
                ].join(" ")}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Result summary */}
      <div
        className="mt-6 flex items-center justify-between text-sm text-slate-600"
        aria-live="polite"
      >
        <p>
          {results.length} {results.length === 1 ? "product" : "products"} found
        </p>
        {hasFilters && (
          <button
            type="button"
            onClick={() => setSearchParams({})}
            className="font-medium text-emerald-700 hover:underline"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Results */}
      {results.length > 0 ? (
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => (
            <li
              key={p.id}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <div className="flex h-32 items-center justify-center rounded-lg bg-slate-100 text-sm text-slate-400">
                Image
              </div>
              <h2 className="mt-4 text-lg font-semibold text-slate-900">
                {p.name}
              </h2>
              <p className="mt-1 text-sm capitalize text-slate-500">
                {p.category}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-lg font-bold text-slate-900">
                  {formatPrice(p.price)}
                </span>
                <span className="flex items-center gap-1 text-sm text-slate-600">
                  <svg
                    className="h-4 w-4 text-amber-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3 6.9 7.5.7-5.7 5 1.7 7.4L12 18l-6.5 4 1.7-7.4-5.7-5 7.5-.7L12 2Z" />
                  </svg>
                  {p.rating.toFixed(1)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-10 rounded-xl border border-dashed border-slate-300 px-6 py-14 text-center">
          <h2 className="text-lg font-semibold text-slate-900">
            No products found
          </h2>
          <p className="mt-2 text-slate-600">
            Try a different search word or choose another category.
          </p>
          <button
            type="button"
            onClick={() => setSearchParams({})}
            className="mt-5 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
