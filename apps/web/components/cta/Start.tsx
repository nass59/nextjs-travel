import { Button } from "@repo/design-system/components/ui/button";

export const Start = () => {
  return (
    <section className="bg-[#4ECDC4] py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 font-bold font-display text-4xl">
          Ready to Start Your Journey?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl">
          Join our community of travelers and share your adventures with the
          world. Create unforgettable memories and inspire others along the way.
        </p>
        <Button
          size="lg"
          className="rounded-full bg-[#FF6B6B] text-lg text-white shadow-lg transition-all duration-300 hover:bg-[#FF6B6B]/90 hover:shadow-xl"
        >
          Create Your Travel Journal
        </Button>
      </div>
    </section>
  );
};
