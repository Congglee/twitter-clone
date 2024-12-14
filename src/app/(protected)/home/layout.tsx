import Aside from "@/components/aside";
import AsideTrends from "@/components/aside-trends";
import Suggestions from "@/components/suggestions";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Aside>
        <AsideTrends />
        <Suggestions />
      </Aside>
    </>
  );
}
