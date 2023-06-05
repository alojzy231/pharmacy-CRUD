import cors from "cors";
import express, { Request, Response } from "express";
import "dotenv/config";

import { getProducts } from "@actions/get";
import { addProduct } from "@actions/post";

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/v1/ping", (request: Request, response: Response) => {
  response.send("pong!");
});

app.get("/v1/get-products", async (_request: Request, response: Response) => {
  try {
    const result = await getProducts();

    response.status(200).json({
      data: result,
    });
  } catch (error) {
    response.status(400).json({ message: error });
  }
});

app.post("/v1/add-product", async ({ body }: Request, response: Response) => {
  try {
    await addProduct(body.data);

    response.status(200).json({
      body,
    });
  } catch (error) {
    response.status(400).json({ message: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
