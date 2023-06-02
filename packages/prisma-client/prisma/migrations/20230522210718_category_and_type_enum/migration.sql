/*
  Warnings:

  - You are about to alter the column `category` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - You are about to alter the column `type` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `Product` MODIFY `category` ENUM('ANTIBIOTIC', 'ANTIVIRAL', 'ANTIFUNGAL', 'ANTIPARASITIC', 'ANTIPYRETIC', 'ANALGESIC', 'ANESTHETIC', 'ANTISEPTIC', 'DISINFECTANT', 'ANTACID', 'LAXATIVE', 'DIURETIC', 'HORMONE', 'VITAMIN', 'MINERAL', 'NUTRITIONAL_SUPPLEMENT', 'OTHER') NOT NULL,
    MODIFY `type` ENUM('MEDICINE', 'COSMETIC', 'FOOD', 'OTHER') NOT NULL;
