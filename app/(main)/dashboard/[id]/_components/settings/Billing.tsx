import PaymentCard from "./PaymentCard";

const Billing = () => {
  return (
    <div className="container flex w-full flex-col gap-y-5 lg:flex-row lg:gap-4 2xl:w-8/12">
      <PaymentCard current="FREE" label="FREE" />
      <PaymentCard current="FREE" label="PRO" />
    </div>
  );
};

export default Billing;
