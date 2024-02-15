import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Quote } from "./Quote";

describe("Quote", () => {
  it("renders the Quote", () => {
    render(<Quote content="" />);

    const quote = screen.getByRole("article");

    expect(quote).toBeInTheDocument();
  });
});
