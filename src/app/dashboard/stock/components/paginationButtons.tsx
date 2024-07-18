import { Button } from "@/components/ui/button";
import React from "react";

export default function PaginationButtons({
  highlightButtons,
  paginationNums,
  setPaginationNums,
  docCount,
  pageSize,
}: {
  highlightButtons: { prev: boolean; next: boolean };
  paginationNums: { skip: number; take: number };
  setPaginationNums: Function;
  docCount: number;
  pageSize: number;
}) {
  return (
    <div className="flex justify-end gap-5">
      <Button
        variant="outline"
        disabled={highlightButtons.prev}
        onClick={() =>
          setPaginationNums((old: typeof paginationNums) => {
            if (old.skip === 0) {
              //  Something here
              return old;
            } else {
              //  Something here
              return {
                ...paginationNums,
                // @ts-ignore
                skip: paginationNums.skip - pageSize,
              };
            }
          })
        }
      >
        Previous
      </Button>
      <Button
        disabled={highlightButtons.next}
        onClick={() =>
          setPaginationNums((old: typeof paginationNums) => {
            // @ts-ignore
            if (old.skip >= docCount) {
              // Something here
              return old;
            } else {
              // Something here
              return {
                ...paginationNums,
                // @ts-ignore
                skip: paginationNums.skip + pageSize,
              };
            }
          })
        }
      >
        Next
      </Button>
    </div>
  );
}
