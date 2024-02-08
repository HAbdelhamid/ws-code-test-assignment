import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the footer", () => {
    render(<Footer />);

    const content = screen.getByText(/Footer/i);

    expect(content).toBeInTheDocument();
  });
});
