import { prismaClient } from '@config/prismaClient';
import { GetHospitalsResultDTO } from '@dto';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getDoctors(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse<GetHospitalsResultDTO>> {
  if (request.method !== 'GET') return response.status(405).end();

  try {
    const data = await prismaClient.doctor.findMany({
      include: {
        hospital: true,
      },
    });

    prismaClient.$disconnect();

    return response.status(200).json(data);
  } catch (error) {
    prismaClient.$disconnect();

    console.error(`Error getting all doctors: ${error}`);

    return response.status(500).json({ error, message: 'Error getting all doctors' });
  }
}
