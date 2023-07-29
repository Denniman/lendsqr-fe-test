import { render, screen } from "@testing-library/react";
import { CustomSelect } from "./CustomSelect";

describe("CustomSelect", () => {
  it("renders CustomSelect correctly", () => {
    render(
      <CustomSelect
        options={["all", "pending", "success"]}
        placeholder={"selected items"}
        selectedValue={""}
        onChange={() => {}}
      />
    );

    const selectButton = screen.getByRole("button");

    expect(selectButton).toBeInTheDocument();
  });

  it("does not render list when dropdown is not selected", () => {
    render(
      <CustomSelect
        options={["all", "pending", "success"]}
        placeholder={"selected items"}
        selectedValue={""}
        onChange={() => {}}
      />
    );

    const list = screen.queryByRole("list");

    expect(list).not.toBeInTheDocument();
  });
});
