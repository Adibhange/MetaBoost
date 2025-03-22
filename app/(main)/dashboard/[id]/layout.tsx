import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./_components/sidebar/AppSidebar";
import Infobar from "./_components/Infobar";
import MainBreadCrumb from "./_components/MainBreadCrumb";

type Props = {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
};

const Layout = async ({ children, params }: Props) => {
  const resolvedParams = await params;

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <div className="hidden md:block">
          <AppSidebar id={resolvedParams.id} />
        </div>

        <div className="flex-1 overflow-auto p-2 sm:p-4">
          <header className="bg-background sticky top-0 z-10">
            <div className="flex items-center justify-between gap-2 py-2 pr-2 sm:gap-4 sm:pr-4">
              <div className="block shrink-0 pt-2 md:hidden">
                <SidebarTrigger />
              </div>

              <Infobar id={resolvedParams.id} />
            </div>
          </header>

          <MainBreadCrumb id={resolvedParams.id} />

          <main className="mt-4">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
