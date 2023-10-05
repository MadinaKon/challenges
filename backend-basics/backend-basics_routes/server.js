import { createServer } from "node:http";

export const server = createServer((request, response) => {
  if (request.url === "/api/fish/1") {
    response.statusCode = 200;
    response.write("Shrimp");
    response.end();
  } else if (request.url === "/api/fish/2") {
    response.statusCode = 200;
    response.write("Anemonefish");
    response.end();
  } else {
    response.statusCode = 404;
    response.end();
  }
});
