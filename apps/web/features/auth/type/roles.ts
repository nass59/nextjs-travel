import { RoleFormData } from "../schemas/rolesSchema";

export interface RolesActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof RoleFormData]?: string[];
  };
}
