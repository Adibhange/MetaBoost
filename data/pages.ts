import {
  BotIcon,
  HomeIcon,
  Link2Icon,
  LucideIcon,
  SettingsIcon,
} from "lucide-react";

export const PAGE_BREAD_CRUMB: string[] = [
  "automations",
  "integrations",
  "settings",
];

type Props = {
  [page in string]: LucideIcon;
};

export const PAGE_ICON: Props = {
  HOME: HomeIcon,
  AUTOMATIONS: BotIcon,
  INTEGRATIONS: Link2Icon,
  SETTINGS: SettingsIcon,
};
