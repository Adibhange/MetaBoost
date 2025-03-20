import { Button } from "@/components/ui/button";
import { plans } from "@/data/plan";
import { cn } from "@/lib/utils";
import { CircleCheckIcon } from "lucide-react";

type Props = {
  label: string;
  current: "FREE" | "BASIC" | "PRO";
  landing?: boolean;
};

const PaymentCard = ({ label, current, landing }: Props) => {
  const isCurrentPlan = label === current;
  const isUpgrade = current === "FREE" || current === "BASIC";

  return (
    <div
      className={cn(
        "flex flex-grow overflow-hidden rounded-xl p-[2px]",
        !isCurrentPlan
          ? "bg-secondary border-secondary border"
          : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
      )}
    >
      <div
        className={cn(
          "bg-background/90 flex w-full flex-col rounded-xl px-5 py-5",
          landing && "radial--gradient--pink",
        )}
      >
        {landing ? (
          <h2 className="text-2xl">
            {label === "FREE"
              ? "Free Plan"
              : label === "BASIC"
                ? "Basic Plan"
                : "PRO Plan"}
          </h2>
        ) : (
          <h2 className="text-2xl">
            {isCurrentPlan
              ? "Your Current Plan"
              : isUpgrade
                ? "Upgrade to PRO"
                : "Downgrade to Basic"}
          </h2>
        )}

        <p className="text-muted-foreground mb-2 text-sm">
          {isCurrentPlan
            ? "Here's everything included in your current plan"
            : "Upgrade to unlock more features"}
        </p>

        <span className="text-2xl">
          {label === "BASIC" ? (
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Basic AI
            </span>
          ) : label === "PRO" ? (
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Pro AI
            </span>
          ) : (
            <span className="text-muted-foreground mt-2">Standard</span>
          )}
        </span>

        <p className="mb-2">
          {label === "BASIC" ? (
            <b className="text-xl">$19</b>
          ) : label === "PRO" ? (
            <b className="text-xl">$49</b>
          ) : (
            <span className="text-xl">Free</span>
          )}
          /month
        </p>

        <div className="mt-4 flex flex-1 flex-col gap-2">
          {plans[label === "BASIC" ? 1 : label === "PRO" ? 2 : 0].features.map(
            (feat) => (
              <p
                key={feat}
                className="text-muted-foreground flex items-center gap-2"
              >
                <CircleCheckIcon className="size-5 text-sky-500" />
                {feat}
              </p>
            ),
          )}
        </div>

        <Button
          className={cn(
            "text-foreground mt-5 w-full rounded-full py-2",
            isCurrentPlan
              ? "bg-muted cursor-not-allowed"
              : label === "PRO"
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                : "bg-blue-500 hover:bg-blue-600",
          )}
          disabled={isCurrentPlan}
        >
          {isCurrentPlan ? "Active Plan" : isUpgrade ? "Upgrade" : "Downgrade"}
        </Button>
      </div>
    </div>
  );
};

export default PaymentCard;
