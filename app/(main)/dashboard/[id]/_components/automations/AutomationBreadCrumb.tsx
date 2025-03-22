import { ChevronRightIcon, PencilIcon } from "lucide-react";
import ActivateAutomationBtn from "./ActivateAutomationBtn";

type Props = {
  id: string;
};

const AutomationBreadCrumb = ({ id }: Props) => {
  return (
    <div className="bg-secondary/15 flex w-full items-center justify-between gap-4 overflow-hidden rounded-full p-3 sm:p-4">
      <div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden">
        <p className="text-muted-foreground truncate text-sm">Automations</p>
        <ChevronRightIcon className="text-muted-foreground h-4 w-4 shrink-0" />
        <div className="flex min-w-0 items-center gap-2 overflow-hidden">
          <p className="text-muted-foreground truncate text-sm">
            This is the automation title
          </p>
          <button className="text-muted-foreground hover:text-foreground shrink-0 cursor-pointer transition-colors">
            <PencilIcon size={14} />
          </button>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3 sm:gap-4">
        <p className="text-secondary-foreground hidden truncate text-sm sm:block">
          Changes saved
        </p>
        <ActivateAutomationBtn />
      </div>
    </div>
  );
};

export default AutomationBreadCrumb;
