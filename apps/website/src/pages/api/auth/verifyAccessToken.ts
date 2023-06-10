import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET as string;

async function verifyToken(token: string): Promise<unknown> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, ACCESS_TOKEN_SECRET, (error, payload) => {
      if (error) {
        return reject(error);
      }
      resolve(payload);
    });
  });
}
export default async function verifyAccessToken(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<NextApiResponse> {
  if (request.method !== 'GET') return response.status(405).end();

  if (!request.headers.authorization) {
    return response.status(401).end();
  }
  const token = request.headers.authorization.split(' ')[1];

  if (!token) {
    return response.status(401).end();
  }

  try {
    await verifyToken(token);

    return response.status(200).end();
  } catch {
    return response.status(401).end();
  }
}
