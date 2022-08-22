import { render } from "@testing-library/react";

import Form from "./Form";

describe("ImportData", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Form />);
    expect(baseElement).toBeTruthy();
  });
});
