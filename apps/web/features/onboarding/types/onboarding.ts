import { OnboardingFormData } from "../schemas/onboardingSchema";

export interface OnboardingActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof OnboardingFormData]?: string[];
  };
}
