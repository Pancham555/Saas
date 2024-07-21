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
import { UserContext } from "@/context/userCredentials";
import axios from "axios";
import { MoreHorizontal } from "lucide-react";
import React, { useContext } from "react";

export default function ItemDropdown({ id }: { id: string }) {
  const { userCredentials, setUserCredentials } = useContext(UserContext);
  // const inventoryDeleteId = useSelector(
  //   (state: RootState) => state.inventoryDelete.value
  // );
  const { toast } = useToast();

  const deleteItem = async () => {
    try {
      const data = await axios.post("/api/inventory/delete", {
        userId: userCredentials.id,
        inventoryId: id,
      });
      if (data.status === 200) {
        toast({
          title: "Item Deleted",
        });
      }
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
