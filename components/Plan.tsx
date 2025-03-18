import { PlanInterface, plans } from "@/data/plan";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { CheckIcon } from "lucide-react";

const Plan = () => {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Find the Perfect Plan for Your Growth
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl text-lg">
            Unlock the power of automation and take your engagement to the next
            level with a plan tailored to your needs.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plan;

function PricingCard({ plan }: { plan: PlanInterface }) {
  return (
    <Card className="relative overflow-hidden rounded-xl border bg-gray-900/50 transition-transform duration-300 hover:translate-y-[-8px]">
      {plan.isPopular && (
        <div className="bg-brand absolute top-0 right-0 rounded-bl-lg px-3 py-1 text-xs font-bold uppercase">
          Popular
        </div>
      )}

      <CardHeader className="space-y-0 p-8 pb-0">
        <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
        <div className="mb-6 flex items-end gap-1">
          <span className="text-4xl font-bold">${plan.price}</span>
          <span className="text-muted-foreground mb-1">{plan.period}</span>
        </div>
        <p className="text-muted-foreground mb-6">{plan.description}</p>
        <Button
          variant={plan.buttonVariant}
          className={`w-full rounded-lg ${plan.buttonVariant === "default" ? "bg-brand hover:bg-brand-dark" : ""}`}
        >
          {plan.buttonText}
        </Button>
      </CardHeader>

      <CardContent className="mt-8 border-t p-8">
        <ul className="space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckIcon className="text-brand mt-0.5 h-5 w-5 shrink-0" />
              <span className="text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
