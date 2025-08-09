"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import { Plane, Globe, ShuffleIcon as Swap, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const JAL_RED = "#d7000f"

type Variant = "domestic" | "international"

export function FlightSearchPanel({ variant = "domestic" }: { variant?: Variant }) {
  const [from, setFrom] = useState(variant === "domestic" ? "OSA" : "")
  const [to, setTo] = useState(variant === "domestic" ? "HND" : "")
  const [open, setOpen] = useState(false)

  const swap = () => {
    setFrom(to)
    setTo(from)
  }

  const isInternational = variant === "international"
  const TitleIcon = isInternational ? Globe : Plane
  const titleText = isInternational ? "International" : "Domestic"

  const fromOptions = isInternational
    ? [
        { code: "NRT", name: "Tokyo (Narita) (NRT)" },
        { code: "HND", name: "Tokyo (Haneda) (HND)" },
        { code: "JFK", name: "New York (JFK)" },
        { code: "LHR", name: "London (Heathrow) (LHR)" },
        { code: "CDG", name: "Paris (CDG)" },
      ]
    : [
        { code: "OSA", name: "Osaka (OSA)" },
        { code: "CTS", name: "Sapporo (CTS)" },
        { code: "FUK", name: "Fukuoka (FUK)" },
        { code: "NRT", name: "Tokyo (Narita) (NRT)" },
      ]

  const toOptions = isInternational
    ? [
        { code: "CDG", name: "Paris (CDG)" },
        { code: "LAX", name: "Los Angeles (LAX)" },
        { code: "SIN", name: "Singapore (SIN)" },
        { code: "SYD", name: "Sydney (SYD)" },
        { code: "LHR", name: "London (Heathrow) (LHR)" },
      ]
    : [
        { code: "HND", name: "Tokyo (Haneda) (HND)" },
        { code: "ITM", name: "Osaka (Itami) (ITM)" },
        { code: "KIX", name: "Osaka (Kansai) (KIX)" },
        { code: "OKA", name: "Okinawa (OKA)" },
      ]

  return (
    <Card className="rounded-2xl shadow-xl border-neutral-200">
      <div className="px-4 sm:px-6 pt-5 sm:pt-7">
        <div className="flex items-center justify-center mb-2">
          <span className="inline-flex items-center gap-2 font-semibold" style={{ color: JAL_RED }}>
            <TitleIcon className="h-4 w-4" />
            {titleText}
          </span>
        </div>
        <Tabs defaultValue="flights" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-transparent relative">
            <TabsTrigger
              value="flights"
              className="data-[state=active]:shadow-none relative data-[state=active]:text-neutral-900"
            >
              Flights
              <span
                className="pointer-events-none absolute -bottom-[10px] left-6 right-6 h-[3px] rounded-full data-[state=inactive]:hidden"
                style={{ backgroundColor: JAL_RED }}
              />
            </TabsTrigger>
            <TabsTrigger
              value="award"
              className="data-[state=active]:shadow-none relative data-[state=active]:text-neutral-900"
            >
              Award Tickets
              <span
                className="pointer-events-none absolute -bottom-[10px] left-6 right-6 h-[3px] rounded-full data-[state=inactive]:hidden"
                style={{ backgroundColor: JAL_RED }}
              />
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flights" className="mt-8">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="flex-1">
                <LabeledSelect
                  label="From"
                  value={from}
                  onValueChange={setFrom}
                  placeholder={isInternational ? "Select an airport/city" : undefined}
                  options={fromOptions}
                />
              </div>

              <Button
                type="button"
                onClick={swap}
                className="shrink-0 rounded-full h-10 w-10 bg-white border hover:bg-neutral-50"
                style={{ color: JAL_RED, borderColor: "#f2c5c7" }}
                variant="secondary"
                aria-label="Swap origin and destination"
              >
                <Swap className="h-4 w-4" />
              </Button>

              <div className="flex-1">
                <LabeledSelect
                  label="To"
                  value={to}
                  onValueChange={setTo}
                  placeholder={isInternational ? "Select an airport/city" : undefined}
                  options={toOptions}
                />
              </div>

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    className="shrink-0 rounded-full h-10 w-10 text-white"
                    style={{ backgroundColor: JAL_RED }}
                    aria-label="Open detailed search"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[620px]">
                  <DialogHeader>
                    <DialogTitle>Detailed Search</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-2">
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <label className="text-sm font-medium">Departure date</label>
                        <Input type="date" defaultValue="" />
                      </div>
                      <div className="grid gap-2">
                        <label className="text-sm font-medium">Return date</label>
                        <Input type="date" defaultValue="" />
                      </div>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-3">
                      <div className="grid gap-2">
                        <label className="text-sm font-medium">Adults</label>
                        <Input type="number" min={1} defaultValue={1} />
                      </div>
                      <div className="grid gap-2">
                        <label className="text-sm font-medium">Children</label>
                        <Input type="number" min={0} defaultValue={0} />
                      </div>
                      <div className="grid gap-2">
                        <label className="text-sm font-medium">Infants</label>
                        <Input type="number" min={0} defaultValue={0} />
                      </div>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <label className="text-sm font-medium">Seat class</label>
                        <Select defaultValue="economy">
                          <SelectTrigger>
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="economy">Economy</SelectItem>
                            <SelectItem value="premium">Premium Economy</SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                            <SelectItem value="first">First</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <label className="text-sm font-medium">Passenger name (optional)</label>
                        <Input placeholder="e.g., Taro Yamada" />
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      style={{ backgroundColor: JAL_RED }}
                      className="text-white hover:opacity-90"
                      onClick={() => setOpen(false)}
                    >
                      Search
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <div className="h-6" />
          </TabsContent>

          <TabsContent value="award" className="mt-8">
            <div className="p-6 border rounded-xl bg-muted/30">
              <p className="text-sm text-muted-foreground">
                Search for award tickets using your miles. This is a layout-only demo.
              </p>
            </div>
            <div className="h-6" />
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  )
}

function LabeledSelect({
  label = "From",
  value = "",
  onValueChange = () => {},
  options = [{ code: "OSA", name: "Osaka (OSA)" }],
  placeholder,
}: {
  label?: string
  value?: string
  onValueChange?: (v: string) => void
  options?: { code: string; name: string }[]
  placeholder?: string
}) {
  const val = value || undefined
  return (
    <div className="grid gap-2">
      <label className="sr-only">{label}</label>
      <div className={cn("flex items-center gap-3 rounded-xl border bg-white shadow-sm px-3 py-2")}>
        <span style={{ color: JAL_RED }} aria-hidden="true">
          <Plane className="h-4 w-4" />
        </span>
        <Select value={val} onValueChange={onValueChange}>
          <SelectTrigger className="h-11 border-0 shadow-none px-0 focus:ring-0">
            <SelectValue placeholder={placeholder ?? `${label} airport`} />
          </SelectTrigger>
          <SelectContent>
            {options.map((opt) => (
              <SelectItem key={opt.code} value={opt.code}>
                {opt.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="ml-auto text-xs text-muted-foreground">All airports</div>
      </div>
    </div>
  )
}
