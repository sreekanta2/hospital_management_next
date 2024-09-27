"use client";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Image from "next/image";
import React from "react";
import { IoMenu } from "react-icons/io5";
import logo from "@/assets/logo.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { headerLinks } from "@/constant";
import Link from "next/link";
export default function Mobile() {
  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <IoMenu className="text-2xl" />
      </DrawerTrigger>

      <DrawerContent>
        <div className="h-20 flex items-center">
          <Image
            src={logo}
            alt="Logo"
            className="w-64"
            width={500}
            height={300}
            priority={true}
          />
        </div>

        <div className="  h-4/5 overflow-y-auto overflow-hidden scrollbar-hidden">
          <Accordion type="single" collapsible>
            {headerLinks.map((link) =>
              !link.sublinks ? (
                <Link
                  href={link.href}
                  className="text-sm mt-2 block"
                  key={link.title}
                >
                  {link.title}
                </Link>
              ) : (
                <AccordionItem value={link.title} key={link.title}>
                  <AccordionTrigger className="hover:no-underline">
                    {link.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    {link.sublinks && (
                      <ul className="flex flex-col w-52 group-hover:md:block hover:md:block">
                        {link.sublinks.map((sublink) => (
                          <li
                            key={sublink.title}
                            className="hover:bg-accent rounded-sm"
                          >
                            <Link
                              href={sublink.href}
                              className="line-clamp-2 text-sm leading-snug text-muted-foreground transition duration-300 ease-out hover:translate-x-2 p-2 hover:text-[#1c89fd]"
                            >
                              {sublink.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </AccordionContent>
                </AccordionItem>
              )
            )}
          </Accordion>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
