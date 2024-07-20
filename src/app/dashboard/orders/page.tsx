"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Payment } from "./components/table/types";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import TableComponent from "./components/table";
import NoDataFound from "./components/noDataFound";
import ItemForm from "./components/itemForm";
import PaginationButtons from "./components/paginationButtons";
import PageSize from "./components/pageSize";
import axios from "axios";

interface PaginationProps {
  skip: number;
  take: number;
}

const Orders = () => {
  const [dialogTrigger, setDialogTrigger] = useState(false);
  const [item, setItem] = useState<Payment | undefined>({
    payment_status: "paid",
    items: [],
  });
  const [update, setUpdate] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [items, setItems] = useState<Payment[]>([]);
  const [stock, setStock] = useState([]);
  const [sendStockList, setSendStockList] = useState([]);
  const pageSize = 3;
  const [dataPresent, setDataPresent] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.reducer);
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
  const { toast } = useToast();

  const getInitialData = async () => {
    try {
      const data = await axios.get(
        `/api/orders?userId=${user.id}&skip=${paginationNums?.skip}&take=${pageSize}`
      );

      setItems(data.data.data.data);
      setDocCount(data.data.data.count);
      setSum(data.data.data.total);
      setStock(data.data.data.stock);
    } catch (error) {
      console.log(error);
    }
  };

  const AddData = async () => {
    setDialogTrigger(false);
    if (!item?.payment_status) {
      return toast({ title: "Enter your payment status" });
    }
    try {
      const data = await axios.post(
        "/api/orders",
        {
          ...item,
          order_items: sendStockList,
          id: user.id,
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
        email: "",
        amount: undefined,
        payment_status: undefined,
        createdAt: undefined,
        items: [],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async ({ id }: { id: string }) => {
    try {
      await axios.post("/api/orders/delete", {
        userId: user.id,
        orderId: id,
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
      await axios.put("/api/orders", {
        id: user.id,
        orderId: updateId,
        order_items: sendStockList,
        ...item,
      });
      toast({ title: "Item has been updated" });
    } catch (error) {
      console.log(error);
    }
    setUpdate(false);
    setItem({
      name: "",
      email: undefined,
      payment_status: undefined,
      items: [],
    });
  };

  useEffect(() => {
    getInitialData();

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
    }
    if (items.length > 0) {
      setDataPresent(true);
    }
  }, [item, paginationNums, docCount, pageSize, sum, sendStockList, user]);

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
        stock={stock}
        setStock={setStock}
        sendStockList={sendStockList}
        setSendStockList={setSendStockList}
      />
      <main className="flex flex-1 flex-col gap-4 p-14 m-5 lg:gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold md:text-2xl">Orders</h1>
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
                  email: filterItem.email,
                  payment_status: filterItem.payment_status,
                  items: filterItem.items,
                  createdAt: filterItem.createdAt,
                });
                setUpdateId(id);
                setSendStockList(filterItem.items);
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
};

export default Orders;
