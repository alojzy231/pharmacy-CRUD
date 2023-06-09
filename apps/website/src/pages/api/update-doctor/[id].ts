import { prismaClient } from '@config/prismaClient';
import { UpdateDoctorArgumentsDTO } from '@dto';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function updateDoctor(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse> {
  if (request.method !== 'PATCH') return response.status(405).end();

  const { data } = request.body;
  const { id, ...restData }: UpdateDoctorArgumentsDTO = data;

  try {
    await prismaClient.doctor.update({
      data: restData,
      where: {
        id: Number(id),
      },
    });

    prismaClient.$disconnect();

    return response.status(200).end();
  } catch (error) {
    prismaClient.$disconnect();

    console.error(`Error updating a doctor: ${error}`);

    return response.status(500).json({ error, message: 'Error updating a doctor' });
  }
}
