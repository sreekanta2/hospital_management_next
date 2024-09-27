"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";
import { useState, MouseEvent } from "react";

// Define types for props
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  initialLimit?: number; // Optional prop with default
  pagename?: string; // Optional prop with default
  limitname?: string; // Optional prop with default
}

export default function PaginationComponent({
  currentPage,
  totalPages,
  baseUrl,
  initialLimit = 10, // default limit if not provided
  pagename = "page",
  limitname = "limit",
}: PaginationProps) {
  const router = useRouter();
  const [limit] = useState<number>(initialLimit);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      // Construct URL with dynamic query parameters
      const queryParams = new URLSearchParams();
      queryParams.set(pagename, page.toString());
      queryParams.set(limitname, limit.toString());

      router.push(`${baseUrl}?${queryParams.toString()}`);
    }
  };

  const handleLinkClick = (e: MouseEvent, page: number) => {
    e.preventDefault();
    handlePageChange(page);
  };

  return (
    <Pagination className="py-10 ">
      <PaginationContent>
        {/* Previous Button */}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e: MouseEvent) => handleLinkClick(e, currentPage - 1)}
            />
          </PaginationItem>
        )}

        {/* First Page and Ellipsis */}
        {currentPage > 2 && (
          <>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e: MouseEvent) => handleLinkClick(e, 1)}
              >
                1
              </PaginationLink>
            </PaginationItem>
            {currentPage > 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
          </>
        )}

        {/* Previous Page */}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={(e: MouseEvent) => handleLinkClick(e, currentPage - 1)}
            >
              {currentPage - 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Current Page */}
        <PaginationItem>
          <PaginationLink href="#" isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        {/* Next Page */}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={(e: MouseEvent) => handleLinkClick(e, currentPage + 1)}
            >
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Last Page and Ellipsis */}
        {currentPage < totalPages - 1 && (
          <>
            {currentPage < totalPages - 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e: MouseEvent) => handleLinkClick(e, totalPages)}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {/* Next Button */}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e: MouseEvent) => handleLinkClick(e, currentPage + 1)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
