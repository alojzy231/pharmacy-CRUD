import { User } from '@dto';
import jwt from 'jsonwebtoken';
import { NextApiRequest } from 'next';
import { parseCookies } from 'nookies';

import { ACCESS_TOKEN } from '@const/cookies';

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET as string;

export async function verifyAccessToken(request: NextApiRequest): Promise<{ payload: User }> {
  const { [ACCESS_TOKEN]: accessToken } = parseCookies({ req: request });

  if (!accessToken) {
    throw new Error('No access token provided');
  }

  return new Promise((resolve, reject) => {
    jwt.verify(accessToken, ACCESS_TOKEN_SECRET, (error, payload) => {
      if (error) {
        return reject(error);
      }
      resolve(payload as { payload: User });
    });
  });
}
