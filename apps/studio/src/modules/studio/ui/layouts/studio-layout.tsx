import { SidebarProvider } from "@workspace/design-system/components/ui/sidebar";

import { StudioNavbar } from "../components/studio-navbar/studio-navbar";
import { StudioSidebar } from "../components/studio-sidebar/studio-sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export const StudioLayout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <StudioNavbar />
        <div className="flex min-h-screen pt-[4rem]">
          <StudioSidebar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
