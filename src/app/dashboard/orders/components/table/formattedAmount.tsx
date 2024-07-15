import React from "react";

export default function FormattedAmount({
  row,
}: {
  row: {
    getValue: Function;
  };
}) {
  const amount = parseFloat(row.getValue("amount"));
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

  return <div className="text-right font-medium">{formatted}</div>;
}

export function AmountTitle() {
  return <div className="text-right">Amount</div>;
}
