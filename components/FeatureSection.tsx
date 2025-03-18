import { Button } from "./ui/button";
import { features } from "@/data/features";
import { Card, CardContent } from "./ui/card";

const FeatureSection = () => {
  return (
    <section className="bg-background w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Transform Your Instagram Engagement Today
            </h2>
            <p className="text-muted-foreground">
              With our AI-powered automation platform, you can easily connect
              with your audience on a deeper level. Our smart algorithms analyze
              your interactions to provide personalized messaging.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/50">
                <CardContent className="flex flex-col gap-2">
                  <feature.icon className="text-brand h-8 w-8" />
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
