import { NextApiRequest, NextApiResponse } from 'next';

import { prismaClient } from '@config/prismaClient';

export default async function addHospital(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse<void>> {
  if (request.method !== 'POST') return response.status(405).end();

  try {
    const { data } = request.body;

    await prismaClient.hospital.create({
      data,
    });

    prismaClient.$disconnect();

    return response.status(200).json({ data });
  } catch (error) {
    prismaClient.$disconnect();

    console.error(`Error adding a hospital: ${error}`);

    return response.status(500).json({ error, message: 'Error adding a hospital' });
  }
}
