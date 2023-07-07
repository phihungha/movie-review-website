import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export type LinkTextProps = {
  children?: ReactNode;
} & LinkProps;

export function LinkText(props: LinkTextProps) {
  return (
    <Link
      {...props}
      className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
    />
  );
}
