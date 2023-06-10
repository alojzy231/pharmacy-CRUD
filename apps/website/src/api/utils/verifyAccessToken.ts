import { apiConfig } from '@config/apiConfig';
import { User } from '@dto';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextPageContext } from 'next';
import { parseCookies } from 'nookies';

import { ACCESS_TOKEN } from '@const/cookies';

export async function verifyAccessToken(
  request: NextApiRequest | undefined,
  context?: NextPageContext
): Promise<{ payload: User }> {
  const { [ACCESS_TOKEN]: accessToken } = parseCookies(context || { req: request });

  if (!accessToken) {
    throw new Error('No access token provided');
  }

  return new Promise((resolve, reject) => {
    jwt.verify(accessToken, apiConfig.ACCESS_TOKEN_SECRET, (error, payload) => {
      if (error) {
        return reject(error);
      }
      resolve(payload as { payload: User });
    });
  });
}
