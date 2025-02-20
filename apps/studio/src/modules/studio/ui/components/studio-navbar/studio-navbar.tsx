import Image from "next/image";
import Link from "next/link";

import { SidebarTrigger } from "@workspace/design-system/components/ui/sidebar";

import { AuthButton } from "@/modules/auth/ui/components/auth-button";

import { StudioUploadModal } from "../../components/studio-upload-modal";

export const StudioNavbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center border-b bg-white px-2 pr-5 shadow-md">
      <div className="flex w-full items-center gap-4">
        {/* Menu and Logo */}
        <div className="flex flex-shrink-0 items-center">
          <SidebarTrigger />
          <Link href="/">
            <div className="flex items-center gap-1 p-4">
              <Image src="/nextjs.svg" alt="logo" width={32} height={32} />
              <p className="text-xl font-semibold tracking-tight">Studio</p>
            </div>
          </Link>
        </div>

        {/* Auth */}
        <div className="ml-auto flex flex-shrink-0 items-center gap-4">
          <StudioUploadModal />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
