import { NextApiRequest, NextApiResponse } from 'next';

import { verifyAccessToken } from '@api/utils/verifyAccessToken';

export default async function getMe(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void | NextApiResponse> {
  if (request.method !== 'GET') return response.status(405).end();

  try {
    const { payload } = await verifyAccessToken(request);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _password, ...restData } = payload;

    return response.status(200).json(restData);
  } catch {
    return response.status(401).end();
  }
}
