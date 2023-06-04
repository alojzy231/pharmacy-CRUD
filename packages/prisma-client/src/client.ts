import { PrismaClient } from "@prisma/client";

export const prismaClient =
  global.prismaClient ||
  new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });

if (process.env.NODE_ENV !== "production") global.prismaClient = prismaClient;
