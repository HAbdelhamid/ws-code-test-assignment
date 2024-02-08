import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("renders the counter", () => {
    render(<Counter />);

    const content = screen.getByText(/Counter/i);

    expect(content).toBeInTheDocument();
  });
});
