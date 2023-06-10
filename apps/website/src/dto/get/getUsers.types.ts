import { User } from '@prisma/client';

export type GetUsersResultDTO = Omit<User, 'password'>[];
