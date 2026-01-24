"use client";

import { Button } from "@/components/ui/button";
import { FiltersCarsProps } from "./FIltersCars.types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import {
  Trash2,
  Car,
  Settings2,
  Fuel,
  Users,
  SlidersHorizontal,
} from "lucide-react";

export function FiltersCars(props: FiltersCarsProps) {
  const { clearFilters, setFilters, filters } = props;

  const handleFilter = (filter: string, value: string) => {
    setFilters(filter, value);
  };

  const selectTriggerStyles = `
    w-full md:w-44 rounded-2xl border-2 border-green-100 bg-white
    shadow-md shadow-green-500/5
    transition-all duration-300 ease-out
    hover:border-green-300 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-0.5
    focus:border-green-400 focus:ring-2 focus:ring-green-500/20
    data-[state=open]:border-green-400 data-[state=open]:shadow-lg data-[state=open]:shadow-green-500/15
  `;

  const selectContentStyles = `
    rounded-xl border-2 border-green-100 bg-white/95 backdrop-blur-sm
    shadow-xl shadow-green-500/10
    animate-in fade-in-0 zoom-in-95
  `;

  const selectItemStyles = `
    rounded-lg transition-colors duration-200
    focus:bg-green-50 focus:text-green-700
    data-[state=checked]:bg-green-100 data-[state=checked]:text-green-700
  `;

  return (
    <div className="mt-5 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-md shadow-green-500/25">
          <SlidersHorizontal className="w-4 h-4 text-white" />
        </div>
        <span className="text-sm font-medium text-gray-600">
          Filter vehicles
        </span>
      </div>

      <div className="p-4 rounded-2xl bg-gradient-to-br from-white to-green-50/30 border border-green-100 shadow-lg shadow-green-500/5 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:gap-4 md:items-center">
          {/* Type Select */}
          <div className="flex-1 group">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Car className="w-3.5 h-3.5 text-green-500 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xs font-medium text-gray-500">Type</span>
            </div>
            <Select
              onValueChange={(value) => handleFilter("type", value)}
              value={filters.type}
            >
              <SelectTrigger className={selectTriggerStyles}>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent className={selectContentStyles}>
                <SelectGroup>
                  <SelectLabel className="text-green-600 font-semibold">
                    Vehicle Type
                  </SelectLabel>
                  <SelectItem value="Sedan" className={selectItemStyles}>
                    Sedan
                  </SelectItem>
                  <SelectItem value="SUV" className={selectItemStyles}>
                    SUV
                  </SelectItem>
                  <SelectItem value="Coupe" className={selectItemStyles}>
                    Coupe
                  </SelectItem>
                  <SelectItem value="Family" className={selectItemStyles}>
                    Family
                  </SelectItem>
                  <SelectItem value="Deluxe" className={selectItemStyles}>
                    Deluxe
                  </SelectItem>
                  <SelectItem value="Compact" className={selectItemStyles}>
                    Compact
                  </SelectItem>
                  <SelectItem value="Berlina" className={selectItemStyles}>
                    Berlina
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Transmission Select */}
          <div className="flex-1 group">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Settings2 className="w-3.5 h-3.5 text-green-500 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xs font-medium text-gray-500">
                Transmission
              </span>
            </div>
            <Select
              onValueChange={(value) => handleFilter("transmission", value)}
              value={filters.transmission}
            >
              <SelectTrigger className={selectTriggerStyles}>
                <SelectValue placeholder="Select transmission" />
              </SelectTrigger>
              <SelectContent className={selectContentStyles}>
                <SelectGroup>
                  <SelectLabel className="text-green-600 font-semibold">
                    Transmission
                  </SelectLabel>
                  <SelectItem value="Manual" className={selectItemStyles}>
                    Manual
                  </SelectItem>
                  <SelectItem value="Automatic" className={selectItemStyles}>
                    Automatic
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Engine Select */}
          <div className="flex-1 group">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Fuel className="w-3.5 h-3.5 text-green-500 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xs font-medium text-gray-500">Engine</span>
            </div>
            <Select
              onValueChange={(value) => handleFilter("engine", value)}
              value={filters.engine}
            >
              <SelectTrigger className={selectTriggerStyles}>
                <SelectValue placeholder="Select engine" />
              </SelectTrigger>
              <SelectContent className={selectContentStyles}>
                <SelectGroup>
                  <SelectLabel className="text-green-600 font-semibold">
                    Engine Type
                  </SelectLabel>
                  <SelectItem value="Gasoline" className={selectItemStyles}>
                    Gasoline
                  </SelectItem>
                  <SelectItem value="Diesel" className={selectItemStyles}>
                    Diesel
                  </SelectItem>
                  <SelectItem value="Hybrid" className={selectItemStyles}>
                    Hybrid
                  </SelectItem>
                  <SelectItem value="Electric" className={selectItemStyles}>
                    Electric
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* People Select */}
          <div className="flex-1 group">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Users className="w-3.5 h-3.5 text-green-500 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xs font-medium text-gray-500">
                Capacity
              </span>
            </div>
            <Select
              onValueChange={(value) => handleFilter("people", value)}
              value={filters.people}
            >
              <SelectTrigger className={selectTriggerStyles}>
                <SelectValue placeholder="Select capacity" />
              </SelectTrigger>
              <SelectContent className={selectContentStyles}>
                <SelectGroup>
                  <SelectLabel className="text-green-600 font-semibold">
                    Passengers
                  </SelectLabel>
                  <SelectItem value="2" className={selectItemStyles}>
                    2 people
                  </SelectItem>
                  <SelectItem value="4" className={selectItemStyles}>
                    4 people
                  </SelectItem>
                  <SelectItem value="5" className={selectItemStyles}>
                    5 people
                  </SelectItem>
                  <SelectItem value="7" className={selectItemStyles}>
                    7 people
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Clear Button */}
          <div className="flex-shrink-0 pt-5">
            <Button
              onClick={clearFilters}
              className="
                w-full md:w-auto
                bg-gradient-to-r from-green-500 to-green-600 
                hover:from-green-600 hover:to-green-700
                text-white font-medium
                rounded-2xl px-5 py-2.5
                shadow-lg shadow-green-500/25
                transition-all duration-300 ease-out
                hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5
                active:translate-y-0 active:shadow-md
                group
              "
            >
              <Trash2 className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
              Clear filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
