import { prismaClient, Prisma } from "@pharmacy-crud/prisma-client";

export async function addProduct(data: Prisma.ProductCreateInput) {
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
