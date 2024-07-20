import { change } from "@/app/redux_slices/inventoryDelete";
import { RootState } from "@/app/store";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ItemDropdown({ id }: { id: string }) {
  const user = useSelector((state: RootState) => state.reducer);
  // const inventoryDeleteId = useSelector(
  //   (state: RootState) => state.inventoryDelete.value
  // );
  const dispatch = useDispatch();
  const { toast } = useToast();

  const deleteItem = async () => {
    dispatch(change({ value: id }));
    try {
      const data = await axios.post("/api/inventory/delete", {
        userId: user.id,
        inventoryId: id,
      });
      if (data.status === 200) {
        toast({
          title: "Item Deleted",
        });
      }

      dispatch(change({ value: "" }));
    } catch (error) {
      console.log(error);
    }
  };
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
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(id)}>
          Copy payment ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {/* <DropdownMenuItem>View customer</DropdownMenuItem>
        <DropdownMenuItem>View payment details</DropdownMenuItem> */}
        <DropdownMenuItem onClick={() => deleteItem()}>
          Delete payment details
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
