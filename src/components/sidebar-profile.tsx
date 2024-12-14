import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LucideIcon } from "@/lib/lucide-icon";
import Link from "next/link";

export default function SidebarProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="hidden xs:flex w-full h-auto justify-between transition-base-colors rounded-full p-3 outline-none focus-visible:ring-0 hover:bg-tw-primary/10 active:bg-tw-primary/20"
        >
          <div className="flex items-center gap-3 truncate">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="hidden xl:block truncate text-start text-[15px] leading-5">
              <div className="flex items-center gap-1">
                <span className="text-tw-primary font-bold truncate">
                  John Doe
                </span>
                <LucideIcon
                  name="BadgeCheck"
                  className="size-5 fill-accent-blue"
                />
              </div>
              <span className="text-tw-secondary">@johndoe</span>
            </div>
          </div>
          <LucideIcon name="Ellipsis" className="size-6 hidden xl:block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-72 shadow-[rgba(255,_255,_255,_0.2)_0px_0px_15px,rgba(255,_255,_255,_0.15)_0px_0px_3px_1px] rounded-2xl px-0 py-3">
        <DropdownMenuItem asChild>
          <Link
            href="#"
            className="!px-4 py-3 rounded-none cursor-pointer transition-base-colors text-base leading-5 font-bold text-tw-primary"
          >
            Add an existing account
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="#"
            className="!px-4 py-3 rounded-none cursor-pointer transition-base-colors text-base leading-5 font-bold text-tw-primary"
          >
            Log out @johndoe
          </Link>
        </DropdownMenuItem>
        <LucideIcon
          name="Triangle"
          className="h-4 w-6 text-transparent fill-background absolute -bottom-[11px] left-2 translate-x-1/2 rotate-180 [filter:drop-shadow(#cfd9de_1px_-1px_1px)] dark:[filter:drop-shadow(#333639_1px_-1px_1px)] xl:left-1/2 xl:-translate-x-1/2"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
