-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_stockId_fkey";

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "total" DROP NOT NULL;

-- AlterTable
ALTER TABLE "OrderItem" ALTER COLUMN "stockId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE SET NULL ON UPDATE CASCADE;
