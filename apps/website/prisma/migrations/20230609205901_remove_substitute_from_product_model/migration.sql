/*
  Warnings:

  - You are about to drop the `_ProductSubstitutes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_ProductSubstitutes` DROP FOREIGN KEY `_ProductSubstitutes_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ProductSubstitutes` DROP FOREIGN KEY `_ProductSubstitutes_B_fkey`;

-- DropTable
DROP TABLE `_ProductSubstitutes`;
