export type Payment = {
  id?: string;
  public_id?: number;
  name?: string;
  price?: number;
  quantity?: number;
  total?: number;
  payment_status?: "paid" | "unpaid";
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    name: "Abraham Lincoln",
    price: 100,
    payment_status: "paid",
  },
  {
    id: "698ed52f",
    name: "Jonny Depp",
    price: 100,
    payment_status: "unpaid",
  },
];
