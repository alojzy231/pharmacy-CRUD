import { prismaClient } from '@config/prismaClient';
import { GetProductsResultDTO, UpdateProductArgumentsDTO } from '@dto';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function updateProduct(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse<GetProductsResultDTO>> {
  if (request.method !== 'PATCH') return response.status(405).end();

  const { data } = request.body;
  const { id, ...restData }: UpdateProductArgumentsDTO = data;

  try {
    await prismaClient.product.update({
      data: restData,
      where: {
        id: Number(id),
      },
    });

    prismaClient.$disconnect();

    return response.status(200).end();
  } catch (error) {
    prismaClient.$disconnect();

    console.error(`Error updating a product: ${error}`);

    return response.status(500).json({ error, message: 'Error updating a product' });
  }
}
