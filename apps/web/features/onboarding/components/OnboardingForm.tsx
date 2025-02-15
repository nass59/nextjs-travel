"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { CheckCircle2, Ticket, XCircle } from "lucide-react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/design-system/components/ui/alert";
import { Button } from "@workspace/design-system/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/design-system/components/ui/card";
import { Input } from "@workspace/design-system/components/ui/input";
import { Label } from "@workspace/design-system/components/ui/label";

import { completeOnboardingAction } from "../actions/completeOnboarding.action";
import { OnboardingActionResponse } from "../types/onboarding";

const initialState: OnboardingActionResponse = {
  success: false,
  message: "",
};

export default function OnboardingForm() {
  const { user } = useUser();
  const router = useRouter();

  const [state, action, isPending] = useActionState(
    completeOnboardingAction,
    initialState
  );

  if (state.success) {
    user?.reload().then(() => router.push("/dashboard"));
  }

  return (
    <Card className="mx-auto w-full max-w-lg">
      <CardHeader>
        <CardTitle>Complete Your Profile</CardTitle>
        <CardDescription>Please enter your pseudo below.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action} autoComplete="on">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="pseudo">Pseudo</Label>
              <Input
                id="pseudo"
                name="pseudo"
                placeholder="Enter your pseudo"
                defaultValue={user?.firstName || ""}
                aria-describedby="pseudo-error"
                className={state?.errors?.pseudo ? "border-red-500" : ""}
              />
              {state?.errors?.pseudo && (
                <p id="pseudo-error" className="text-sm text-red-500">
                  {state?.errors?.pseudo[0]}
                </p>
              )}
            </div>

            {state?.message && (
              <Alert variant={state.success ? "default" : "destructive"}>
                {state.success ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <XCircle className="h-4 w-4" />
                )}
                <AlertTitle>{state.success ? "Yesss" : "Ouuupss"}</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isPending}>
              <Ticket /> {isPending ? "Saving..." : "Complete Onboarding"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
