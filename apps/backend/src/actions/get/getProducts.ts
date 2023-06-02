import { prismaClient, Product } from "@pharmacy-crud/prisma-client";

export const getProducts = async (): Promise<Product[] | undefined> => {
  try {
    return await prismaClient.product.findMany();
  } catch (error) {
    console.error(`Error getting all products: ${error}`);
  } finally {
    prismaClient.$disconnect();
  }
};
