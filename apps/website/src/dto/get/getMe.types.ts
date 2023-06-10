import { User } from '@prisma/client';

export type GetMeResultDTO = Omit<User, 'password'>;
