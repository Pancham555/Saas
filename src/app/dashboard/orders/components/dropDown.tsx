"use client";
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
import { useRouter } from "next/navigation";

export default function DropDown({
  id,
  deleteItem,
  updateItem,
}: {
  id?: string;
  deleteItem?: Function;
  updateItem?: Function;
}) {
  const router = useRouter();
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
        <DropdownMenuItem
          onClick={() => router.push(`/dashboard/orders/${id}`)}
        >
          View payment details
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => (updateItem ? updateItem() : null)}>
          Update payment details
        </DropdownMenuItem>
        {/* <DropdownMenuItem>View customer</DropdownMenuItem> */}
        <DropdownMenuItem onClick={() => (deleteItem ? deleteItem() : null)}>
          Delete payment details
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
