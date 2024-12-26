import { redirect } from "next/navigation";

import { Skeleton } from "@repo/design-system/components/ui/skeleton";

import { checkRole } from "@/features/auth/utils/roles";

export default async function Dashboard() {
  const isAdmin = await checkRole("admin");

  if (!isAdmin) {
    redirect("/");
  }

  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <Skeleton className="aspect-video" />
        <Skeleton className="aspect-video" />
        <Skeleton className="aspect-video" />
      </div>
      <Skeleton className="min-h-[100vh] flex-1 md:min-h-min" />
    </>
  );
}
