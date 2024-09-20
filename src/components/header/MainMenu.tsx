"use client";
import { useMediaQuery } from "@/hooks/use-menu-hooks";

import Desktop from "./_components/Desktop";
import Mobile from "./_components/Mobile";

export default function MainMenu() {
  const isDesktop = useMediaQuery("(min-width:768px)");

  return (
    <header className="fixed top-0 left-0 w-full z-30  shadow-lg bg-white dark:bg-gray-800  ">
      <div className="max-w-7xl h-16 mx-auto relative  ">
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full ">
          {isDesktop ? <Desktop /> : <Mobile />}
        </div>
      </div>
    </header>
  );
}
