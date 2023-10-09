// To find a single product by its id, you can use the Product model and the .findById() method:
// Product.findById(id).
import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  if (request.method === "GET") {
    const { id } = request.query;
    const product = await Product.findById(id);

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }
}
