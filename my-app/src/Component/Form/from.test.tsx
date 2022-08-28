import { render } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Form />);
    expect(baseElement).toBeTruthy();
  });
});

test("Title inout should be renderd", () => {
  render(<Form />);
  const titleInputEl = screen.getByPlaceholderText(/Title/i);
  expect(titleInputEl).toBeInTheDocument();
});
