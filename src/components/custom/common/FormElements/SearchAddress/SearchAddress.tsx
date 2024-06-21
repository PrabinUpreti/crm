import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/Command/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover/popover";
import { CommandLoading } from "cmdk";
import { RawResult } from "leaflet-geosearch/dist/providers/bingProvider.js";
import { SearchResult } from "leaflet-geosearch/dist/providers/provider.js";
import { useSearchAddress } from "@/hooks/useSearchAddress";

interface SearchAddressProps {
  onSelectLocation: (item: SearchResult<RawResult> | null) => void;
}
const SearchAddress: React.FC<SearchAddressProps> = ({ onSelectLocation }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const { results, loading, handleSearch, selectedItem, setSelectedItem } =
    useSearchAddress();

  if (loading) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            aria-expanded={open}
            className="w-80 justify-between truncate"
          >
            <p className="truncate">
              {selectedItem
                ? `${selectedItem.label} (${selectedItem.raw.entityType})`
                : "Select place..."}
            </p>

            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0">
          <Command>
            <CommandInput
              placeholder="Search the place..."
              onValueChange={(value) => handleSearch(value)}
              className="w-full"
            />
            <CommandList>
              <CommandLoading>
                <CommandEmpty>Type to search</CommandEmpty>
              </CommandLoading>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          aria-expanded={open}
          className="w-80 justify-between truncate"
        >
          <p className="truncate">
            {selectedItem
              ? `${selectedItem.label} (${selectedItem.raw.entityType})`
              : "Select place..."}
          </p>

          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        <Command>
          <CommandInput
            placeholder="Search the place..."
            onValueChange={(value) => handleSearch(value)}
            className="w-full"
          />
          <CommandList>
            {Object.keys(results).length > 0 ? (
              Object.entries(results).map(([type, items]) => (
                <CommandGroup
                  key={type}
                  heading={type.charAt(0).toUpperCase() + type.slice(1)}
                >
                  {items.map((item) => (
                    <CommandItem
                      key={item.label}
                      value={item.label}
                      onSelect={(currentValue: string) => {
                        const item = results[type]?.find(
                          (item) => item.label === currentValue
                        );
                        setValue(currentValue === value ? "" : currentValue);
                        setSelectedItem(item ?? null);
                        onSelectLocation(item ?? null);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === item.label ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {item.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))
            ) : (
              <CommandEmpty>No results found.</CommandEmpty>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SearchAddress;
