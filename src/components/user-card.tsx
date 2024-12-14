import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "@/lib/lucide-icon";
import { UserType } from "@/schemas/user-schema";
import Link from "next/link";

interface UserCardProps {
  user: UserType;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <Link
      href="#"
      className="grid grid-cols-[auto_1fr] items-center gap-2 px-4 py-3 hover:bg-tw-primary/5 outline-none focus-visible-base focus-visible:ring-accent-blue/80"
    >
      <Avatar className="w-10 h-10">
        <AvatarImage src={user.avatar ?? ""} alt={user.name} />
        <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1 truncate">
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col justify-center truncate text-sm">
            <div className="flex items-center gap-1">
              <span className="w-auto overflow-hidden font-bold underline-transition transition-base">
                {user.name}
              </span>
              <LucideIcon
                name="BadgeCheck"
                className="shrink-0 size-[18px] fill-accent-blue"
              />
            </div>
            <span className="truncate text-tw-secondary">@{user.username}</span>
          </div>
          <Button className="h-8 rounded-full px-4 py-1 font-bold bg-tw-primary hover:bg-tw-primary/90 focus-visible:bg-tw-primary/90">
            Follow
          </Button>
        </div>
      </div>
    </Link>
  );
}
