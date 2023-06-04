import { prismaClient } from "@pharmacy-crud/prisma-client";
import { AddProductArgumentsDTO } from "@pharmacy-crud/dto";

export async function addProduct(data: AddProductArgumentsDTO) {
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
