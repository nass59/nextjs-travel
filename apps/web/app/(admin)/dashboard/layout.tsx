import type { ReactNode } from "react";

type RootLayoutProperties = {
  readonly children: ReactNode;
};

export default function DashboardLayout({ children }: RootLayoutProperties) {
  return <main>{children}</main>;
}
