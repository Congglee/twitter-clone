import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const links = [
  {
    name: "Terms of Service",
    href: "https://twitter.com/tos",
  },
  {
    name: "Privacy Policy",
    href: "https://twitter.com/privacy",
  },
  {
    name: "Cookie Policy",
    href: "https://support.twitter.com/articles/20170514",
  },
  {
    name: "Accessibility",
    href: "https://help.twitter.com/resources/accessibility",
  },
  {
    name: "Ads info",
    href: "https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html",
  },
];

export default function AsideFooter() {
  return (
    <footer className="sticky top-16 flex flex-col gap-3 text-center text-sm text-tw-secondary">
      <nav className="flex flex-wrap justify-center gap-x-3 gap-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            className="transition-base underline-transition"
          >
            {link.name}
          </Link>
        ))}
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className="transition-base underline-transition focus:outline-none">
            More ...
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-full max-w-96 shadow-[rgba(255,_255,_255,_0.2)_0px_0px_15px,rgba(255,_255,_255,_0.15)_0px_0px_3px_1px] p-0"
          >
            <DropdownMenuItem asChild>
              <Link
                href="https://about.twitter.com/en"
                className={cn(
                  "cursor-pointer font-bold py-3 px-4 rounded-b-none text-base"
                )}
              >
                About
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="https://help.x.com/en/using-x/download-the-x-app"
                className={cn(
                  "cursor-pointer font-bold py-3 px-4 !rounded-none text-base"
                )}
              >
                Dowload the Twitter app
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="https://business.x.com/en"
                className={cn(
                  "cursor-pointer font-bold py-3 px-4 !rounded-none text-base"
                )}
              >
                X for Business
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="https://developer.x.com/en"
                className={cn(
                  "cursor-pointer font-bold py-3 px-4 rounded-t-none text-base"
                )}
              >
                Developers
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <span>© 2024 Twitter, Inc.</span>
      </nav>
    </footer>
  );
}
