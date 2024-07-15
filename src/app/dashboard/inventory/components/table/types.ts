export type Payment = {
  id?: string;
  name?: string;
  price?: number | string;
  status?: "paid" | "unpaid";
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    name: "Abraham Lincoln",
    price: 100,
    status: "paid",
  },
  {
    id: "698ed52f",
    name: "Jonny Depp",
    price: 100,
    status: "unpaid",
  },
];
