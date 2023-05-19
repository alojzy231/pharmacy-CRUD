import express, { Request, Response } from "express";
import { addProduct } from "@actions/post";
import { ProductCreateOneSchema } from "@pharmacy-crud/dto";
import "dotenv/config";
import cors from "cors";
import { getProducts } from "@actions/get";

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

app.post("/v1/add-product", async (request: Request, response: Response) => {
  try {
    const { data } = await ProductCreateOneSchema.parse(request.body);

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
