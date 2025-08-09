import { Card } from "@/components/ui/card"
import { ListChecks, DoorOpen, Clock, ReceiptText } from "lucide-react"

export function QuickActions() {
  const items = [
    { title: "Manage Bookings", icon: ListChecks },
    { title: "Boarding/check-in", icon: DoorOpen },
    { title: "Flight Status", icon: Clock },
    { title: "Receipts/boarding certificates", icon: ReceiptText },
  ]
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-1 justify-items-center">
      {items.map((item, idx) => (
        <Card
          key={idx}
          className="flex flex-col items-center justify-center text-center p-5 md:p-6 rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow max-w-[170px] w-full mx-auto"
        >
          <item.icon className="h-7 w-7 mb-2 text-red-600" aria-hidden="true" />
          <div className="text-xs md:text-sm font-medium text-neutral-800 leading-snug">
            {item.title}
          </div>
        </Card>
      ))}
    </div>
  )
}
