export type Payment = {
  id?: string;
  public_id?: number;
  name?: string;
  email?: string;
  quantity?: number;
  total?: number;
  amount?: number | string;
  payment_status?: "paid" | "unpaid";
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    name: "Abraham Lincoln",
    email: "m@example.com",
    amount: 100,
    payment_status: "paid",
  },
  {
    id: "698ed52f",
    name: "Jonny Depp",
    email: "g@example.com",
    amount: 100,
    payment_status: "unpaid",
  },
];
