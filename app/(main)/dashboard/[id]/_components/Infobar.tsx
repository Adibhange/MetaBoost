"use client";

import { PAGE_BREAD_CRUMB } from "@/data/pages";
import { usePath } from "@/hooks/use-path";
import CreateAutomation from "./CreateAutomation";
import Search from "./Search";

type Props = {
  id: string;
};

const Infobar = ({ id }: Props) => {
  const { page } = usePath();
  if (!PAGE_BREAD_CRUMB.includes(page) && page !== id) return null;

  return (
    <div className="flex w-full items-center justify-end gap-4">
      <Search />
      <CreateAutomation />
    </div>
  );
};

export default Infobar;
