import { auth } from "@clerk/nextjs/server";

import { Role } from "@/types/global";

/**
 * Check if the user has the specified role.
 * @doc https://clerk.com/docs/guides/basic-rbac
 */
export const checkRole = async (role: Role) => {
  const { sessionClaims } = await auth();

  return sessionClaims?.metadata.role === role;
};
