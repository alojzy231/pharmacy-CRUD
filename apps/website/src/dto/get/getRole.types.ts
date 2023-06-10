import { User } from '@prisma/client';

export type GetRoleResultDTO = Pick<User, 'role'>;
