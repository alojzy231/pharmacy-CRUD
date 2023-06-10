import { type User } from '@prisma/client';

export type LoginArgumentsDTO = Pick<User, 'email' | 'password'>;
