import { User } from "@clerk/nextjs/server";

type NavUserInfoProps = Pick<User, "fullName" | "emailAddresses">;

/**
 * NavUserInfo Component
 *
 * A server component that displays the user's full name and email address
 * in the navigation bar.
 *
 * @param fullName - The user's full name
 * @param emailAddresses - The user's email addresses
 * @returns A React server component rendering the user's information
 */
export const NavUserInfo = ({ fullName, emailAddresses }: NavUserInfoProps) => {
  return (
    <>
      <span className="truncate font-semibold">{fullName}</span>
      <span className="truncate text-xs font-normal text-slate-400">
        {emailAddresses[0].emailAddress}
      </span>
    </>
  );
};
