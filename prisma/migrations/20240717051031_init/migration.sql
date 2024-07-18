/*
  Warnings:

  - Added the required column `total` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stock" ADD COLUMN     "public_id" SERIAL NOT NULL,
ADD COLUMN     "total" INTEGER NOT NULL;
