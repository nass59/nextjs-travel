import { unauthorized } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    unauthorized();
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
        Welcome back {String(user.publicMetadata.pseudo)}
      </h1>
    </main>
  );
}
