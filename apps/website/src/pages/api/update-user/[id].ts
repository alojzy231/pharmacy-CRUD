import { prismaClient } from '@config/prismaClient';
import { UpdateUserArgumentsDTO } from '@dto';
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';

import { hasAdminPermissions } from '@api/utils/hasAdminPermissions';

export default async function updateUser(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse> {
  if (request.method !== 'PATCH') return response.status(405).end();

  if (!(await hasAdminPermissions(request, response))) {
    return response.status(401).end();
  }

  const { data } = request.body;
  const { id, ...restData }: UpdateUserArgumentsDTO = data;

  try {
    await prismaClient.user.update({
      data: {
        ...restData,
        password: bcrypt.hashSync(data.password, 10),
      },
      where: {
        id,
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
