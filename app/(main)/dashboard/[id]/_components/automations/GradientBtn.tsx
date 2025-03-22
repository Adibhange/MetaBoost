import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  type: "BUTTON" | "LINK";
  href?: string;
  className?: string;
};

const GradientBtn = ({ children, type, href, className }: Props) => {
  const gradients =
    "rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px]";

  switch (type) {
    case "BUTTON":
      return (
        <div className={gradients}>
          <Button variant="secondary" className={cn(className, "rounded-xl")}>
            {children}
          </Button>
        </div>
      );

    case "LINK":
      return (
        <div className={gradients}>
          <Link href={href!} className={cn(className, "rounded-xl")}>
            {children}
          </Link>
        </div>
      );

    default:
      return null;
  }
  return <div>GradientBtn</div>;
};

export default GradientBtn;
