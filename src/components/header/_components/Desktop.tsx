"use client";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { headerLinks } from "@/constant";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import { Lock, UserRound } from "lucide-react";

const links = headerLinks("1");

import CustomButton from "@/components/CustomButton";
export default function Desktop() {
  return (
    <div className="grid grid-cols-6 items-center  justify-center">
      <Link href="/" className="col-span-1">
        <Image
          src={logo}
          alt="Logo"
          className="w-36"
          priority={true}
          width={500}
          height={300}
        />
      </Link>
      <div className="flex col-span-4 justify-center gap-2">
        {links &&
          links.map((link) =>
            !link.sublinks ? (
              <NavigationMenu key={link.title}>
                <NavigationMenuList>
                  <NavigationMenuItem key={link.title}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {link.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ) : (
              <NavigationMenu key={link.title}>
                <NavigationMenuList>
                  <NavigationMenuItem key={link.title}>
                    <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                    {link.sublinks && (
                      <NavigationMenuContent>
                        <ul className="p-2 flex flex-col w-52 group-hover:md:block hover:md:block">
                          {link.sublinks.map((sublink) => (
                            <ListItem key={sublink.title} href={sublink.href}>
                              {sublink.title}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    )}
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            )
          )}
      </div>

      <div className="col-span-1 flex justify-self-end items-center gap-x-4">
        <ThemeToggle />
        <CustomButton variant="outline" icon={Lock}>
          Login
        </CustomButton>
        <CustomButton variant="outline" icon={UserRound}>
          Register
        </CustomButton>
      </div>
    </div>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none   rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none ">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground transition duration-300 ease-out hover:translate-x-2 hover:text-[#1c89fd]">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
