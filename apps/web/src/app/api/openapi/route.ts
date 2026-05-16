import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    openapi: "3.1.0",
    info: {
      title: "API Meter API",
      version: "0.1.0",
      description: "Demo API surface for usage metering, API keys, and billing-ready events.",
    },
    servers: [{ url: "/api/v1" }],
    paths: {
      "/demo": {
        get: {
          summary: "Demo endpoint",
          security: [{ ApiKeyAuth: [] }, { BearerAuth: [] }],
          responses: {
            "200": {
              description: "Demo response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      data: {
                        type: "object",
                        properties: {
                          message: { type: "string" },
                          authenticatedAs: { type: "string" },
                          scopes: {
                            type: "array",
                            items: { type: "string" },
                          },
                          source: { type: "string", enum: ["demo", "database"] },
                          metered: { type: "boolean" },
                        },
                        required: ["message", "authenticatedAs", "scopes", "source"],
                      },
                    },
                    required: ["data"],
                  },
                },
              },
            },
            "401": { description: "Missing or invalid API key" },
            "402": { description: "Active paid plan required" },
            "403": { description: "Insufficient scope" },
          },
        },
      },
    },
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: "apiKey",
          in: "header",
          name: "x-api-key",
        },
        BearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
    },
  });
}
