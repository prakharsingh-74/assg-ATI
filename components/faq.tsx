import { CircleHelp, ChevronRight } from 'lucide-react'

const faqs = [
  "Where can I find the regulations for carry-on items?",
  "Can I on board without Online check-in?",
  "I made a mistake with the passenger’s name. What should I do?",
]

export function FAQ() {
  return (
    <section className="bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">FAQ</h2>
        <div className="max-w-4xl mx-auto border-t border-neutral-200">
          {faqs.map((q, i) => (
            <a
              key={i}
              href="#"
              className="group flex items-center gap-4 justify-between border-b border-neutral-200 py-5"
              aria-label={q}
            >
              <div className="flex items-center gap-4">
                <CircleHelp className="h-5 w-5 text-blue-600 opacity-80" />
                <span className="text-neutral-800">{q}</span>
              </div>
              <ChevronRight className="h-5 w-5 text-red-600 opacity-70 group-hover:opacity-100" />
            </a>
          ))}
        </div>
        <div className="max-w-4xl mx-auto mt-5">
          <a href="#" className="text-red-600 inline-flex items-center gap-2">
            <span>Other questions about international flights</span>
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
