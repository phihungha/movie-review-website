import { TextProps } from "@/props/TextProps";

export default function SectionText({ children }: TextProps) {
  return (
    <h2 className="text-2xl font-bold not-italic text-gray-900">{children}</h2>
  );
}
