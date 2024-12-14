export default function SearchBarAutoComplete() {
  return (
    <div
      className="absolute inset-x-0 top-full mt-1 rounded-lg bg-background
      shadow-[rgba(101,119,_134,_0.2)_0px_0px_15px,_rgba(101,_119,_134,_0.15)_0px_0px_3px_-1px] dark:shadow-[rgba(255,_255,_255,_0.2)_0px_0px_15px,_rgba(255,_255,_255,_0.15)_0px_0px_3px_-1px]"
    >
      <div className="h-28 max-h-[calc(85vh-80px)] overflow-y-auto">
        <div className="pt-5 px-3 py-3 text-[15px] text-center text-tw-secondary">
          Try searching for people, lists, or keywords
        </div>
      </div>
    </div>
  );
}
