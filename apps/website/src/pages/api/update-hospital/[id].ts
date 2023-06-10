import { prismaClient } from '@config/prismaClient';
import { UpdateHospitalArgumentsDTO } from '@dto';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function updateHospital(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse> {
  if (request.method !== 'PATCH') return response.status(405).end();

  const { data } = request.body;
  const { id, ...restData }: UpdateHospitalArgumentsDTO = data;

  try {
    await prismaClient.hospital.update({
      data: restData,
      where: {
        id: Number(id),
      },
    });

    prismaClient.$disconnect();

    return response.status(200).end();
  } catch (error) {
    prismaClient.$disconnect();

    console.error(`Error updating a hospital: ${error}`);

    return response.status(500).json({ error, message: 'Error updating a hospital' });
  }
}
