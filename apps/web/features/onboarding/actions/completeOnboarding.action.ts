"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import { OnboardingSchema } from "../schemas/onboardingSchema";
import { OnboardingActionResponse } from "../types/onboarding";

export const completeOnboardingAction = async (
  _: OnboardingActionResponse | null,
  formData: FormData
): Promise<OnboardingActionResponse> => {
  const { userId } = await auth();

  if (!userId) {
    return {
      success: false,
      message: "User not authenticated.",
    };
  }

  const client = await clerkClient();

  try {
    const rawData = Object.fromEntries(formData);
    const validatedData = OnboardingSchema.parse(rawData);

    await client.users.updateUser(userId, {
      publicMetadata: {
        onboardingComplete: true,
        pseudo: validatedData.pseudo,
      },
    });

    return {
      success: true,
      message: "Oboarding completed!",
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
