import { redirect } from "next/navigation";
import { clerkClient } from "@clerk/nextjs/server";

import { Separator } from "@workspace/design-system/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/design-system/components/ui/table";

import { SearchUsers } from "@/features/auth/components/SearchUsers";
import { UserListForm } from "@/features/auth/components/UserListForm";
import { checkRole } from "@/features/auth/utils/roles";
import type { Role } from "@/types/global";

type UsersPageProps = {
  searchParams: Promise<{ username?: string }>;
};

export default async function UsersPage(params: UsersPageProps) {
  const isAdmin = await checkRole("admin");

  if (!isAdmin) {
    redirect("/");
  }

  const client = await clerkClient();
  const query = (await params.searchParams).username;
  const users = query ? (await client.users.getUserList({ query })).data : [];

  return (
    <div className="container mx-auto space-y-4 p-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Manage Users
        </h1>
        <Separator />
      </div>
      <div className="flex flex-col gap-4">
        <SearchUsers />
      </div>

      <div className="flex flex-col gap-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>
                  {
                    user.emailAddresses.find(
                      (email) => email.id === user.primaryEmailAddressId
                    )?.emailAddress
                  }
                </TableCell>
                <TableCell>{user.publicMetadata.role as string}</TableCell>
                <TableCell>
                  <UserListForm
                    currentRole={user.publicMetadata.role as Role}
                    userId={user.id}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
