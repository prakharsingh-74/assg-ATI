import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const JAL_RED = "#d7000f"

type Item = { label: string }
const left: Item[] = [
  { label: "Inquiries Regarding Incorrect Translations and Summaries of Email Services" },
  { label: "(JAL Mileage Bank) After July 4, 2024, passwords with only 6 digits are no longer allowed." },
  { label: "Beware of suspicious e-mails and fake websites purporting to be from the JAL Group" },
]
const right: Item[] = [
  { label: "[Security] To Passengers Departing from Airports Within India" },
  { label: "To all customers traveling to the UK" },
  { label: "For passengers on international flights departing from Tokyo International Airport (Haneda)" },
]

function Line({ text }: { text: string }) {
  return (
    <a href="#" className="group flex items-center justify-between border-b border-neutral-200 py-5" aria-label={text}>
      <span className="text-neutral-800">{text}</span>
      <ChevronRight className="h-5 w-5 opacity-70 group-hover:opacity-100" style={{ color: JAL_RED }} />
    </a>
  )
}

export function NoticesAdvisories() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">Notices and Advisories</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-sm text-neutral-500 mb-3">Common</h3>
            <div className="border-t border-neutral-200">
              {left.map((it, i) => (
                <Line key={i} text={it.label} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm text-neutral-500 mb-3">International Flights</h3>
            <div className="border-t border-neutral-200">
              {right.map((it, i) => (
                <Line key={i} text={it.label} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            className="rounded-full px-8 py-6 text-base hover:bg-neutral-50 bg-transparent"
            style={{ borderColor: JAL_RED, color: JAL_RED }}
          >
            See more
          </Button>
        </div>
      </div>
    </section>
  )
}
