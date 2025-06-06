import { Search } from "lucide-react";
import { Clapperboard } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";
import Link from "next/link";
import { SearchInput } from "./SearchInput";
import { HeaderGenre } from "./HeaderGenre";

export const Header = () => {
  return (
    <div className="md:pt-6 p-4 pl-3 pr-3 flex gap-3 justify-between">
      <div className="flex gap-1.5 p-6">
        <Clapperboard />
        <Link href={`/`}>Movie Z</Link>
      </div>
      <div className="flex md:gap-2 pt-4">
        <div className="hidden md:flex">
          <HeaderGenre />
        </div>
        <div className="w-[397px] h-[36px] rounded-lg border-1 hidden md:flex">
          <SearchInput />
        </div>
        <Link href={`search/searchHomePage`}>
          <button className="w-[36px] h-[36px] rounded-md border-1 ">
            <Search className="pl-2" />
          </button>
        </Link>
      </div>
      <div className="h-[50px] w-[80px] gap-6 flex pt-4.5 ">
        <div className="w-[36px] h-[36px] rounded-md border-1 pt-1  pl-1">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};
