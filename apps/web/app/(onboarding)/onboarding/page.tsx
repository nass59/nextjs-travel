import OnboardingForm from "@/features/onboarding/components/OnboardingForm";

export default function OnboardingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-lg bg-slate-100 p-5 lg:flex-row">
        <div className="container max-w-lg space-y-6 py-10">
          <h1 className="text-center text-3xl font-bold">
            Welcome to Travelly!
          </h1>
          <p className="text-muted-foreground text-balance text-center">
            We&apos;re excited to have you on board. Let&lsquo;s get your
            profile set up.
          </p>
        </div>
        <OnboardingForm />
      </div>
    </main>
  );
}
