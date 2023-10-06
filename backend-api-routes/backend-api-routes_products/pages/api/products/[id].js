import { getProductById } from "../../../services/productServices.js";

export default function handler(request, response) {
  const { id } = request.query;

  const productId = getProductById(id);

  if (!productId) {
    return response.status(404).json({ status: "Not found!" });
  }

  response.status(200).json(productId);
}
