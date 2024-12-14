"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LucideIcon } from "@/lib/lucide-icon";
import { motion, type MotionProps } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const variants: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 },
};

const trends = [
  {
    category: "Entertainment · Trending",
    trend: "#BillboardMusicAwards2024",
    posts: "1.2M posts",
    href: "/search?q=%23BillboardMusicAwards2024",
  },
  {
    category: "Technology · Trending",
    trend: "#AIRevolution",
    posts: "15.2K posts",
    href: "/search?q=%23AIRevolution",
  },
  {
    category: "Technology · Trending",
    trend: "#CodeGen",
    posts: "60.1K posts",
    href: "/search?q=%24CodeGen",
  },
  {
    category: "Trending in Japan",
    trend: "#SakuraFest2024",
    posts: "30.3K posts",
    href: "/search?q=%23SakuraFest2024",
  },
  {
    category: "Business & Finance · Trending",
    trend: "#CryptoWave",
    posts: "700K posts",
    href: "/search?q=%24CryptoWave",
  },
];

export default function AsideTrends() {
  const [open, setOpen] = useState(false);

  return (
    <div className="transition-base-colors border border-tw-border rounded-2xl">
      <motion.div {...variants}>
        <h2 className="px-4 py-3 text-xl font-extrabold">What’s happening</h2>

        {trends.map((trend) => (
          <div
            className="flex flex-col gap-0.5 px-4 py-3 transition-base-colors hover:bg-black/[0.03] dark:hover:bg-white/[0.03] relative"
            key={trend.trend}
          >
            <div className="absolute right-2 top-1">
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="focus:outline-none transition-base-colors group p-2 hover:bg-accent-blue/10 focus-visible:bg-accent-blue/20 focus-visible:ring-accent-blue/80 rounded-full [&_svg]:size-5 relative group"
                  >
                    <LucideIcon
                      name="Ellipsis"
                      className="text-tw-secondary group-hover:text-accent-blue group-focus-visible:text-accent-blue"
                    />

                    <div className="absolute z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 delay-500 bg-[#1D9BF0]/10 rounded-sm p-1 bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 w-max text-xs">
                      More
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-full max-w-96 shadow-[rgba(255,_255,_255,_0.2)_0px_0px_15px,rgba(255,_255,_255,_0.15)_0px_0px_3px_1px] p-0"
                >
                  <DropdownMenuItem asChild>
                    <Button
                      className="w-full h-full justify-start cursor-pointer py-3 px-4 focus-visible:ring-0 gap-3 [&>svg]:!size-[18px] rounded-b-none"
                      variant="ghost"
                    >
                      <LucideIcon name="Frown" />
                      <p className="font-bold">
                        The associated content is not relevant
                      </p>
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Button
                      className="w-full h-full justify-start cursor-pointer py-3 px-4 focus-visible:ring-0 gap-3 [&>svg]:!size-[18px] rounded-none"
                      variant="ghost"
                    >
                      <LucideIcon name="Frown" />
                      <p className="font-bold">This trend is spam</p>
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Button
                      className="w-full h-full justify-start cursor-pointer py-3 px-4 focus-visible:ring-0 gap-3 [&>svg]:!size-[18px] rounded-none"
                      variant="ghost"
                    >
                      <LucideIcon name="Frown" />
                      <p className="font-bold">
                        This trend is abusive or harmful
                      </p>
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Button
                      className="w-full h-full justify-start cursor-pointer py-3 px-4 focus-visible:ring-0 gap-3 [&>svg]:!size-[18px] rounded-none"
                      variant="ghost"
                    >
                      <LucideIcon name="Frown" />
                      <p className="font-bold">Not interested in this</p>
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Button
                      className="w-full h-full justify-start cursor-pointer py-3 px-4 focus-visible:ring-0 gap-3 [&>svg]:!size-[18px] rounded-none"
                      variant="ghost"
                    >
                      <LucideIcon name="Frown" />
                      <p className="font-bold">This trend is a duplicate</p>
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Button
                      className="w-full h-full justify-start cursor-pointer py-3 px-4 focus-visible:ring-0 gap-3 [&>svg]:!size-[18px] rounded-t-none"
                      variant="ghost"
                    >
                      <LucideIcon name="Frown" />
                      <p className="font-bold">
                        This trend is harmful or spammy
                      </p>
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link href={trend.href}>
              <div className="text-[13px] text-tw-secondary">
                {trend.category}
              </div>
              <div className="font-bold text-base">{trend.trend} </div>
              <div className="text-tw-secondary text-[13px]">{trend.posts}</div>
            </Link>
          </div>
        ))}

        <Link
          href="/trends"
          className="inline-block w-full rounded-2xl rounded-t-none text-accent-blue px-4 py-3 transition-base-colors outline-none focus-visible-base hover-expand"
        >
          Show more
        </Link>
      </motion.div>
    </div>
  );
}
