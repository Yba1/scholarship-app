import type { NextFunction, Request, Response } from "express";
import type { ZodSchema } from "zod";

type ParsedRequest = {
  body?: unknown;
  query?: unknown;
  params?: unknown;
};

export function validate(schema: ZodSchema<ParsedRequest>) {
  return (request: Request, response: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: request.body,
      query: request.query,
      params: request.params
    });

    if (!result.success) {
      response.status(400).json({
        message: "Invalid request payload.",
        issues: result.error.flatten()
      });
      return;
    }

    request.body = (result.data.body ?? request.body) as Request["body"];
    request.query = (result.data.query ?? request.query) as Request["query"];
    request.params = (result.data.params ?? request.params) as Request["params"];
    next();
  };
}