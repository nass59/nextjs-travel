import { z } from "zod";

const roles = ["admin", "moderator", "user"] as const;

export const RoleSchema = z.object({
  id: z.string(),
  role: z.enum(roles),
});

export type RoleFormData = z.infer<typeof RoleSchema>;
