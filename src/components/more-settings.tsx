"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "@/lib/lucide-icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "@/types/navigation";
import { cn } from "@/lib/utils";

const moreSettingsNavLinks: NavLink[] = [
  {
    href: "/lists",
    label: "Lists",
    icon: "SquareEqual",
  },
  {
    href: "/bookmarks",
    label: "Bookmarks",
    icon: "Bookmark",
  },
  {
    href: "#",
    label: "Ads",
    icon: "SquareArrowUpRight",
  },
  {
    href: "#",
    label: "Jobs",
    icon: "BriefcaseBusiness",
  },
  {
    href: "#",
    label: "Create your Space",
    icon: "Mic",
  },
  {
    href: "/settings",
    label: "Settings and privacy",
    icon: "Settings",
  },
];

export default function MoreSettings() {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className="group relative hidden xs:flex justify-start py-0.5 outline-none [&_svg]:size-[26px] px-0 h-auto hover:no-underline focus-visible:ring-0"
        >
          <div className="transition duration-200 rounded-full p-2.5 flex items-center gap-4 text-xl group-hover:bg-tw-primary/10 xl:pr-8">
            <LucideIcon name="CircleEllipsis" />
            <p className="hidden xl:block">More</p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="sm:min-w-80 shadow-[#ffffff33_0px_0px_15px,#ffffff26_0px_0px_3px_1px] p-0"
        align="start"
        alignOffset={12}
      >
        {moreSettingsNavLinks.map((link, idx) => {
          const isFirst = idx === 0;
          const isLast = idx === moreSettingsNavLinks.length - 1;
          const isActive = pathname === link.href;

          return (
            <DropdownMenuItem key={link.label} asChild>
              <Link
                href={link.href}
                className={cn(
                  "w-full h-full gap-6 duration-200 [&_svg]:size-6 cursor-pointer text-xl font-bold !p-4 rounded-none",
                  isFirst && "rounded-b-none",
                  isLast && "rounded-t-none",
                  isActive && "bg-tw-sidebar-background"
                )}
              >
                <LucideIcon name={link.icon} />
                {link.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
