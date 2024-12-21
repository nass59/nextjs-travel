import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center py-24 align-middle">
      <SignUp />
    </div>
  );
}
