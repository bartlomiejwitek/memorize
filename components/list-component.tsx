import { ReactNode } from "react";

export default function List({ children }: { children: ReactNode }) {
  return <div style={{ width: "100%", height: "100%" }}>{children}</div>;
}
