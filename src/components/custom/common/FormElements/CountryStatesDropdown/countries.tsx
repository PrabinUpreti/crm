import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/Button/button";
import { ScrollArea, ScrollBar } from "@/components/ui/ScrollArea/scroll-area";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/Command/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover/popover";

import { cn, lowerCase } from "@/lib/utils";
import countries from "@/data/countries.json";

import { type CountryProps } from "@/@types";
import { useDropdownStore } from "@/hooks/useCountryStateDropdown";
import { CommandList } from "cmdk";

interface CountryDropdownProps {
  disabled?: boolean;
}

const CountryDropdown = ({ disabled }: CountryDropdownProps) => {
  const {
    countryValue,
    setCountryValue,
    openCountryDropdown,
    setOpenCountryDropdown,
  } = useDropdownStore();
  const C = countries as CountryProps[];

  return (
    <Popover open={openCountryDropdown} onOpenChange={setOpenCountryDropdown}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={openCountryDropdown}
          className=" justify-between rounded-[6px] border  bg-background text-foreground "
          disabled={disabled}>
          <span>
            {countryValue ? (
              <div className="flex items-end gap-2">
                <span>
                  {
                    countries.find(
                      (country) => lowerCase(country.name) === countryValue
                    )?.emoji
                  }
                </span>
                <span>
                  {
                    countries.find(
                      (country) => lowerCase(country.name) === countryValue
                    )?.name
                  }
                </span>
              </div>
            ) : (
              <span>Select Country...</span>
            )}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] rounded-[6px] border  p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandEmpty>No country found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              <ScrollArea className="h-[300px] w-full">
                {C.map((country) => (
                  <CommandItem
                    key={country.id}
                    value={country.name}
                    onSelect={(currentValue) => {
                      setCountryValue(
                        currentValue === lowerCase(country.name)
                          ? currentValue
                          : ""
                      );
                      setOpenCountryDropdown(false);
                    }}
                    className="flex cursor-pointer items-center justify-between text-xs  ">
                    <div className="flex items-end gap-2">
                      <span>{country.emoji}</span>
                      <span className="">{country.name}</span>
                    </div>
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        countryValue === lowerCase(country.name)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CountryDropdown;
