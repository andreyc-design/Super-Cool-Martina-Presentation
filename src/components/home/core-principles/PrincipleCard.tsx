import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface PrincipleCardProps {
  title: string;
  category: string;
  subtitle: string;
  description: string;
  href: string;
  icon: LucideIcon;
  iconColor: string;
}

export default function PrincipleCard({
  title,
  category,
  subtitle,
  description,
  href,
  icon: Icon,
  iconColor,
}: PrincipleCardProps) {
  return (
    <article className="group flex min-h-[331px] flex-col rounded-xl border border-[#292f37] bg-gradient-to-br from-[#15191e] to-[#101216] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#46515b] hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)]">
      {/* Card header */}
      <div className="flex items-center justify-between">
        <Icon size={24} strokeWidth={2} className={iconColor} />

        <ArrowRight
          size={20}
          className="text-[#65717c] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#61e6d5]"
        />
      </div>

      {/* Card content */}
      <div className="mt-12">
        <span className="text-[10px] font-medium tracking-[0.16em] text-[#718399]">
          {category}
        </span>

        <h3 className="mt-4 text-[36px] leading-none font-medium tracking-[-0.05em] text-[#f4f4f5]">
          {title}
        </h3>

        <p className="mt-4 text-[13px] font-medium text-[#d4d4d8]">
          {subtitle}
        </p>

        <p className="mt-5 text-[13px] leading-[1.6] text-[#8795a5]">
          {description}
        </p>
      </div>

      {/* Card footer */}
      <div className="mt-auto pt-2">
        <div className="mb-4 border-t border-[#292f37]" />

        <Link
          href={href}
          className="flex items-center justify-between text-[12px] text-[#a1a1aa] transition-colors hover:text-[#61e6d5]"
        >
          <span>Explore principle</span>

          <span className="flex items-center gap-1">
            <span className="h-3.5 w-1 rounded-full bg-[#61e6d5]" />
            <span className="h-2 w-1 rounded-full bg-[#424b54]" />
            <span className="h-2 w-1 rounded-full bg-[#424b54]" />
          </span>
        </Link>
      </div>
    </article>
  );
}
