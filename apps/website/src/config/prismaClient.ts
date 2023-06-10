import { serverConfig } from '@config/serverConfig';
import { PrismaClient } from '@prisma/client';

export const prismaClient = new PrismaClient({
  datasources: {
    db: {
      url: serverConfig.DATABASE_URL,
    },
  },
});
