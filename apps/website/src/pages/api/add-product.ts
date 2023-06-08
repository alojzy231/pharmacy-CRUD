import { prismaClient } from '@config/prismaClient';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function addProduct(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse<void>> {
  if (request.method !== 'POST') return response.status(405).end();

  try {
    const { data } = request.body;

    await prismaClient.product.upsert({
      create: data,
      update: { quantity: { increment: data.quantity } },
      where: { name: data.name },
    });

    prismaClient.$disconnect();

    return response.status(200).json(data);
  } catch (error) {
    prismaClient.$disconnect();

    console.error(`Error adding a product: ${error}`);

    return response.status(500).json({ error, message: 'Error adding a product' });
  }
}
