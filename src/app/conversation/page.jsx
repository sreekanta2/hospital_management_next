"use client";

import ChatBody from "./_components/ChatBody";
import Sidebar from "./_components/Sidebar";

// import ChatBody from "@/chap-app/src/components/inbox/chatbody/ChatBody";

export default function page() {
  return (
    <div className=" mx-6 mt-[68px]">
      <div className="min-w-full border rounded flex lg:grid lg:grid-cols-3">
        <Sidebar />
        <div className="w-full lg:col-span-2 lg:block">
          <div className="w-full grid conversation-row-grid">
            <ChatBody />
            {/* <Blank /> */}
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
