import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";

describe("ImportData", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Dashboard />);
    expect(baseElement).toBeTruthy();
  });
});
