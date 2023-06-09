import { prismaClient } from '@config/prismaClient';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getHospital(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse> {
  if (request.method !== 'GET') return response.status(405).end();

  try {
    const data = await prismaClient.hospital.findUnique({
      where: { id: Number(request.query.id) },
    });

    prismaClient.$disconnect();

    return response.status(200).json(data);
  } catch (error) {
    prismaClient.$disconnect();

    console.error(`Error getting a doctor: ${error}`);

    return response.status(500).json({ error, message: 'Error getting a doctor' });
  }
}
