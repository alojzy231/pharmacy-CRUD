-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_doctorId_fkey`;

-- AlterTable
ALTER TABLE `Product` MODIFY `doctorId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `Doctor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
