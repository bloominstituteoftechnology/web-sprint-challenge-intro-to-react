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
  test("Luke Skywalker is _not_ in the DOM on page load", async () => {
    render(<App />);
    expect(screen.queryByText(/Luke/i)).not.toBeInTheDocument();
  });
  test("C-3PO is _not_ in the DOM on page load", async () => {
    render(<App />);
    expect(screen.queryByText(/3PO/i)).not.toBeInTheDocument();
  });
  test("R2-D2 is _not_ in the DOM on page load", async () => {
    render(<App />);
    expect(screen.queryByText(/R2/i)).not.toBeInTheDocument();
  });
  test("Darth Vader is _not_ in the DOM on page load", async () => {
    render(<App />);
    expect(screen.queryByText(/Vader/i)).not.toBeInTheDocument();
  });
  test("Leia Organa is _not_ in the DOM on page load", async () => {
    render(<App />);
    expect(screen.queryByText(/Leia/i)).not.toBeInTheDocument();
  });
  test("Owen Lars is _not_ in the DOM on page load", async () => {
    render(<App />);
    expect(screen.queryByText(/Owen/i)).not.toBeInTheDocument();
  });
  test("All characters' names eventually populate in the DOM", async () => {
    render(<App />);
    expect(await screen.findByText(/Luke/i)).toBeInTheDocument();
    expect(await screen.findByText(/3PO/i)).toBeInTheDocument();
    expect(await screen.findByText(/R2/i)).toBeInTheDocument();
    expect(await screen.findByText(/Vader/i)).toBeInTheDocument();
    expect(await screen.findByText(/Leia/i)).toBeInTheDocument();
  });
});
