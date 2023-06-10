import { prismaClient } from '@config/prismaClient';
import { GetHospitalsResultDTO, Role } from '@dto';
import { NextApiRequest, NextApiResponse } from 'next';
import { destroyCookie } from 'nookies';

import { verifyAccessToken } from '@api/utils/verifyAccessToken';
import { ACCESS_TOKEN } from '@const/cookies';

export default async function getUsers(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse<GetHospitalsResultDTO>> {
  if (request.method !== 'GET') return response.status(405).end();

  try {
    const { payload } = await verifyAccessToken(request);

    if (payload.role !== Role.ADMIN) {
      destroyCookie({ res: response }, ACCESS_TOKEN);

      return response.status(401).end();
    }

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
