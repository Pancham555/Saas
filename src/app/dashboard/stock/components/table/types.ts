export type Payment = {
  id?: string;
  public_id?: number;
  name?: string;
  price?: number | string;
  quantity?: number;
  total?: number;
  createdAt?: string;
  updatedAt?: string;
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    name: "Abraham Lincoln",
    price: 100,
    createdAt: "string",
    updatedAt: "string",
  },
  {
    id: "698ed52f",
    name: "Jonny Depp",
    price: 100,
    createdAt: "string",
    updatedAt: "string",
  },
];
