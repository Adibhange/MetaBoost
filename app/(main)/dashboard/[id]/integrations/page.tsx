import { INTEGRATION_CARDS } from "@/data/integrations";
import IntegrationCard from "../_components/integrations/IntegrationCard";

type Props = {};

const IntegrationsPage = (props: Props) => {
  return (
    <div className="flex justify-center">
      <div className="flex w-full flex-col gap-y-5 lg:w-8/12">
        {INTEGRATION_CARDS.map((card, index) => (
          <IntegrationCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default IntegrationsPage;
