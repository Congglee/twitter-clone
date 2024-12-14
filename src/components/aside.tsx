import AsideFooter from "@/components/aside-footer";
import SearchBar from "@/components/search-bar";

export default function Aside({ children }: { children: React.ReactNode }) {
  return (
    <div className="hidden lg:flex flex-col w-96 gap-4 px-4 py-3 pt-1">
      <SearchBar />
      {children}
      <AsideFooter />
    </div>
  );
}
