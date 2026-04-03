"use client";

import { Search, X } from "lucide-react";
import { useState, useCallback } from "react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  initialValue?: string;
  className?: string;
}

export function SearchBar({
  onSearch,
  placeholder = "Search charms, origins, categories…",
  initialValue = "",
  className = "",
}: SearchBarProps) {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.value;
      setValue(next);
      onSearch?.(next);
    },
    [onSearch]
  );

  const handleClear = useCallback(() => {
    setValue("");
    onSearch?.("");
  }, [onSearch]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape") {
        setValue("");
        onSearch?.("");
      }
    },
    [onSearch]
  );

  return (
    <div className={`relative w-full ${className}`}>
      {/* Search icon */}
      <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Search size={18} className="text-zinc-500" />
      </span>

      <input
        type="search"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck={false}
        className={[
          "w-full bg-zinc-900/80 border border-zinc-800 rounded-xl",
          "pl-11 pr-10 py-3 text-sm text-zinc-100 placeholder:text-zinc-600",
          "outline-none transition-all duration-200",
          "focus:border-[#c4a87c] focus:ring-2 focus:ring-[#c4a87c]/20",
          "hover:border-zinc-700",
        ].join(" ")}
      />

      {/* Clear button */}
      {value.length > 0 && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          className="absolute inset-y-0 right-3 flex items-center px-1 text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
