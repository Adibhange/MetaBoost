import { CheckCircle2Icon } from "lucide-react";
import CreateAutomation from "../_components/CreateAutomation";
import AutomationList from "../_components/automations/AutomationList";

type Props = {};

const AutomationsPage = (props: Props) => {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-6">
      <div className="lg:col-span-4">
        <AutomationList/>
      </div>
      <div className="lg:col-span-2">
        <div className="bg-secondary flex flex-col gap-6 overflow-hidden rounded-xl border-[1px] p-5">
          <div>
            <h2 className="text-xl">Automations</h2>
            <p className="text-secondary-foreground">
              Your live automations will show here
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start justify-between">
                <div className="flex flex-col">
                  <h3 className="font-medium">
                    Direct traffic towards website
                  </h3>
                  <p className="text-secondary-foreground text-sm">
                    May 3rd 2024
                  </p>
                </div>
                <CheckCircle2Icon />
              </div>
            ))}
          </div>
          <CreateAutomation />
        </div>
      </div>
    </div>
  );
};

export default AutomationsPage;
