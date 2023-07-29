import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders button correctly", () => {
    render(<Button text="submit" />);

    const button = screen.getByRole("button", { name: "submit" });

    expect(button).toBeInTheDocument();
  });
});
