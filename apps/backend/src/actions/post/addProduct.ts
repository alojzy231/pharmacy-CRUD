import { PrismaClient } from "@prisma/client";

import { AddProductDTO } from "@pharmacy-crud/dto";

const prisma = new PrismaClient();

export async function addProduct(data: AddProductDTO) {
  try {
    await prisma.product.create({
      data,
    });
  } catch (error) {
    console.error(`Error adding product: ${error}`);
  } finally {
    prisma.$disconnect();
  }
}
