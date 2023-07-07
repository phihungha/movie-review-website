import { TextProps } from "@/props/TextProps";

export default function NavBarText({ children }: TextProps) {
  return <p className="font-bold text-white">{children}</p>;
}
