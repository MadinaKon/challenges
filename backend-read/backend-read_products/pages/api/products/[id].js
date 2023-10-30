import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const { id } = request.query;
    // const product = await Product.findById(id);
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }
}
