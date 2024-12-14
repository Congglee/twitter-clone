import MoreSettings from "@/components/more-settings";
import PostButton from "@/components/post-button";
import SidebarLink from "@/components/sidebar-link";
import SidebarProfile from "@/components/sidebar-profile";
import { LucideIcon } from "@/lib/lucide-icon";
import { NavLink } from "@/types/navigation";
import Link from "next/link";

const navLinks: NavLink[] = [
  {
    href: "/home",
    label: "Home",
    icon: "House",
  },
  {
    href: "/explore",
    label: "Explore",
    icon: "Search",
  },
  {
    href: "/notifications",
    label: "Notifications",
    icon: "Bell",
  },
  {
    href: "/messages",
    label: "Messages",
    icon: "Mail",
  },
  {
    href: "#",
    label: "Grok",
    icon: "SquareSlash",
    disabled: true,
  },
  {
    href: "#",
    label: "Communities",
    icon: "UsersRound",
    disabled: true,
  },
  {
    href: "#",
    label: "Premium",
    icon: "Twitter",
    disabled: true,
  },
  {
    href: "#",
    label: "Verified Orgs",
    icon: "Zap",
    disabled: true,
  },
];

export default function Sidebar() {
  return (
    <header className="flex w-0 shrink-0 transition-opacity xs:w-20 md:w-24 lg:max-w-none xl:-mr-4 xl:w-full xl:max-w-xs xl:justify-end">
      <div className="fixed bottom-0 xs:top-0 z-10 w-full flex flex-col justify-between border-t border-tw-border py-0 xs:h-full xs:w-auto xs:border-0 xs:bg-transparent xs:px-2 xs:py-3 xs:pt-2 md:px-4 xl:w-72">
        <div className="flex flex-col justify-center xs:items-center xl:items-stretch">
          <h1 className="hidden xs:flex">
            <Link
              href="/home"
              className="text-tw-twitter-icon rounded-full p-2.5 outline-none  transition-base hover:bg-tw-primary/10 focus-visible:bg-accent-blue/10  focus-visible-base focus-visible:ring-accent-blue/80"
            >
              <LucideIcon className="size-[26px]" name="Twitter" />
            </Link>
          </h1>
          <nav className="flex items-center justify-around xs:flex-col xs:justify-center xl:block">
            {navLinks.map((link) => (
              <SidebarLink key={link.label} {...link} />
            ))}
            <SidebarLink href="/username" label="Profile" icon="UserRound" />
            <MoreSettings />
          </nav>
          <PostButton />
        </div>
        <SidebarProfile />
      </div>
    </header>
  );
}
