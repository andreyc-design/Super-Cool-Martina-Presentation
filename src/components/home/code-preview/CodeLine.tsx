import type { CodeLine as CodeLineType } from "./types";

interface Props {
  line: CodeLineType;
}

export default function CodeLine({ line }: Props) {
  return (
    <div className="grid grid-cols-[30px_1fr] items-center gap-4 leading-[2.25]">
      <span className="select-none text-right text-[#53616d]">
        {line.number}
      </span>

      <div className="whitespace-pre">{line.content}</div>
    </div>
  );
}
