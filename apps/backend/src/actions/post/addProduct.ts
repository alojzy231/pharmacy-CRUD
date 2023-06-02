import { AddProductDTO } from "@pharmacy-crud/dto";
import { prismaClient } from "@pharmacy-crud/prisma-client";

export async function addProduct(data: AddProductDTO) {
  try {
    await prismaClient.product.upsert({
      create: data,
      where: { name: data.name },
      update: { quantity: { increment: data.quantity } },
    });
  } catch (error) {
    console.error(`Error adding product: ${error}`);
  } finally {
    prismaClient.$disconnect();
  }
}
