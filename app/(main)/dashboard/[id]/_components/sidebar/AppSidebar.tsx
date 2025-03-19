"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { usePath } from "@/hooks/use-path";
import Image from "next/image";
import AsideItems from "./AsideItems";
import SubscriptionPlan from "./SubscriptionPlan";
import UpgradeCard from "./UpgradeCard";

type Props = {
  id: string;
};

const AppSidebar = ({ id }: Props) => {
  const { page } = usePath();
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader className="mb-6 flex-row items-center border-b-2">
        <Image
          src={"/Logo.png"}
          height={100}
          width={1000}
          alt="MetaBoost Logo"
          className="h-14 w-56"
        />
      </SidebarHeader>

      <SidebarContent>
        <AsideItems page={page} id={id} />
      </SidebarContent>

      <SidebarFooter>
        <SubscriptionPlan type="FREE">
          <UpgradeCard />
        </SubscriptionPlan>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
