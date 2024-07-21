"use client";
import { Button } from "@/components/ui/button";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Payment } from "./components/table/types";
import TableComponent from "./components/table";
import NoDataFound from "./components/noDataFound";
import ItemForm from "./components/itemForm";
import PaginationButtons from "./components/paginationButtons";
import PageSize from "./components/pageSize";
import axios from "axios";
import { UserContext, UserCredentialsProps } from "@/context/userCredentials";

interface PaginationProps {
  skip: number;
  take: number;
}
export default function Stock() {
  const [dialogTrigger, setDialogTrigger] = useState(false);
  const [item, setItem] = useState<Payment | undefined>();
  const [update, setUpdate] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [items, setItems] = useState<Payment[]>([]);
  const pageSize = 3;
  const [dataPresent, setDataPresent] = useState<boolean>(false);
  const [paginationNums, setPaginationNums] = useState<PaginationProps>({
    skip: 0,
    take: pageSize,
  });
  const [highlightButtons, setHighLightButtons] = useState({
    prev: true,
    next: false,
  });

  const [docCount, setDocCount] = useState(0);
  const [sum, setSum] = useState(0);

  const { userCredentials }: { userCredentials: UserCredentialsProps } =
    useContext(UserContext);

  const { toast } = useToast();
  const getInitialData = useCallback(async () => {
    try {
      const data = await axios.get(
        `/api/stock?userId=${userCredentials.id}&skip=${paginationNums?.skip}&take=${pageSize}`
      );

      setItems(data.data.data.data);
      setDocCount(data.data.data.count);
      setSum(data.data.data.total);
    } catch (error) {
      console.log(error);
    }
  }, [userCredentials, paginationNums, pageSize]);

  const AddData = async () => {
    setDialogTrigger(false);
    try {
      const data = await axios.post(
        "/api/stock",
        {
          ...item,
          userId: userCredentials.id,
        },
        { withCredentials: true }
      );
      if (data.status === 200) {
        toast({
          title: "Item has been added",
        });
      }
      setItem({
        name: "",
        price: undefined,
        quantity: undefined,
        createdAt: undefined,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async ({ id }: { id: string }) => {
    try {
      await axios.post("/api/stock/delete", {
        userId: userCredentials.id,
        stockId: id,
      });

      setItems([...items]);
      toast({
        title: "Item is deleted",
      });
      getInitialData();
    } catch (error) {
      console.log(error);
    }
  };

  const updateItem = async () => {
    setDialogTrigger(false);
    try {
      await axios.put("/api/stock", {
        id: userCredentials.id,
        stockId: updateId,
        ...item,
      });
      toast({ title: "Item has been updated" });
    } catch (error) {
      console.log(error);
    }
    setUpdate(false);
    setItem({
      name: "",
      price: undefined,
      quantity: undefined,
    });
  };

  useEffect(() => {
    if (userCredentials) {
      getInitialData();
    }
    // paginationNums.skip === 0
    if (paginationNums.skip === 0) {
      setHighLightButtons({
        next: false,
        prev: true,
      });
    } else if (
      // @ts-ignore
      paginationNums.skip >=
      docCount - pageSize
    ) {
      setHighLightButtons({
        next: true,
        prev: false,
      });
    }

    // @ts-ignore
    else if (paginationNums.skip < docCount && paginationNums.skip !== 0) {
      setHighLightButtons({
        next: false,
        prev: false,
      });
    } else {
      setHighLightButtons({
        next: false,
        prev: true,
      });
    }

    if (items.length > 0) {
      setDataPresent(true);
    }
  }, [item, paginationNums, docCount, pageSize, sum, userCredentials]);
  return (
    <>
      <ItemForm
        AddData={AddData}
        updateItem={updateItem}
        // @ts-ignore
        item={item}
        update={update}
        dialogTrigger={dialogTrigger}
        setDialogTrigger={setDialogTrigger}
        setItem={setItem}
      />
      <main className="flex flex-1 flex-col gap-4 p-14 m-5 lg:gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold md:text-2xl">Stock</h1>
          {items.length === 0 ? null : (
            <Button onClick={() => setDialogTrigger(true)}>Add item</Button>
          )}
        </div>
        {!dataPresent ? (
          <NoDataFound onAdd={() => setDialogTrigger(true)} />
        ) : (
          <>
            <PageSize />
            <TableComponent
              deleteItem={deleteItem}
              updateItem={({ id }: { id: string }) => {
                setUpdate(true);
                setDialogTrigger(true);
                const filterItem = items.filter(
                  (listOfItems) => listOfItems.id === id
                )[0];
                setItem({
                  name: filterItem.name,
                  price: filterItem.price,
                  quantity: filterItem.quantity,
                });
                setUpdateId(id);
              }}
              // @ts-ignore
              items={items}
              sum={sum}
            />
            <PaginationButtons
              highlightButtons={highlightButtons}
              paginationNums={paginationNums}
              setPaginationNums={setPaginationNums}
              docCount={docCount}
              pageSize={pageSize}
            />
          </>
        )}
      </main>
    </>
  );
}
