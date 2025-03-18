import Link from "next/link";
import { Button } from "./ui/button";
import { RocketIcon } from "lucide-react";

const CTA = () => {
  return (
    <section className="w-full">
      <div className="gradient mx-auto rounded-lg py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-primary-foreground text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Supercharge Your Instagram Engagement!
          </h2>
          <p className="text-primary-foreground/80 mx-auto max-w-[600px] md:text-xl">
            Automate responses, boost interactions, and grow your audience
            effortlessly with AI-powered automation.
          </p>
          <Link href="/dashboard" passHref className="group">
            <Button
              size="lg"
              variant="secondary"
              className="mt-5 h-11 animate-bounce"
            >
              Get Started Now
              <RocketIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
