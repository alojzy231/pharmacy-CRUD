import { prismaClient } from '@config/prismaClient';
import { GetProductsResultDTO } from '@dto';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function deleteDoctor(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse<GetProductsResultDTO>> {
  if (request.method !== 'DELETE') return response.status(405).end();

  const { id } = request.query;

  try {
    await prismaClient.doctor.delete({
      where: {
        id: Number(id),
      },
    });

    prismaClient.$disconnect();

    return response.status(200).end();
  } catch (error) {
    prismaClient.$disconnect();

    console.error(`Error deleting a doctor: ${error}`);

    return response.status(500).json({ error, message: 'Error deleting a doctor' });
  }
}
