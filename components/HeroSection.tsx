import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 flex flex-col items-center space-y-4 text-center">
          <h1 className="max-w-3xl text-3xl font-bold tracking-tighter md:max-w-screen md:text-6xl lg:text-7xl">
            Engage Your Audience{" "}
            <span className="text-brand">Effortlessly</span> with MetaBoost
          </h1>
          <p className="text-muted-foreground max-w-[800px] md:text-xl">
            Leverage our AI-powered automation to drive meaningful engagement
            and achieve unprecedented growth for your Instagram presence. Boost
            your reach and impact with intelligent interactions.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link href={"/dashboard"}>
              <Button className="bg-brand hover:bg-brand-dark text-white">
                Get Started
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-brand text-brand hover:bg-brand/10"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div>
          <Image
            src={"/Banner.jpeg"}
            alt="banner"
            width={1280}
            height={720}
            className="mx-auto rounded-lg border shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
