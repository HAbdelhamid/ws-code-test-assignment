import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("Logo", () => {
  it("renders the logo", () => {
    render(<Logo />);

    const content = screen.getByText(/Logo/i);

    expect(content).toBeInTheDocument();
  });
});
