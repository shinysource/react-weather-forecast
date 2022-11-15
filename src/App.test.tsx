import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders layout", () => {
  render(<App />);
  const header = screen.getByText(/Weather Forecast/i);
  expect(header).toBeInTheDocument();
});
