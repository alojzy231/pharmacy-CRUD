import { prismaClient } from '@config/prismaClient';
import { AddDoctorArgumentsDTO } from '@dto';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function addDoctor(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse<void>> {
  if (request.method !== 'POST') return response.status(405).end();

  try {
    const { data } = request.body;

    const { hospitalId, ...restData }: AddDoctorArgumentsDTO = data;

    await prismaClient.doctor.create({
      data: {
        ...restData,
        hospital: {
          connect: {
            id: hospitalId,
          },
        },
      },
    });

    prismaClient.$disconnect();

    return response.status(200).json(data);
  } catch (error) {
    prismaClient.$disconnect();

    console.error(`Error adding a doctor: ${error}`);

    return response.status(500).json({ error, message: 'Error adding a doctor' });
  }
}
