import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("renders the counter", () => {
    render(<Counter />);

    const counter = screen.getByText("Counter");

    expect(counter).toBeInTheDocument();
  });
  it.todo("calls bff to get the counter value");
  it.todo("makes the number humanly readable");
});
