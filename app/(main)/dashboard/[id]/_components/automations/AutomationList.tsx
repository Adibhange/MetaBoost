"use client";

import { usePath } from "@/hooks/use-path";
import { cn } from "@/lib/utils";
import Link from "next/link";
import GradientBtn from "./GradientBtn";
import { Button } from "@/components/ui/button";

type Props = {};

const AutomationList = (props: Props) => {
  const { pathName } = usePath();
  return (
    <div className="flex flex-col gap-3">
      <Link
        href={`${pathName}/123`}
        className="bg-secondary radial--gradient--automations flex rounded-xl border-[1px] p-5"
      >
        <div className="flex flex-1 flex-col items-start">
          <h2 className="text-xl font-semibold">Automation Name</h2>
          <p className="text-secondary-foreground mb-2 text-sm font-light">
            This is from the comment
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <div className={cn("rounded-full px-4 py-1 capitalize")}>
              get started
            </div>
          </div>
          <div className="border-muted-foreground mt-3 rounded-full border-2 border-dashed px-3 py-1">
            <p className="text-secondary-foreground text-sm">No Keywords</p>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <p className="text-muted-foreground text-sm font-light capitalize">
            May 3rd, 2024
          </p>
          <GradientBtn type="BUTTON" className="w-full">
            Smart AI
          </GradientBtn>

          <Button variant="outline">Standard</Button>
        </div>
      </Link>
    </div>
  );
};

export default AutomationList;
