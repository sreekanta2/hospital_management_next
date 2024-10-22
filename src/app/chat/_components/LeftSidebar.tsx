/* eslint-disable @next/next/no-img-element */
import Avatar from "@/components/Avatar";
import SearchInput from "@/components/SearchInput";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import avatar from "../_components/assets/images/avatar-5.jpg";

export default function LeftSidebar() {
  const name = "Jhon  Doe";
  return (
    <section className="w-full mxw7xl flex  px-2 mb-4">
      <div className="  relative max-w-[370px]      ">
        <div className=" sticky top-16   h-12    z-10   bg-white  dark:bg-gray-950   ">
          <div className="fixed z-10 w-[367px]">
            <SearchInput searchParamKey="q" />
          </div>
        </div>
        <ScrollArea className="h-full px-3 mb-10">
          <div>
            <ScrollArea className="max-w-[370px] mt-4  ">
              {" "}
              {/* Allow horizontal scrolling */}
              <div className="flex gap-4 pb-2">
                {" "}
                {/* Remove w-full from this div to prevent forced full width */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((cv) => (
                  <div
                    className="relative flex flex-col items-center min-w-[60px]" // Set a minimum width for items
                    key={cv}
                  >
                    {/* Avatar */}
                    <div className="relative">
                      <Avatar
                        src={avatar} // Replace with actual avatar source
                        alt="profile-image"
                        width="50px"
                        height="50px"
                        className="rounded-full border border-gray-300" // Rounded avatars with a border
                      />
                      {/* Online Status Indicator */}
                      <div className="w-3 h-3 bg-green-500 rounded-full absolute bottom-0 right-0 ring-2 ring-white" />
                    </div>
                    {/* Name/Label */}
                    <h1 className="mt-2 text-xs text-center">
                      {name.length > 10 ? `${name.slice(0, 10)}...` : name}
                    </h1>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <div className=" ">
            <h1 className="font-medium pb-1">Recents </h1>
            <div className=" flex flex-col gap-4 ">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i, j) => (
                <div className="flex items-center gap-4" key={i}>
                  <div>
                    <Avatar
                      src={avatar}
                      alt="profile image"
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <div className="text-sm space-y-1">
                    <h1>Jhon Doe</h1>
                    <p className="text-xs flex flex-col justify-center">
                      <span>Lorem ipsum dolor sit amet.keb....</span>
                      <span>12 march 2024 10.10pm</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
      <div>
        <div className="sticky top-16 h-12 z-10 bg-white dark:bg-gray-950">
          <div className="fixed z-10 w-[100vw] bg-slate-200">
            {" "}
            {/* Set width to 100% */}
            hehe
            {/* <ChatBodyHeader /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
