import { prismaClient } from '@config/prismaClient';
import { NextApiRequest, NextApiResponse } from 'next';

import { hasAdminPermissions } from '@api/utils/hasAdminPermissions';

export default async function deleteUser(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse> {
  if (request.method !== 'DELETE') return response.status(405).end();

  if (!(await hasAdminPermissions(request, response))) {
    return response.status(401).end();
  }

  const { id } = request.query;

  try {
    await prismaClient.user.delete({
      where: {
        id: Number(id),
      },
    });

    prismaClient.$disconnect();

    return response.status(200).end();
  } catch (error) {
    prismaClient.$disconnect();

    console.error(`Error deleting a user: ${error}`);

    return response.status(500).json({ error, message: 'Error deleting a user' });
  }
}
