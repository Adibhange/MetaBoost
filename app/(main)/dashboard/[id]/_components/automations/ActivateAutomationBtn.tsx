import { Button } from "@/components/ui/button";
import { ActivityIcon } from "lucide-react";

type Props = {};

const ActivateAutomationBtn = (props: Props) => {
  return (
    <Button className="text-foreground ml-4 rounded-full bg-gradient-to-r from-sky-600 to-blue-800 font-medium lg:px-10">
      <ActivityIcon />
      <p className="hidden lg:inline">Activate</p>
    </Button>
  );
};

export default ActivateAutomationBtn;
