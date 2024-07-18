/*
  Warnings:

  - You are about to drop the column `price` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Order` table. All the data in the column will be lost.
  - Added the required column `total` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "price",
DROP COLUMN "quantity",
ADD COLUMN     "public_id" SERIAL NOT NULL,
ADD COLUMN     "total" INTEGER NOT NULL;
