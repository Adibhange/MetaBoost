"use client";

type Props = {
  type: "FREE" | "BASIC" | "PRO";
  children: React.ReactNode;
};

const SubscriptionPlan = ({ type, children }: Props) => {
  return children;
};

export default SubscriptionPlan;
