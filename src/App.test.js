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
  test("[2] Luke Skywalker eventually appears in the DOM", async () => {
    render(<App />);
    expect(screen.queryByText(/Luke/i)).not.toBeInTheDocument();
    expect(await screen.findByText(/Luke/i)).toBeInTheDocument();
  });
  test("[3] C-3PO eventually appears in the DOM", async () => {
    render(<App />);
    expect(screen.queryByText(/3PO/i)).not.toBeInTheDocument();
    expect(await screen.findByText(/3PO/i)).toBeInTheDocument();
  });
  test("[4] R2-D2 eventually appears in the DOM", async () => {
    render(<App />);
    expect(screen.queryByText(/R2/i)).not.toBeInTheDocument();
    expect(await screen.findByText(/R2/i)).toBeInTheDocument();
  });
  test("[5] Darth Vader eventually appears in the DOM", async () => {
    render(<App />);
    expect(screen.queryByText(/Vader/i)).not.toBeInTheDocument();
    expect(await screen.findByText(/Vader/i)).toBeInTheDocument();
  });
  test("[6] Leia Organa eventually appears in the DOM", async () => {
    render(<App />);
    expect(screen.queryByText(/Leia/i)).not.toBeInTheDocument();
    expect(await screen.findByText(/Leia/i)).toBeInTheDocument();
  });
  test("[7] Owen Lars eventually appears in the DOM", async () => {
    render(<App />);
    expect(screen.queryByText(/Owen/i)).not.toBeInTheDocument();
    expect(await screen.findByText(/Owen/i)).toBeInTheDocument();
  });
});
