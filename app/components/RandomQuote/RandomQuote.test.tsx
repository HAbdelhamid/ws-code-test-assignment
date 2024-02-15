import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RandomQuote } from "./RandomQuote";
import { server } from "@/mock-server/server";
import { SWRProvider } from "../Providers/SWRProvider";
import { ReactNode } from "react";
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

describe("Random Quote", () => {
  it("renders the random quote", () => {
    const initialData = { value: "This is a random quote mock." };
    render(<RandomQuote />, {
      wrapper: ({ children }: { children: ReactNode }) => (
        <SWRProvider
          value={{
            fallback: {
              "https://api.chucknorris.io/jokes/random?category=dev":
                initialData,
            },
          }}
        >
          {children}
        </SWRProvider>
      ),
    });

    const quote = screen.getByRole("article");

    expect(quote).toBeInTheDocument();
    expect(quote).toHaveTextContent("This is a random quote mock.");
  });
  it("doesn't renders if there is no data", () => {
    server.use(
      http.get("https://api.chucknorris.io/jokes/random?category=dev", () => {
        return HttpResponse.error();
      })
    );

    render(<RandomQuote />);

    const quote = screen.queryByRole("article");

    expect(quote).not.toBeInTheDocument();
  });
});
