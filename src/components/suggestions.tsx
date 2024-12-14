"use client";

import { variants } from "@/components/aside-trends";
import UserCard from "@/components/user-card";
import { DUMMY_USERS } from "@/constants/data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Suggestions() {
  return (
    <div className="rounded-2xl transition-base-colors border border-tw-border">
      <motion.div {...variants}>
        <h2 className="px-4 py-3 text-xl font-extrabold">Who to follow</h2>
        {DUMMY_USERS.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
        <Link
          href="/people"
          className="inline-block w-full rounded-2xl rounded-t-none text-accent-blue px-4 py-3 transition-base-colors outline-none focus-visible-base hover-expand"
        >
          Show more
        </Link>
      </motion.div>
    </div>
  );
}
