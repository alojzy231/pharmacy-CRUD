import { GetProductsResultDTO } from "@pharmacy-crud/dto";
import { prismaClient } from "@pharmacy-crud/prisma-client";

export const getProducts = async (): Promise<
  GetProductsResultDTO | undefined
> => {
  try {
    return await prismaClient.product.findMany();
  } catch (error) {
    console.error(`Error getting all products: ${error}`);
  } finally {
    prismaClient.$disconnect();
  }
};
