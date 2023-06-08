-- CreateIndex
CREATE FULLTEXT INDEX `Doctor_name_idx` ON `Doctor`(`name`);

-- CreateIndex
CREATE FULLTEXT INDEX `Doctor_lastName_idx` ON `Doctor`(`lastName`);

-- CreateIndex
CREATE FULLTEXT INDEX `Hospital_name_idx` ON `Hospital`(`name`);

-- CreateIndex
CREATE FULLTEXT INDEX `Hospital_city_idx` ON `Hospital`(`city`);

-- CreateIndex
CREATE FULLTEXT INDEX `Product_name_idx` ON `Product`(`name`);
