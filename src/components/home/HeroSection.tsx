
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import CodePreview from "@/components/home/code-preview/CodePreview";

export default function HeroSection() {
    return (
        <section className="relative flex min-h-[calc(100vh-1px)] items-center overflow-hidden bg-[#090a0d] px-6 py-16 sm:px-10 lg:px-12">
            {/* Background glow */}
            <div className="pointer-events-none absolute right-10 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-950/10 blur-[120px]" />

            <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-16 lg:grid-cols-2 lg:gap-12">

                {/* Left content */}
                <div className="flex flex-col items-start">

                    {/* Eyebrow badge */}
                    <div className="mb-7 inline-flex items-center gap-2 rounded-lg border border-[#244b48] bg-[#10201f] px-3 py-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#61e6d5] shadow-[0_0_10px_#61e6d5]" />

                        <span className="text-[11px] font-bold tracking-[0.18em] text-[#61e6d5]">
              THE CLEAN CODE PLAYBOOK
            </span>
                    </div>

                    {/* Heading */}
                    <h1 className="max-w-xl text-[64px] leading-[0.94] font-extrabold tracking-[-0.075em] text-[#f4f4f5] sm:text-[76px] lg:text-[84px]">
                        Write
                        <br />
                        better
                        <br />
                        <span className="text-[#61e6d5]">code.</span>
                    </h1>

                    {/* Description */}
                    <p className="mt-8 max-w-[390px] text-[18px] leading-[1.8] text-[#a1a1aa] sm:text-[19px]">
                        Understand the principles behind clean, maintainable, and scalable
                        software.
                    </p>

                    {/* Actions */}
                    <div className="mt-9 flex flex-wrap items-center gap-5">

                        <Link
                            href="/principles"
                            className="group inline-flex min-h-[76px] items-center gap-8 rounded-lg bg-[#61e6d5] px-5 py-4 text-[14px] font-semibold text-[#071311] transition-all duration-200 hover:bg-[#7af0e1] hover:shadow-[0_0_30px_rgba(97,230,213,0.18)]"
                        >
              <span className="max-w-[105px] leading-5">
                Explore
                <br />
                principles
              </span>

                            <ArrowRight
                                size={21}
                                className="transition-transform duration-200 group-hover:translate-x-1"
                            />
                        </Link>

                        <Link
                            href="/principles"
                            className="group inline-flex items-center gap-3 text-[14px] text-[#d4d4d8] transition-colors hover:text-[#61e6d5]"
                        >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#41434a] transition-colors group-hover:border-[#61e6d5]">
                <Play size={12} fill="currentColor" />
              </span>

                            <span className="leading-5">
                Start
                <br />
                learning
              </span>
                        </Link>

                    </div>
                </div>

                {/*Right content */}
                <div className="flex items-center justify-center lg:justify-end">
                    <CodePreview />
                </div>

            </div>
        </section>
    );
}
