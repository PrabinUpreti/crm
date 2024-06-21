"use client";

import * as React from "react";

import {
  CommandDialog as ShadCommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/Command//command";
import { ICommandGroup, ICommandItem, ICommandProps } from "@/@types";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function CommandDialog({
   
  commandData: { placeholder, emptyText, commandGroups },
}: {
  commandData: ICommandProps;
}) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <ShadCommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={placeholder} />
        <CommandList>
          <CommandEmpty>{emptyText}</CommandEmpty>
          {commandGroups?.map((group: ICommandGroup) => {
            return (
              <div key={group.heading}>
                <CommandGroup heading={group.heading}>
                  {group.commandItems.map((commandItem: ICommandItem) => {
                    return (
                      <CommandItem
                        id={"index"}
                        key={commandItem.text}
                        className="cursor-pointer"
                      >
                        {commandItem.hasLink && commandItem.link ? (
                          <Link
                            to={`${commandItem.link}`}
                            className={cn(`flex items-center gap-2`)}
                          >
                            {commandItem?.icon}
                            <span>{commandItem?.text}</span>
                            <CommandShortcut>
                              {commandItem?.shortcut}
                            </CommandShortcut>
                          </Link>
                        ) : (
                          <div className="flex items-center gap-2">
                            {commandItem?.icon}
                            <span>{commandItem?.text}</span>
                            <CommandShortcut>
                              {commandItem?.shortcut}
                            </CommandShortcut>
                          </div>
                        )}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
                <CommandSeparator />
              </div>
            );
          })}
        </CommandList>
      </ShadCommandDialog>
    </>
  );
}
