import { prismaClient } from '@config/prismaClient';
import { GetHospitalsResultDTO } from '@dto';
import { NextApiRequest, NextApiResponse } from 'next';

import { hasAdminPermissions } from '@api/utils/hasAdminPermissions';

export default async function getUsers(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse<GetHospitalsResultDTO>> {
  if (request.method !== 'GET') return response.status(405).end();

  if (!(await hasAdminPermissions(request, response))) {
    return response.status(401).end();
  }

  try {
    const data = await prismaClient.user.findMany();

    const finalData = data.map(({ password: _password, ...restData }) => restData);

    prismaClient.$disconnect();

    return response.status(200).json(finalData);
  } catch (error) {
    prismaClient.$disconnect();

    console.error(`Error getting all hospitals: ${error}`);

    return response.status(500).json({ error, message: 'Error getting all hospitals' });
  }
}
