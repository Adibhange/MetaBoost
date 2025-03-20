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
      <div className="flex h-screen w-full p-3">
        <div className="hidden md:block">
          <AppSidebar id={resolvedParams.id} />
        </div>

        <div className="flex-1">
          <header>
            <div className="flex items-center justify-between gap-4 py-2 pr-4">
              <div className="block place-self-start pt-2 md:hidden">
                <SidebarTrigger />
              </div>
              <Infobar id={resolvedParams.id} />
            </div>
          </header>
          <MainBreadCrumb id={resolvedParams.id} />

          <main>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
