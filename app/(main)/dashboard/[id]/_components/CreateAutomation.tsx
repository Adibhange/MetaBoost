import { Button } from "@/components/ui/button";
import { BotIcon } from "lucide-react";

type Props = {};

const CreateAutomation = (props: Props) => {
  return (
    <Button className="text-foreground rounded-full bg-gradient-to-r from-sky-600 to-blue-800 py-6 lg:px-10">
      <BotIcon className="!size-6" />
      <p className="hidden lg:inline">Create Automation</p>
    </Button>
  );
};

export default CreateAutomation;
