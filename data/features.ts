import {
  BarChart2Icon,
  LucideIcon,
  MessageCircleIcon,
  UnlockIcon,
  ZapIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: MessageCircleIcon,
    title: "AI-Driven Responses for Instant Engagement",
    description:
      "Smart replies that understand context to drive meaningful conversations.",
  },
  {
    icon: ZapIcon,
    title: "Seamless Integration for Effortless Interaction",
    description: "Fully automated responses that feel personal and authentic.",
  },
  {
    icon: BarChart2Icon,
    title: "Seamless Interaction Across Your Content",
    description: "Engage with comments across all your posts automatically.",
  },
  {
    icon: UnlockIcon,
    title: "Unlock New Opportunities with MetaBoost",
    description: "Discover potential collaborations and grow your network.",
  },
];

export type { Feature };
