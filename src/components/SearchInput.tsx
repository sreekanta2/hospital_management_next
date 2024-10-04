"use client";

import { Input } from "@/components/ui/input"; // Shadcn UI Input
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5"; // For clear icon

type SearchInputProps = {
  placeholder?: string;
  baseUrl: string;
  searchParamKey: string;
  debounceDelay?: number;
  className?: string;
};

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  baseUrl,
  searchParamKey,
  debounceDelay = 300,
  className = "", // Default debounce delay of 300ms
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams.get(searchParamKey) || ""
  );

  // Debounced search value
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, debounceDelay);

    return () => clearTimeout(timer);
  }, [searchQuery, debounceDelay]);

  // Update URL when debounced value changes
  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    if (debouncedSearchQuery) {
      newSearchParams.set(searchParamKey, debouncedSearchQuery);
    } else {
      newSearchParams.delete(searchParamKey);
    }

    router.push(`${baseUrl}?${newSearchParams.toString()}`);
  }, [debouncedSearchQuery, baseUrl, searchParamKey, searchParams, router]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete(searchParamKey);
    router.push(`${baseUrl}?${newSearchParams.toString()}`);
  };

  return (
    <div className={`relative flex items-center  max-w-full ${className}`}>
      {/* Prefix: Search Icon */}
      <span className="absolute left-3 text-gray-500">
        <FiSearch />
      </span>

      {/* Input */}
      <Input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder={placeholder}
        className="pl-10 pr-10 w-full"
      />

      {/* Suffix: Clear Icon */}
      {searchQuery && (
        <span
          className="absolute right-3 text-gray-500 cursor-pointer"
          onClick={clearSearch}
        >
          <IoClose />
        </span>
      )}
    </div>
  );
};

export default SearchInput;
