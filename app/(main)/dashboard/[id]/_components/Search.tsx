import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="flex flex-1 items-center gap-2 overflow-hidden rounded-full border-[1px] border-sky-500 px-4 py-1">
      <SearchIcon color="#0ea5e9" />
      <Input
        placeholder="Search by name,email or status"
        className="!focus:ring-0 flex-1 !border-none !bg-transparent !ring-0 !outline-none"
      />
    </div>
  );
};

export default Search;
