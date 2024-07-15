import React from "react";

export default function FormattedPrice({
  row,
}: {
  row: {
    getValue: Function;
  };
}) {
  const price = parseFloat(row.getValue("price"));
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return <div className="text-right font-medium">{formatted}</div>;
}

export function PriceTitle() {
  return <div className="text-right">Price</div>;
}
