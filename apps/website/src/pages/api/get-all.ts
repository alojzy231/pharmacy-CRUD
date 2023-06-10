import { prismaClient } from '@config/prismaClient';
import { GetAllResultDTO } from '@dto';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getAll(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse> {
  if (request.method !== 'GET') return response.status(405).end();

  try {
    const productData = await prismaClient.product.findMany();

    const hospitalData = await prismaClient.hospital.findMany();

    const doctorData = await prismaClient.doctor.findMany({
      include: {
        hospital: true,
      },
    });

    const data: GetAllResultDTO = {
      doctor: doctorData,
      hospital: hospitalData,
      product: productData,
    };

    prismaClient.$disconnect();

    return response.status(200).json(data);
  } catch (error) {
    prismaClient.$disconnect();

    console.error(`Error while searching: ${error}`);

    return response.status(500).json({ error, message: 'Error while searching' });
  }
}
