"use client";

import { Input } from "@/components/ui/input";
import { LucideIcon } from "@/lib/lucide-icon";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import SearchBarAutoComplete from "@/components/search-bar-autocomplete";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useOnClickOutside<HTMLDivElement>(() =>
    setIsOpen(false)
  );

  return (
    <div className="transition-base-colors sticky top-0 z-10 -my-2 py-2">
      <div
        ref={containerRef}
        className="group flex items-center justify-between gap-4 rounded-full bg-tw-search-background px-4 py-2 transition focus-within:bg-background focus-within:ring-2 focus-within:ring-accent-blue relative"
      >
        <LucideIcon
          name="Search"
          className="size-5 text-tw-secondary transition-colors group-focus-within:text-accent-blue"
        />
        <Input
          className="focus-visible:ring-0 border-none p-0 h-7 peer flex-1 bg-transparent outline-none placeholder:text-tw-secondary text-[15px]"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsOpen(true)}
        />
        <button
          className={cn(
            "outline-none focus-visible-base scale-50 bg-accent-blue p-1 opacity-0 transition hover:brightness-90 disabled:opacity-0 rounded-full",
            inputValue &&
              "focus:scale-100 focus:opacity-100 peer-focus:scale-100 peer-focus:opacity-100"
          )}
          onClick={() => setInputValue("")}
        >
          <LucideIcon name="X" className="size-[14px] stroke-background" />
        </button>

        {isOpen && <SearchBarAutoComplete />}
      </div>
    </div>
  );
}
