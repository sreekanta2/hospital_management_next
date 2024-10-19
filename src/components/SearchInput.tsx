"use client";

import { Input } from "@/components/ui/input"; // Shadcn UI Input
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5"; // For clear icon

type SearchInputProps = {
  placeholder?: string;
  searchParamKey: string;
  debounceDelay?: number;
  className?: string;
};

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  searchParamKey,
  debounceDelay = 300,
  className = "",
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialSearchQuery = searchParams.get(searchParamKey) || "";
  const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery);

  // Debounced search value
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  // Debounce effect for search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, debounceDelay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, debounceDelay]);

  // Update the URL when debouncedSearchQuery changes
  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (debouncedSearchQuery) {
      newSearchParams.set(searchParamKey, debouncedSearchQuery);
    } else {
      newSearchParams.delete(searchParamKey);
    }

    // Generate the updated URL and push it to the router
    const newUrl = `?${newSearchParams.toString()}`;
    router.push(newUrl);
  }, [debouncedSearchQuery, searchParamKey, searchParams, router]);

  // Handle search query input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Clear the search query and update the URL
  const clearSearch = () => {
    setSearchQuery("");
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete(searchParamKey);
    router.push(`?${newSearchParams.toString()}`);
  };

  return (
    <div className={`relative flex items-center max-w-full ${className}`}>
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
