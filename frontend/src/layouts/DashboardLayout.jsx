import Sidebar from "../components/layout/Sidebar";
import BottomNav from "../components/layout/BottomNav";
import TopNavbar from "../components/layout/TopNavbar";

function DashboardLayout({ children }) {
  return (
    <div
      className="
      min-h-screen
      bg-slate-950
      text-white
      flex
      "
    >

      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="flex-1 lg:ml-72">

        <TopNavbar />

        <main
          className="
          pb-28
          lg:pb-0
          "
        >
          {children}
        </main>

      </div>

      <div
        className="
        lg:hidden
        fixed
        bottom-0
        w-full
        "
      >
        <BottomNav />
      </div>

    </div>
  );
}

export default DashboardLayout;