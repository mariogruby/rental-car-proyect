/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import { CalendarIcon } from "lucide-react";
import { addDays, format } from "date-fns";
import type { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { CalendarSelectorProps } from "./CalendarSelector.types";
import { cn } from "@/lib/utils";

export function CalendarSelector(props: CalendarSelectorProps) {
  const { setDateSelected, className, carPriceDay } = props;
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

useEffect(() => {
    if (date?.from && date?.to) {
      setDateSelected({
        from: date.from,
        to: date.to,
      });
    }
  }, [date, setDateSelected]);

  const calculateDaysBetween = (from: Date, to: Date): number => {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffInTime = to.getTime() - from.getTime();
    return Math.round(diffInTime / oneDay);
  };

  const daysBetween =
    date?.from && date?.to ? calculateDaysBetween(date.from, date.to) : 0;

  return (
    <div className={cn("grid gap-4", className)}>
      {date?.from && date?.to && (
        <div className="rounded-2xl bg-linear-to-br from-green-500/10 via-green-500/5 to-transparent border border-green-500/20 p-6 shadow-lg shadow-green-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 hover:border-green-500/40">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                Total days
              </p>
              <p className="text-3xl font-bold text-foreground">
                {daysBetween}
              </p>
            </div>
            <div className="h-12 w-px bg-border/50" />
            <div className="space-y-1 text-right">
              <p className="text-sm font-medium text-muted-foreground">
                Total Price
              </p>
              <p className="text-3xl font-bold text-green-500">
                €{daysBetween * Number(carPriceDay)}
              </p>
              <p className="text-xs text-muted-foreground/80">
                (taxes included)
              </p>
            </div>
          </div>
        </div>
      )}

      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "h-14 justify-start text-left font-medium rounded-xl border-border/50 shadow-md shadow-black/5 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 hover:border-green-500/50 hover:-translate-y-0.5 active:translate-y-0",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-3 h-5 w-5 text-green-500" />
            {date?.from ? (
              date.to ? (
                <span className="flex items-center gap-2">
                  <span className="font-semibold">
                    {format(date.from, "LLL dd, yyyy")}
                  </span>
                  <span className="text-muted-foreground">→</span>
                  <span className="font-semibold">
                    {format(date.to, "LLL dd, yyyy")}
                  </span>
                </span>
              ) : (
                format(date.from, "LLL dd, yyyy")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0 rounded-2xl border-border/50 shadow-2xl shadow-black/10"
          align="start"
        >
          <Calendar
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
