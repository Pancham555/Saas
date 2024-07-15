export type Payment = {
  id?: string;
  name?: string;
  email?: string;
  amount?: number | string;
  status?: "paid" | "unpaid";
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    name: "Abraham Lincoln",
    email: "m@example.com",
    amount: 100,
    status: "paid",
  },
  {
    id: "698ed52f",
    name: "Jonny Depp",
    email: "g@example.com",
    amount: 100,
    status: "unpaid",
  },
];
