import { LucideIconName } from "@/lib/lucide-icon";

export type NavLink = {
  href: string;
  label: string;
  icon: LucideIconName;

  disabled?: boolean;
  canBeHidden?: boolean;
};
