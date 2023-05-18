import z from "zod";
import { PrismaClient } from "@prisma/client";

import { ProductsCreateOneSchema } from "@schemas";

const prisma = new PrismaClient();

export async function addProduct(
  data: z.infer<typeof ProductsCreateOneSchema>["data"]
) {
  try {
    await prisma.products.create({
      data,
    });
  } catch (error) {
    console.error(`Error adding product: ${error}`);
  } finally {
    prisma.$disconnect();
  }
}
