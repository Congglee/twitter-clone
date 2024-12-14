"use client";

import { Button } from "@/components/ui/button";
import { useMedia } from "react-use";
import { TbLeaf } from "react-icons/tb";

export default function PostButton() {
  const isXLScreen = useMedia("(min-width: 1280px)", true);

  return (
    <Button className="absolute right-4 -translate-y-[72px] outline-none xs:static xs:translate-y-2 xl:w-11/12 rounded-full text-[17px] font-bold text-accent h-auto p-4 xl:py-3 xl:px-4 [&_svg]:size-6">
      {isXLScreen ? "Post" : <TbLeaf />}
    </Button>
  );
}
