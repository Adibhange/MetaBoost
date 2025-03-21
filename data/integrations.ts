import { ActivityIcon, LucideIcon } from "lucide-react";

type IntegrationProps = {
  title: string;
  icon: LucideIcon;
  description: string;
  strategy: "INSTAGRAM" | "FACEBOOK";
};

export const INTEGRATION_CARDS: IntegrationProps[] = [
  {
    title: "Connect Instagram",
    description: "Sync your Instagram data for better insights.",
    icon: ActivityIcon,
    strategy: "INSTAGRAM",
  },
];
