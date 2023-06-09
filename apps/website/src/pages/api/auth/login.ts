import { prismaClient } from '@config/prismaClient';
import { serverConfig } from '@config/serverConfig';
import { LoginArgumentsDTO } from '@dto';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';

import { ACCESS_TOKEN } from '@const/cookies';

function signAccessToken(payload: LoginArgumentsDTO): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.sign({ payload }, serverConfig.ACCESS_TOKEN_SECRET, {}, (error, token) => {
      if (error) {
        reject(error);
      }
      resolve(token as string);
    });
  });
}

export default async function login(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse> {
  if (request.method !== 'POST') return response.status(405).end();

  const { email, password }: LoginArgumentsDTO = request.body.data;

  try {
    const user = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return response.status(401).end();
    }

    const checkPassword = bcrypt.compareSync(password, user.password);

    if (!checkPassword) {
      return response.status(401).end();
    }
    const accessToken = await signAccessToken(user);

    setCookie({ res: response }, ACCESS_TOKEN, accessToken, {
      maxAge: 24 * 60 * 60, // 1 day
      path: '/',
    });

    prismaClient.$disconnect();

    return response.status(200).end();
  } catch (error) {
    prismaClient.$disconnect();

    console.error(`Error while login: ${error}`);

    return response.status(500).json({ error, message: 'Error while login' });
  }
}
