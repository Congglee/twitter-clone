"use client";

import { LucideIcon } from "@/lib/lucide-icon";
import { cn } from "@/lib/utils";
import { NavLink } from "@/types/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps extends NavLink {}

export default function SidebarLink({
  href,
  icon,
  label,
  canBeHidden,
  disabled,
}: SidebarLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href} className="group py-0.5 outline-none flex">
      <div
        className={cn(
          "rounded-full flex items-center justify-center gap-4 self-start p-1.5 text-xl transition duration-200 group-hover:bg-tw-primary/10 group-focus-visible:ring-2 group-focus-visible:ring-[#878a8c] dark:group-focus-visible:ring-white xs:p-2.5 xl:pr-8",
          isActive && "font-bold"
        )}
      >
        <LucideIcon
          name={icon}
          className={cn("size-[26px]", isActive && "stroke-white")}
        />
        <p className="hidden xl:block">{label}</p>
      </div>
    </Link>
  );
}
