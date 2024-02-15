import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("Logo", () => {
  it("renders the logo", () => {
    render(<Logo />);

    const content = screen.getByRole("img");

    expect(content).toBeInTheDocument();
  });
});
