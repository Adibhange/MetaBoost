"use client";

import { Separator } from "@/components/ui/separator";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { SignInButton, UserButton } from "@clerk/nextjs";
import {
  BadgeHelpIcon,
  BotIcon,
  HomeIcon,
  Link2Icon,
  SettingsIcon,
} from "lucide-react";
import Link from "next/link";

const items = [
  {
    label: "home",
    icon: HomeIcon,
  },
  {
    label: "automations",
    icon: BotIcon,
  },
  {
    label: "integrations",
    icon: Link2Icon,
  },
  {
    label: "settings",
    icon: SettingsIcon,
  },
];

type props = {
  page: string;
  id: string;
};

const AsideItems = ({ page, id }: props) => {
  const { setOpenMobile } = useSidebar();
  return (
    <SidebarGroup className="flex flex-col gap-y-6">
      <SidebarMenu className="flex flex-col gap-y-2">
        {items.map((item) => (
          <SidebarMenuItem key={item.label}>
            <SidebarMenuButton asChild tooltip={item.label}>
              <Link
                href={`/dashboard/${id}/${item.label === "home" ? "/" : item.label}`}
                onClick={() => setOpenMobile?.(false)}
                aria-label={item.label}
                className={`flex gap-x-4 !text-lg capitalize ${page === id && item.label === "home" ? "text-sidebar-foreground" : "text-sidebar-foreground/60"}`}
              >
                <item.icon className="!size-6" />
                {item.label}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
      <Separator />

      <SidebarMenu className="flex flex-col gap-y-4">
        <SidebarMenuItem className="flex gap-x-2 px-2">
          <SignInButton>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "!size-8",
                },
              }}
            />
          </SignInButton>
          <SidebarGroupLabel className="text-lg">Profile</SidebarGroupLabel>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default AsideItems;
