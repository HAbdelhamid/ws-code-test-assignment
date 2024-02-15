import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import { server } from "@/mock-server/server";
import { HttpResponse, http } from "msw";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Counter", () => {
  it("renders the counter", async () => {
    render(<Counter />);

    const countElement = await screen.findByTestId("visitor-count");
    expect(countElement).toBeInTheDocument();
  });

  it("renders error message when API request fails", async () => {
    server.use(
      http.get("/api/visitors", () => {
        return HttpResponse.error();
      })
    );

    render(<Counter />);

    const error = await screen.getByText("Error");

    expect(error).toBeInTheDocument();
  });
});
