import express, { Request, Response } from "express";

const PORT = 8000;

const app = express();

app.get('/', (request:Request, response:Response) => {
  response.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
