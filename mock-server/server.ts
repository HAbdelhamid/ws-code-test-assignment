import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

export const server = setupServer(
  http.get("https://api.chucknorris.io/jokes/random?category=dev", () => {
    return HttpResponse.json({
      value: "This is a random quote mock.",
    });
  }),

  http.get("/api/visitors", () => {
    return HttpResponse.json({
      count: 1000,
    });
  }),

  http.post("/api/visits", () => {
    return new HttpResponse("Success!", {
      status: 200,
    });
  })
);

// Start the interception.
server.listen();
