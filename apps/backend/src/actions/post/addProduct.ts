import { AddProductArgumentsDTO } from "@pharmacy-crud/dto";
import { prismaClient } from "@pharmacy-crud/prisma-client";

export async function addProduct(data: AddProductArgumentsDTO): Promise<void> {
  try {
    await prismaClient.product.upsert({
      create: data,
      update: { quantity: { increment: data.quantity } },
      where: { name: data.name },
    });
  } catch (error) {
    console.error(`Error adding product: ${error}`);
  } finally {
    prismaClient.$disconnect();
  }
}
