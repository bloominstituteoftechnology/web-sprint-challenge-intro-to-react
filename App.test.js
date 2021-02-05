import React from "react";
import { render, screen, act } from "@testing-library/react";
import axios from "axios";
import App from "./src/App";
import { data as starWarsData } from "./src/mocks/handlers";

jest.mock("axios");

test("sanity", () => {
  expect(true).not.toBe(false);
});

describe("<App />", () => {
  it("fetches characters from the Star Wars API and displays them", async () => {
    const characters = starWarsData;

    const promise = Promise.resolve({ data: characters });
    axios.get.mockImplementationOnce(() => promise);

    render(<App />);

    await act(() => promise);

    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    expect(screen.getByText("C-3PO")).toBeInTheDocument();
    expect(screen.getByText("R2-D2")).toBeInTheDocument();
    expect(screen.getByText("Darth Vader")).toBeInTheDocument();
    expect(screen.getByText("Leia Organa")).toBeInTheDocument();
  });
});
