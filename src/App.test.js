import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { server } from "./mocks/server";
import "mutationobserver-shim";

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
  document.body.innerHTML = "";
});

describe("<App />", () => {
  it("fetches characters from the Star Wars API and displays them", async () => {
    render(<App />);

    expect(await screen.findByText("Luke Skywalker")).toBeInTheDocument();
    expect(await screen.findByText("C-3PO")).toBeInTheDocument();
    expect(await screen.findByText("R2-D2")).toBeInTheDocument();
    expect(await screen.findByText("Darth Vader")).toBeInTheDocument();
    expect(await screen.findByText("Leia Organa")).toBeInTheDocument();
  });
});
