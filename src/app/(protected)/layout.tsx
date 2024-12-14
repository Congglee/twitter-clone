import Aside from "@/components/aside";
import Sidebar from "@/components/sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full justify-center gap-0 lg:gap-4">
      <Sidebar />
      {children}
    </div>
  );
}
