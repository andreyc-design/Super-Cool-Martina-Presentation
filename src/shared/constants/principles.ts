import { Zap, CircleDot, Layers, ShieldCheck } from "lucide-react";

export const principles = [
  {
    title: "KISS",
    category: "CODE PRINCIPLE",
    subtitle: "Keep It Simple, Stupid",
    description:
      "Віддавай перевагу простим рішенням замість зайвого ускладнення.",
    href: "/principles/kiss",
    icon: Zap,
    iconColor: "text-[#61e6d5]",
  },
  {
    title: "YAGNI",
    category: "CODE PRINCIPLE",
    subtitle: "You Aren't Gonna Need It",
    description:
      "Реалізовуй лише те, що потрібно зараз, а не те, що може знадобитися колись.",
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
