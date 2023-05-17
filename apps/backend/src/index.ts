import express, { Request, Response } from "express";

const PORT = 8000;

const app = express();

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
    },
  });
  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
//
// app.get('/', (request:Request, response:Response) => {
//   response.send('Hello World!');
// });
//
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// })
