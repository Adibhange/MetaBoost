import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  icon: LucideIcon;
  description: string;
  strategy: "INSTAGRAM" | "FACEBOOK";
};

const IntegrationCard = ({
  title,
  icon: Icon,
  description,
  strategy,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-5 rounded-2xl border-2 border-sky-500 p-5">
      <Icon />
      <div className="flex flex-1 flex-col">
        <h3 className="text-xl">{title}</h3>
        <p className="text-muted-foreground w-full text-base md:w-10/12 xl:w-8/12 2xl:w-6/12">
          {description}
        </p>
      </div>
      <Button className="text-foreground rounded-full bg-gradient-to-r from-sky-600 to-blue-800 text-lg">
        Connect
      </Button>
    </div>
  );
};

export default IntegrationCard;
