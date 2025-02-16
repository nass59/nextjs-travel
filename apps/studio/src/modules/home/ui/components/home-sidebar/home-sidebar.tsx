import { Separator } from "@workspace/design-system/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
} from "@workspace/design-system/components/ui/sidebar";

import { MainSection } from "./main-section";
import { PersonalSection } from "./personal-section";

export const HomeSidebar = () => {
  return (
    <Sidebar className="z-40 border-none pt-16" collapsible="icon">
      <SidebarContent className="bg-background">
        <MainSection />
        <Separator />
        <PersonalSection />
      </SidebarContent>
    </Sidebar>
  );
};
