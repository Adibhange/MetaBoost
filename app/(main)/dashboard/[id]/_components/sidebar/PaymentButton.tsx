"use client";

import { Button } from "@/components/ui/button";

type Props = {};

const PaymentButton = (props: Props) => {
  return (
    <Button className="text-foreground rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold">
      Upgrade
    </Button>
  );
};

export default PaymentButton;
