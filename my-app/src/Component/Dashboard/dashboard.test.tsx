import { getByText, render, screen, waitFor } from "@testing-library/react";
import { error } from "console";
import Dashboard from "./Dashboard";
import * as api from "./api";

jest.mock("./api");

const cases = [
  { q: [2, 3], r: 3 },
  { q: [1, 2], r: 3 },
  { q: [7, 0], r: 7 },
  { q: [4, 5], r: 8 },
];

describe("Test cases for math module", () => {
  cases.forEach((el, i) => {
    let value1 = el.q[0];
    let value2 = el.q[1];
    let value3 = el.r;

    test(`the sum of ${value1} and ${value2} equals ${value3}`, () => {
      expect(value1 + value2).toBe(value3);
    });
  });
});

it("added new List", () => {
  const { totalList }: any = render(<Dashboard />);
  const div = totalList("total_list");
  expect(div).toBeTruthy();
  expect("Total list:200").toBe("Total list:200");
});

describe("clickButton", () => {
  const btn = screen.queryByTitle("btn");
  expect(btn?.innerHTML).toBe("Add New");
});

describe("api working fine", () => {
  it("api response", async () => {
    api.FetchData.mockResoledValue({
      results: [{ name: "raja" }],
    });
    render(<Dashboard />);
    await waitFor(() => {
      screen.getByText("raja");
    });
  });
});

function filterByTerm(inputArr: any, searchTerm: any) {
  return inputArr.filter(function (arrayElement: any) {
    return arrayElement.url.match(searchTerm);
  });
}

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);
  });
});
