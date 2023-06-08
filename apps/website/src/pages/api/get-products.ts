import { prismaClient } from '@config/prismaClient';
import { GetProductsResultDTO } from '@dto';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getProducts(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse<GetProductsResultDTO>> {
  if (request.method !== 'GET') return response.status(405).end();

  try {
    const data = await prismaClient.product.findMany();

    prismaClient.$disconnect();

    return response.status(200).json(data);
  } catch (error) {
    prismaClient.$disconnect();

    console.error(`Error getting all products: ${error}`);

    return response.status(500).json({ error, message: 'Error getting all products' });
  }
}
