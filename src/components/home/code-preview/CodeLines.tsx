import type { CodeLine } from "./types";

const codeLines: CodeLine[] = [
  {
    number: "01",
    content: (
      <>
        <span className="text-[#b69aff]">const</span>{" "}
        <span className="font-semibold text-[#f4d58d]">principles</span>
        <span className="text-[#a1a1aa]"> = [</span>
      </>
    ),
  },
  {
    number: "02",
    content: (
      <>
        <span className="text-[#61e6d5]">`simple`</span>
        <span className="text-[#a1a1aa]">,</span>
      </>
    ),
  },
  {
    number: "03",
    content: (
      <>
        <span className="text-[#61e6d5]">`focused`</span>
        <span className="text-[#a1a1aa]">,</span>
      </>
    ),
  },
  {
    number: "04",
    content: <span className="text-[#61e6d5]">`maintainable`</span>,
  },
  {
    number: "05",
    content: <span className="text-[#a1a1aa]">]</span>,
  },
  {
    number: "06",
    content: null,
  },
  {
    number: "07",
    content: (
      <>
        <span className="text-[#b69aff]">export default</span>{" "}
        <span className="font-semibold text-[#f4d58d]">principles</span>
      </>
    ),
  },
];

export default codeLines;
