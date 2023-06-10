import { Role } from '@dto';
import { NextApiRequest, NextApiResponse } from 'next';
import { destroyCookie } from 'nookies';

import { verifyAccessToken } from '@api/utils/verifyAccessToken';
import { ACCESS_TOKEN } from '@const/cookies';

type RoleType = keyof typeof Role;
const ROLES_WITH_ADMIN_PERMISSIONS: Set<RoleType> = new Set([Role.ADMIN, Role.OWNER]);

export function isRoleValidWithAdminPermissions(role: Role): boolean {
  return ROLES_WITH_ADMIN_PERMISSIONS.has(role);
}

export async function hasAdminPermissions(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<boolean> {
  const { payload } = await verifyAccessToken(request);

  if (isRoleValidWithAdminPermissions(payload.role)) {
    destroyCookie({ res: response }, ACCESS_TOKEN);

    return false;
  }

  return true;
}
