"use client";

import { Button } from "@/components/ui/button";

type Props = {};

const PaymentButton = (props: Props) => {
  return (
    <Button className="text-foreground rounded-full bg-gradient-to-br from-sky-600 via-cyan-600 to-blue-500 font-bold">
      Upgrade
    </Button>
  );
};

export default PaymentButton;
