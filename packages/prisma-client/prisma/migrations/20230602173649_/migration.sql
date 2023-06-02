/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_ProductSubstitutes` DROP FOREIGN KEY `_ProductSubstitutes_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ProductSubstitutes` DROP FOREIGN KEY `_ProductSubstitutes_B_fkey`;

-- DropTable
DROP TABLE `Product`;

-- CreateTable
CREATE TABLE `Payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `isPrescriptionNeeded` BOOLEAN NOT NULL,
    `category` ENUM('ANTIBIOTIC', 'ANTIVIRAL', 'ANTIFUNGAL', 'ANTIPARASITIC', 'ANTIPYRETIC', 'ANALGESIC', 'ANESTHETIC', 'ANTISEPTIC', 'DISINFECTANT', 'ANTACID', 'LAXATIVE', 'DIURETIC', 'HORMONE', 'VITAMIN', 'MINERAL', 'NUTRITIONAL_SUPPLEMENT', 'OTHER') NOT NULL,
    `type` ENUM('MEDICINE', 'COSMETIC', 'FOOD', 'OTHER') NOT NULL,

    UNIQUE INDEX `Payment_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ProductSubstitutes` ADD CONSTRAINT `_ProductSubstitutes_A_fkey` FOREIGN KEY (`A`) REFERENCES `Payment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProductSubstitutes` ADD CONSTRAINT `_ProductSubstitutes_B_fkey` FOREIGN KEY (`B`) REFERENCES `Payment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
