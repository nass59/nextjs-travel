export {};

export type Role = "admin" | "user" | "moderator";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      onboardingComplete?: boolean;
      role?: Role;
    };
  }
}
