const layers = ["app", "pages", "widgets", "features", "entities", "shared"];

export function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 py-16 text-zinc-50">
      <section className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur md:p-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
          FSD CLI · Next.js
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Complete Feature-Sliced structure, ready from day one.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          Start building product features immediately. The architecture, API
          client, providers, state, forms, and reusable UI boundaries are
          already in place.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {layers.map((layer) => (
            <div
              key={layer}
              className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4"
            >
              <span className="font-mono text-sm text-cyan-200">
                src/{layer}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
