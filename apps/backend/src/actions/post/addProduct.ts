import { PrismaClient } from "@prisma/client";

import { AddProductDTO } from "@pharmacy-crud/dto";
import { prisma } from "../../client";

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
