export interface PlanInterface {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  buttonText: string;
  buttonVariant: "default" | "outline";
  isPopular?: boolean;
  features: string[];
}

export const plans: PlanInterface[] = [
  {
    id: "free",
    name: "FREE",
    price: 0,
    period: "/month",
    description: "Perfect for individuals just getting started.",
    buttonText: "Get Started",
    buttonVariant: "outline",
    features: [
      "Engage with your audience using smart automated replies",
      "Effortlessly respond to comments and enhance interactions",
      "Drive conversations that convert followers into loyal customers",
    ],
  },
  {
    id: "basic",
    name: "BASIC",
    price: 19,
    period: "/month",
    description: "Great for professionals and small businesses.",
    buttonText: "Get Started",
    buttonVariant: "default",
    isPopular: true,
    features: [
      "Includes all Free plan features",
      "AI-powered automated replies for comments",
      "Essential analytics to track engagement trends",
      "Priority support for quick issue resolution",
      "Custom branding options for a personalized experience",
    ],
  },
  {
    id: "pro",
    name: "PRO",
    price: 49,
    period: "/month",
    description: "For enterprises and power users with advanced needs.",
    buttonText: "Get Started",
    buttonVariant: "outline",
    features: [
      "Includes all Basic plan features",
      "AI-driven automation for both comments and direct messages",
      "Smart triggers to engage users based on actions",
      "Advanced audience insights and reporting",
      "Exclusive customer success manager for premium support",
    ],
  },
];
