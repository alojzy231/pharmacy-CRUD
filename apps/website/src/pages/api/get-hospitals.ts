import { NextApiRequest, NextApiResponse } from 'next';

import { prismaClient } from '@config/prismaClient';
import { GetHospitalsResultDTO } from '@dto';

export default async function getHospitals(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse<GetHospitalsResultDTO>> {
  if (request.method !== 'GET') return response.status(405).end();

  try {
    const data = await prismaClient.hospital.findMany();

    prismaClient.$disconnect();

    return response.status(200).json({ data });
  } catch (error) {
    prismaClient.$disconnect();

    console.error(`Error getting all hospitals: ${error}`);

    return response.status(500).json({ error, message: 'Error getting all products' });
  }
}
