import AutomationBreadCrumb from "../../_components/automations/AutomationBreadCrumb";

type Props = {
  params: Promise<{ automationId: string }>;
};

const AutomationDetailPage = async ({ params }: Props) => {
  const resolvedParams = await params;

  return (
    <div className="flex w-full flex-col items-center gap-y-20">
      <AutomationBreadCrumb id={resolvedParams.automationId} />
    </div>
  );
};

export default AutomationDetailPage;
