import codeLines from "./CodeLines";
import CodeLine from "./CodeLine";

export default function CodePreview() {
  return (
    <div className="w-full max-w-92.5 rotate-2 rounded-[14px] border border-[#303640] bg-[#11161b] shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:rotate-0">
      {/* Editor header */}
      <div className="flex h-14.25 items-center justify-between border-b border-[#292f37] px-5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#e77979]" />
          <span className="h-2 w-2 rounded-full bg-[#e3bd65]" />
          <span className="h-2 w-2 rounded-full bg-[#63b99c]" />

          <span className="ml-2 text-xs text-[#727e89]">clean-code.ts</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#727e89]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#61e6d5]" />
          synced
        </div>
      </div>

      {/* Code */}
      <div className="min-h-67.5 px-5 py-7 font-mono text-[13px] sm:text-sm">
        {codeLines.map((line) => (
          <CodeLine key={line.number} line={line} />
        ))}
      </div>

      {/* Editor footer */}
      <div className="flex h-10.5 items-center gap-5 border-t border-[#292f37] px-5 text-[10px] text-[#727e89]">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#61e6d5]" />
          main
        </div>

        <span>TypeScript</span>
        <span>Ln 7, Col 26</span>
      </div>
    </div>
  );
}
