import { createServer } from "node:http";

export const server = createServer((request, response) => {
  response.end("Hello, Madina");
});
