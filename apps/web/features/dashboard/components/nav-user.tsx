import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { ChevronsUpDown, LogOut } from "lucide-react";

import { Badge } from "@workspace/design-system/components/ui/badge";
import { Button } from "@workspace/design-system/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@workspace/design-system/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/design-system/components/ui/sidebar";

import { NavUserAvatar } from "./nav-user-avatar";
import { NavUserInfo } from "./nav-user-info";

/**
 * NavUser Component
 *
 * A server component that displays the current user's avatar in the navigation bar.
 * Fetches the current user data and renders their profile image or initials.
 *
 * @returns A React server component rendering the user's avatar
 */
export const NavUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const { fullName, emailAddresses } = user;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg">
              <NavUserAvatar user={user} />
              <div className="grid flex-1 text-left text-sm leading-tight">
                <NavUserInfo
                  fullName={fullName}
                  emailAddresses={emailAddresses}
                />
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
            <DropdownMenuLabel>
              <div className="flex items-center justify-between gap-2">
                <div className="flex max-w-[144px] flex-col">
                  <NavUserInfo
                    fullName={fullName}
                    emailAddresses={emailAddresses}
                  />
                </div>
                <Badge variant="outline">Beta</Badge>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <Link href="/dashboard/profile">
                <DropdownMenuItem className="cursor-pointer">
                  Account
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>

              <Link href="#">
                <DropdownMenuItem className="cursor-pointer">
                  Support
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>

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
