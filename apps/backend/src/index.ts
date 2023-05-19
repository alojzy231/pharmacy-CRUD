import express, { Request, Response } from "express";
import { addProduct } from "@actions/post";
import { ProductsCreateOneSchema } from "@pharmacy-crud/dto";

const PORT = 3000;

const app = express();

app.get("/", (request: Request, response: Response) => {
  response.send("Hello World!");
});

app.post("/add-product", async (request: Request, response: Response) => {
  try {
    const { data } = await ProductsCreateOneSchema.parse(request.body);

    await addProduct(data);

    response.status(200).json({
      data,
    });
  } catch (error) {
    response.status(400).json({ message: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
