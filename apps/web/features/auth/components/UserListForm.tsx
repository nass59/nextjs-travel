"use client";

import { useActionState } from "react";
import { Save } from "lucide-react";

import { Button } from "@workspace/design-system/components/ui/button";
import { Input } from "@workspace/design-system/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/design-system/components/ui/select";

import { Role } from "@/types/global";

import { setRoleAction } from "../actions/roles.action";
import { RolesActionResponse } from "../type/roles";

type UserListFormProps = {
  currentRole: Role;
  userId: string;
};

const initialRoleState: RolesActionResponse = {
  success: false,
  message: "",
};

export const UserListForm = ({ userId, currentRole }: UserListFormProps) => {
  const [state, setRole, isPending] = useActionState(
    setRoleAction,
    initialRoleState
  );

  return (
    <div className="flex gap-2">
      <form action={setRole} className="flex gap-2">
        <Input type="hidden" name="id" value={userId} />
        <Select defaultValue={currentRole} name="role">
          <SelectTrigger className="w-52">
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="moderator">Moderator</SelectItem>
            <SelectItem value="user">User</SelectItem>
          </SelectContent>
        </Select>
        <Button
          type="submit"
          variant={state?.errors ? "destructive" : "default"}
          disabled={isPending}
        >
          <Save /> {isPending ? "Saving..." : "Update role"}
        </Button>
      </form>
    </div>
  );
};
