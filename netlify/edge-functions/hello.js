import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  context.log("Hello from the logging service");
};

export default () => new Response("Hello world");
