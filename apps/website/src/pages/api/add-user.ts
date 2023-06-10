import { prismaClient } from '@config/prismaClient';
import { Role } from '@dto';
import { NextApiRequest, NextApiResponse } from 'next';
import { destroyCookie } from 'nookies';

import { verifyAccessToken } from '@api/utils/verifyAccessToken';
import { ACCESS_TOKEN } from '@const/cookies';

export default async function addUser(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse<void>> {
  if (request.method !== 'POST') return response.status(405).end();

  const { payload } = await verifyAccessToken(request);

  if (payload.role !== Role.ADMIN) {
    destroyCookie({ res: response }, ACCESS_TOKEN);

    return response.status(401).end();
  }

  try {
    const { data } = request.body;

    await prismaClient.user.create({
      data,
    });

    prismaClient.$disconnect();

    return response.status(200).json(data);
  } catch (error) {
    prismaClient.$disconnect();

    console.error(`Error adding a user: ${error}`);

    return response.status(500).json({ error, message: 'Error adding a user' });
  }
}
