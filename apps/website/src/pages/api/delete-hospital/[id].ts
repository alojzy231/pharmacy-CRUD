import { prismaClient } from '@config/prismaClient';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function deleteHospital(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse> {
  if (request.method !== 'DELETE') return response.status(405).end();

  const { id } = request.query;

  try {
    await prismaClient.hospital.delete({
      where: {
        id: Number(id),
      },
    });

    prismaClient.$disconnect();

    return response.status(200).end();
  } catch (error) {
    prismaClient.$disconnect();

    console.error(`Error deleting a hospital: ${error}`);

    return response.status(500).json({ error, message: 'Error deleting a hospital' });
  }
}
