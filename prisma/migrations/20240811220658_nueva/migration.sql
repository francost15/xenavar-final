/*
  Warnings:

  - You are about to drop the column `size` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `sizes` on the `Product` table. All the data in the column will be lost.
  - Added the required column `flavor` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marca` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Flavors" AS ENUM ('Chocolate', 'Fresa', 'Vainilla', 'StrawBerry', 'Mango', 'Mazapan', 'Coco', 'BlueBerry', 'Churro');

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "size",
ADD COLUMN     "flavor" "Flavors" NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "sizes",
ADD COLUMN     "flavors" "Flavors"[] DEFAULT ARRAY[]::"Flavors"[],
ADD COLUMN     "marca" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Size";
