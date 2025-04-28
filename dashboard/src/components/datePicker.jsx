import * as React from "react"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const DatePicker = () => {
  
  const [date, setDate] = React.useState()
 
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-10 h-10 rounded-full justify-center bg-bgsecondary border border-border focus:outline-none hover:bg-bgsecondary hover:scale-105 transition-transform duration-200 ease-in-out",
            // !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className=" h-4 w-4" />
          {/* {date ? format(date, "PPP") : <span>Pick a date</span>} */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white rounded-lg shadow-lg border border-border">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker