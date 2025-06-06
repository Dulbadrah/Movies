import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { AllGenres } from "./Allgenres";

export const HeaderGenre = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Genre</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-50 mt-2 p-0">
          <div className="flex flex-col gap-4 rounded-md p-6 border bg-gray-100 dark:bg-black">
            <p className="text-[24px] font-black">Genres</p>
            <p className="text-[16px]">See lists of movies by genre</p>
            <AllGenres />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
