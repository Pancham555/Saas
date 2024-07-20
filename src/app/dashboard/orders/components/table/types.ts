export type Payment = {
  id?: string;
  public_id?: number;
  name?: string;
  email?: string;
  total?: number;
  amount?: number | string;
  payment_status?: "paid" | "unpaid";
  items: [];
  createdAt?: string;
  updatedAt?: string;
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    name: "Abraham Lincoln",
    email: "m@example.com",
    amount: 100,
    payment_status: "paid",
    items: [],
    createdAt: "string",
    updatedAt: "string",
  },
  {
    id: "698ed52f",
    name: "Jonny Depp",
    email: "g@example.com",
    amount: 100,
    payment_status: "unpaid",
    items: [],
    createdAt: "string",
    updatedAt: "string",
  },
];
