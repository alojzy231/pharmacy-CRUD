import { apiConfig } from '@config/apiConfig';
import { PrismaClient } from '@prisma/client';

export const prismaClient = new PrismaClient({
  datasources: {
    db: {
      url: apiConfig.DATABASE_URL,
    },
  },
});
