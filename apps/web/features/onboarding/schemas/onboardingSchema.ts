import { z } from "zod";

export const OnboardingSchema = z.object({
  pseudo: z
    .string()
    .min(2, "Pseudo must be at least 3 characters")
    .max(50, "Pseudo must be 50 characters or less"),
});

export type OnboardingFormData = z.infer<typeof OnboardingSchema>;
