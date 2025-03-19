import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./_components/sidebar/AppSidebar";

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

        <div>
          <header>
            <nav className="flex items-center justify-between py-2 pr-4">
              <div className="block md:hidden">
                <SidebarTrigger />
              </div>
            </nav>
          </header>

          <main>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
