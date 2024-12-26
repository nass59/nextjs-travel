"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import { RoleSchema } from "../schemas/rolesSchema";
import { RolesActionResponse } from "../type/roles";
import { checkRole } from "../utils/roles";

export const setRoleAction = async (
  _: RolesActionResponse | null,
  formData: FormData
) => {
  const client = await clerkClient();

  // Check that the user trying to set the role is an admin
  if (!checkRole("admin")) {
    return {
      success: false,
      message: "User not authorized.",
    };
  }

  try {
    const rawData = Object.fromEntries(formData);
    const validatedData = RoleSchema.parse(rawData);

    await client.users.updateUserMetadata(validatedData.id, {
      publicMetadata: {
        role: validatedData.role,
      },
    });

    return {
      success: true,
      message: "Role updated!",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please fix the errors in the form.",
        errors: error.flatten().fieldErrors,
      };
    }

    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
};
