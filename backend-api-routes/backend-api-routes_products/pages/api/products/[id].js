import { getProductById } from "../../../services/productServices.js";

export default function handler(request, response) {
  const { id } = request.query;

  // assign the return value of getProductById to product
  const product = getProductById(id);

  if (!product) {
    return response.status(404).json({ status: "Not found!" });
  }

  response.status(200).json(product);
}
