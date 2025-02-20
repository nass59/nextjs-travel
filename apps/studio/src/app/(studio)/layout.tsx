import { StudioLayout } from "@/modules/studio/ui/layouts/studio-layout";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <StudioLayout>{children}</StudioLayout>;
}
