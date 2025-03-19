"use client";

import PaymentButton from "./PaymentButton";

type Props = {};

const UpgradeCard = (props: Props) => {
  return (
    <div className="bg-sidebar-accent flex flex-col gap-3 rounded-2xl p-3">
      <span>Upgrade to Basic or Pro</span>
      <p className="text-muted-foreground font-light text-sm">
        Unlock all features including AI and more
      </p>

      <PaymentButton/>
    </div>
  );
};

export default UpgradeCard;
