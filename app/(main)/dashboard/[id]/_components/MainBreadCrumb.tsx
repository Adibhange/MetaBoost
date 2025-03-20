"use client";

import { useMemo } from "react";
import { PAGE_BREAD_CRUMB, PAGE_ICON } from "@/data/pages";
import { usePath } from "@/hooks/use-path";

type Props = {
  id?: string;
};

const MainBreadCrumb = ({ id }: Props) => {
  const { page } = usePath();

  const showBreadcrumb = useMemo(
    () => PAGE_BREAD_CRUMB.includes(page) || page === id,
    [page, id],
  );

  if (!showBreadcrumb) return null;

  const currentPage = page === id ? "Home" : page;
  const Icon = PAGE_ICON[currentPage.toUpperCase() as keyof typeof PAGE_ICON];

  return (
    <div className="flex flex-col items-start">
      {currentPage === "Home" && (
        <div className="flex w-full justify-center">
          <div className="radial--gradient flex flex-col items-center py-5 md:w-4/12 lg:py-10">
            <p className="text-lg">Welcome back</p>
            <h2 className="text-4xl font-medium capitalize">{id}!</h2>
          </div>
        </div>
      )}

      <span className="inline-flex items-center space-x-2 py-5 lg:py-10">
        {Icon ? <Icon className="size-8" /> : null}
        <h2 className="text-3xl font-semibold capitalize">{currentPage}</h2>
      </span>
    </div>
  );
};

export default MainBreadCrumb;
