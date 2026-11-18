
import Link from "next/link";
import { ArrowRight, Zap, CircleDot, Layers, ShieldCheck } from "lucide-react";

import PrincipleCard from "./core-principles/PrincipleCard";

const principles = [
    {
        title: "KISS",
        category: "CODE PRINCIPLE",
        subtitle: "Keep It Simple, Stupid",
        description: "Віддавай перевагу простим рішенням замість зайвого ускладнення.",
        href: "/principles/kiss",
        icon: Zap,
        iconColor: "text-[#61e6d5]",
    },
    {
        title: "YAGNI",
        category: "CODE PRINCIPLE",
        subtitle: "You Aren't Gonna Need It",
        description: "Реалізовуй лише те, що потрібно зараз, а не те, що може знадобитися колись.",
        href: "/principles/yagni",
        icon: CircleDot,
        iconColor: "text-[#a78bfa]",
    },
    {
        title: "DRY",
        category: "CODE PRINCIPLE",
        subtitle: "Don't Repeat Yourself",
        description: "Не повторюй один і той самий код.",
        href: "/principles/dry",
        icon: Layers,
        iconColor: "text-[#60a5fa]",
    },
    {
        title: "SOLID",
        category: "DESIGN PATTERNS",
        subtitle: "Maintainable architecture",
        description: "П'ять принципів для зручного та зрозумілого коду.",
        href: "/principles/solid",
        icon: ShieldCheck,
        iconColor: "text-[#e879d5]",
    },
];

export default function CorePrinciples() {
    return (
        <section className="border-t border-[#242a31] bg-[#090a0d] px-6 py-8 sm:px-10 lg:px-12">
            <div className="mx-auto w-full max-w-[1200px]">
                {/* Header */}
                <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <h2 className="text-[34px] font-medium tracking-[-0.055em] text-[#f4f4f5] sm:text-[42px]">
                            Core principles
                        </h2>

                        <p className="mt-4 text-[15px] text-[#8795a5]">
                            The mental models that make complex software feel simple.
                        </p>
                    </div>

                    <Link
                        href="/cheat-sheet"
                        prefetch={false}
                        className="group inline-flex items-center gap-3 text-[13px] font-medium text-[#61e6d5] transition-colors hover:text-[#8af3e6]"
                    >
                        View cheat sheet

                        <ArrowRight
                            size={17}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </Link>
                </div>

                {/* Principle cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {principles.map((principle) => (
                        <PrincipleCard key={principle.title} {...principle} />
                    ))}
                </div>
            </div>
        </section>
    );
}
