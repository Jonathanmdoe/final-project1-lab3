"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users2,
  FileText,
  CreditCard,
  Store,
  BarChart3,
  Receipt,
  UserCog,
} from "lucide-react";
import { cn } from "@/lib/utils";

type SidebarItem = {
  label: string;
  icon: React.ElementType;
  href: string;
};

const primaryItems: SidebarItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, href: "#" },
  { label: "Mauzo", icon: ShoppingCart, href: "#" },
  { label: "Bidhaa", icon: Package, href: "#" },
  { label: "Matumizi", icon: Receipt, href: "#" },
  { label: "Wateja", icon: Users2, href: "#" },
  { label: "Madeni", icon: CreditCard, href: "#" },
  { label: "Suppliers", icon: Store, href: "#" },
  { label: "Notes", icon: FileText, href: "#" },
];

const moreItems: SidebarItem[] = [
  { label: "Online Shop", icon: Store, href: "#" },
  { label: "Analytics", icon: BarChart3, href: "#" },
  { label: "Report", icon: FileText, href: "#" },
  { label: "Employees", icon: UserCog, href: "#" },
];

export function Sidebar() {
  return (
    <aside
      className={cn(
        "hidden lg:flex lg:flex-col border-r border-black/10 bg-mint-25/50 backdrop-blur-sm",
        "min-h-screen w-[240px] px-3 py-6 sticky top-0"
      )}
    >
      <div className="px-2">
        <div className="h-9 rounded-full bg-charcoal text-mint-50/90 text-xs flex items-center justify-between px-3 shadow-hard">
          <span className="font-medium">Business name</span>
          <span className="inline-flex items-center justify-center font-semibold text-[10px] bg-mint-300 text-charcoal rounded-full h-5 px-2">
            ▼
          </span>
        </div>
      </div>

      <nav className="mt-8 space-y-6 text-[13px]">
        <div className="px-2 text-charcoal/60 font-semibold uppercase tracking-wide">Menu</div>
        <ul className="space-y-1">
          {primaryItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="group flex items-center gap-3 rounded-md px-2 py-2 text-charcoal/80 hover:bg-white/80 hover:text-charcoal transition"
              >
                <item.icon className="h-4 w-4 text-charcoal/70" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="px-2 pt-4 text-charcoal/60 font-semibold uppercase tracking-wide">More</div>
        <ul className="space-y-1">
          {moreItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="group flex items-center gap-3 rounded-md px-2 py-2 text-charcoal/80 hover:bg-white/80 hover:text-charcoal transition"
              >
                <item.icon className="h-4 w-4 text-charcoal/70" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

