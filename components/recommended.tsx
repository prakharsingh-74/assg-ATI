import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type RecCard = {
  title: string
  subtitle: string
  image: string
}

// Default cards (Domestic) so the component works even if no props are passed
const defaultDomesticItems: RecCard[] = [
  {
    title: "Find Domestic Flights and Book",
    subtitle: "Domestic Flights",
    image: "/images/find-flights.png",
  },
  {
    title: "Cheapest days to fly",
    subtitle: "Domestic Flights",
    image: "/images/cheapest-days.png",
  },
  {
    title: "Free Wi‑Fi on JAL domestic flights",
    subtitle: "Domestic Flights",
    image: "/images/free-wifi.png",
  },
  {
    title: "Experience the AIRBUS A350",
    subtitle: "Domestic Flights",
    image: "/images/a350.png",
  },
]

export function Recommended({
  items,
}: {
  items?: RecCard[]
}) {
  const list = items && items.length > 0 ? items : defaultDomesticItems

  return (
    <div>
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6 md:mb-8">Recommended for You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 px-4 md:px-8">
        {list.map((c, idx) => (
          <article key={idx} className="group cursor-pointer">
            <Card className="relative rounded-lg overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-square relative">
                <img
                  src={c.image || "/placeholder.svg?height=200&width=200&query=recommended%20card%20image"}
                  alt={c.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-2 left-2">
                  <Badge variant="secondary" className="bg-white text-gray-900 text-xs font-medium px-2 py-1">
                    {c.subtitle}
                  </Badge>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-white text-xs md:text-sm font-medium leading-tight">{c.title}</h3>
                </div>
              </div>
            </Card>
          </article>
        ))}
      </div>
    </div>
  )
}
