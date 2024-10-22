/* eslint-disable @next/next/no-img-element */
import Avatar from "@/components/Avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User } from "lucide-react";
import Link from "next/link";
import logo from "./assets/images/logo.svg";

export default function LeftSidebarMenu() {
  return (
    <section className="    ">
      <div className="hidden lg:my-5 lg:block">
        <Link href="#" className="block dark:hidden">
          <Avatar src={logo} alt="logo" />
        </Link>
      </div>

      {/* <!-- Tabs --> */}

      <Tabs defaultValue="chat">
        <TabsList className="w-screen  sticky bottom-0 h-screen">
          <TabsTrigger
            value="chat"
            className="focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 bg-transparent "
          >
            <User />
          </TabsTrigger>
          <TabsTrigger
            value="chat"
            className="focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 bg-transparent "
          >
            <User />
          </TabsTrigger>
          <TabsTrigger
            value="chat"
            className="focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 bg-transparent "
          >
            <User />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </section>
  );
}
