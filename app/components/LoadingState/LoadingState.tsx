import { Suspense, SuspenseProps } from "react";

export default function LoadingState(props: SuspenseProps) {
  return <Suspense {...props} />;
}
