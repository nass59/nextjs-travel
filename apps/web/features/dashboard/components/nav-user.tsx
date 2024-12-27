import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { currentUser, type User } from "@clerk/nextjs/server";
import { ChevronsUpDown, LogOut, UserCircle } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/design-system/components/ui/avatar";
import { Button } from "@repo/design-system/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/design-system/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@repo/design-system/components/ui/sidebar";

type UserAvatarProps = {
  user: User;
};

const UserAvatar = ({ user }: UserAvatarProps) => {
  if (!user.hasImage) {
    return (
      <Avatar className="h-8 w-8 rounded-lg">
        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
      </Avatar>
    );
  }

  const { imageUrl } = user;
  const params = new URLSearchParams(imageUrl);

  /**
   * Resize the image to 64x64 pixels with a quality of 100.
   * @doc https://clerk.com/docs/guides/image-optimization/imageurl-image-optimization
   */
  params.set("height", "64");
  params.set("width", "64");
  params.set("quality", "100");

  const imageSrc = `${imageUrl}?${String(params)}`;

  return (
    <Avatar className="h-8 w-8 rounded-lg">
      <AvatarImage
        src={imageSrc}
        alt={String(user.publicMetadata.pseudo) || "User profile picture"}
      />
    </Avatar>
  );
};

export const NavUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg">
              <UserAvatar user={user} />
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {String(user.publicMetadata.pseudo)}
                </span>
                <span className="truncate text-xs">
                  {user.emailAddresses[0].emailAddress}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side="bottom"
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <UserAvatar user={user} />
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {String(user.publicMetadata.pseudo)}
                  </span>
                  <span className="truncate text-xs">
                    {user.emailAddresses[0].emailAddress}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Manage account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href="/dashboard/profile"
                className="flex w-full items-center justify-start gap-2 text-sm font-medium"
              >
                <UserCircle className="h-4 w-4" /> My profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignOutButton>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start p-0 text-red-500"
                >
                  <LogOut className="h-4 w-4" />
                  Log out
                </Button>
              </SignOutButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
