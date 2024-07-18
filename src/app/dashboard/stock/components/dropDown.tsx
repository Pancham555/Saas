import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

export default function DropDown({
  id,
  deleteItem,
}: {
  id?: string;
  deleteItem?: Function;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(id ?? "")}
        >
          Copy payment ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {/* <DropdownMenuItem>View customer</DropdownMenuItem>
        <DropdownMenuItem>View payment details</DropdownMenuItem> */}
        <DropdownMenuItem onClick={() => (deleteItem ? deleteItem() : null)}>
          Delete payment details
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
