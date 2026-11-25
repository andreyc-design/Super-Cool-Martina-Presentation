
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    BookOpen,
    ChevronRight,
    CircleDot,
    FileCode2,
    Layers3,
    ShieldCheck,
    Sparkles,
    Zap,
    type LucideIcon,
} from "lucide-react";

interface NavigationItem {
    label: string;
    href: string;
    icon: LucideIcon;
}

const navigationItems: NavigationItem[] = [
    { label: "Home", href: "/", icon: Sparkles },
    { label: "Principles", href: "/features/principles", icon: BookOpen },
    { label: "KISS", href: "/features/principles/kiss", icon: Zap },
    { label: "YAGNI", href: "/features/principles/yagni", icon: CircleDot },
    { label: "DRY", href: "/principles/dry", icon: Layers3 },
    { label: "SOLID", href: "/principles/solid", icon: ShieldCheck },
    { label: "Cheat Sheet", href: "/cheat-sheet", icon: FileCode2 },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="sticky top-0 hidden h-screen w-[300px] shrink-0 flex-col border-r border-[#252932] bg-[#090b10] px-[22px] py-10 md:flex">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
                <div className="flex size-[38px] items-center justify-center rounded-xl border border-[#454b57] text-xl font-bold text-white">
                    P
                </div>

                <div className="flex flex-col">
          <span className="text-lg font-bold leading-5 tracking-tight text-white">
            principled
          </span>
                    <span className="mt-1 text-[10px] tracking-[1.8px] text-[#747d8c]">
            CLEAN CODE ACADEMY
          </span>
                </div>
            </Link>

            {/* Divider */}
            <div className="mt-10 border-t border-[#252932]" />

            {/* Navigation */}
            <nav className="mt-8 flex flex-col gap-1">
                <p className="mb-3 px-3 text-xs font-semibold tracking-[1.5px] text-[#747d8c]">
                    LEARN
                </p>

                {navigationItems.map(({ label, href, icon: Icon }) => {
                    const isActive = pathname === href;

                    return (
                        <Link
                            key={href}
                            href={href}
                            aria-current={isActive ? "page" : undefined}
                            className={`group flex h-[50px] items-center gap-4 rounded-xl px-4 text-[15px] transition-colors ${
                                isActive
                                    ? "bg-[#142322] text-[#55e5d5]"
                                    : "text-[#929ba9] hover:bg-[#14181f] hover:text-white"
                            }`}
                        >
                            <Icon
                                size={19}
                                strokeWidth={1.8}
                                className="shrink-0"
                            />

                            <span className="flex-1">{label}</span>

                            {isActive && (
                                <ChevronRight
                                    size={18}
                                    strokeWidth={2}
                                    className="text-[#55e5d5]"
                                />
                            )}
                        </Link>
                    );
                })}
            </nav>


        </aside>
    );
}
