/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../atoms/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../atoms/button";
import { ThemeModeToggle } from "./theme-mode-toggle";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "English",
    href: "/languages#english",
    description:
      "Learn English with our comprehensive courses and interactive lessons.",
  },
  {
    title: "French",
    href: "/languages#french",
    description:
      "Master French through immersive content and expert-led tutorials.",
  },
  {
    title: "Japanese",
    href: "/languages#japanese",
    description:
      "Discover the beauty of Japanese language and culture with us.",
  },
  {
    title: "German",
    href: "/languages#german",
    description:
      "Explore the German language with lessons designed for every level.",
  },
  {
    title: "Tamil",
    href: "/languages#tamil",
    description:
      "Delve into Tamil language and literature with our structured courses.",
  },
  {
    title: "View All Languages",
    href: "/languages",
    description:
      "Browse all languages available on our education platform, including more options beyond English, French, Japanese, German, Tamil, and Hindi.",
  },
];

function Navigation() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Languages</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/certificates" legacyBehavior>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}
            >
              Certificates
            </NavigationMenuLink>
          </Link>
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), "hover:bg-transparent")}
          >
            <Link href="/Registration" legacyBehavior>
              <Button variant={"secondary"}>Registration</Button>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <ThemeModeToggle />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface ListItemProps {
  className?: string;
  title: string;
  href: string;
  children: React.ReactNode;
  [key: string]: any;
}

const ListItem = ({
  className,
  title,
  href,
  children,
  ...props
}: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default Navigation;
