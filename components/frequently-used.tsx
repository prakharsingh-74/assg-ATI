import { ChevronRight } from 'lucide-react'

type Item = { label: string; href?: string }
type Column = { items: Item[] }

const left: Column = {
  items: [
    { label: "Inflight service" },
    { label: "Lounge service" },
  ],
}
const right: Column = {
  items: [
    { label: "Baggage" },
  ],
}

function Row({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="group flex items-center justify-between border-b border-neutral-200 py-5 md:py-6"
      aria-label={label}
    >
      <span className="text-neutral-800">{label}</span>
      <ChevronRight className="h-5 w-5 text-red-600 opacity-70 group-hover:opacity-100" />
    </a>
  )
}

export function FrequentlyUsed() {
  return (
    <section className="bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-14">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">
          Frequently used services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-t border-neutral-200">
            {left.items.map((it, i) => (
              <Row key={i} label={it.label} />
            ))}
          </div>
          <div className="border-t border-neutral-200">
            {right.items.map((it, i) => (
              <Row key={i} label={it.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
