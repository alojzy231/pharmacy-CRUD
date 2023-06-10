import { User } from '@dto';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { parseCookies } from 'nookies';

import { ACCESS_TOKEN } from '@const/cookies';

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET as string;

async function verifyToken(token: string): Promise<{ payload: User }> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, ACCESS_TOKEN_SECRET, (error, payload) => {
      if (error) {
        return reject(error);
      }
      resolve(payload as { payload: User });
    });
  });
}
export default async function getMe(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse> {
  if (request.method !== 'GET') return response.status(405).end();

  const { [ACCESS_TOKEN]: accessToken } = parseCookies({ req: request });

  if (!accessToken) {
    return response.status(401).end();
  }

  try {
    const { payload } = await verifyToken(accessToken);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _password, ...restData } = payload;

    return response.status(200).json(restData);
  } catch {
    return response.status(401).end();
  }
}
