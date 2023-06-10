import { prismaClient } from '@config/prismaClient';
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';

import { hasAdminPermissions } from '@api/utils/hasAdminPermissions';

export default async function addUser(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse<void>> {
  if (request.method !== 'POST') return response.status(405).end();

  if (!(await hasAdminPermissions(request, response))) {
    return response.status(401).end();
  }

  try {
    const { data } = request.body;

    await prismaClient.user.create({
      data: {
        ...data,
        password: bcrypt.hashSync(data.password, 10),
      },
    });

    prismaClient.$disconnect();

    return response.status(200).json(data);
  } catch (error) {
    prismaClient.$disconnect();

    console.error(`Error adding a user: ${error}`);

    return response.status(500).json({ error, message: 'Error adding a user' });
  }
}
