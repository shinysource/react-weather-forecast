import React from "react";
import { render, screen } from "@testing-library/react";

import CurrentWeather from "../index";
import mockData from "./mock-data.json";

const renderComponent = () => {
  return render(<CurrentWeather data={mockData} />);
};

describe("renders CurrentWeather card", () => {
  let getByText;

  beforeEach(() => {
    ({ getByText } = renderComponent());
  });

  it("renders components", () => {
    expect(getByText(/California/i)).toBeDefined();
    expect(getByText(/US/i)).toBeDefined();
    expect(getByText(/few clouds/i)).toBeDefined();
    expect(getByText(/29.08/i)).toBeDefined();
    expect(getByText(/27.44/i)).toBeDefined();
    expect(getByText(/16/i)).toBeDefined();
    expect(getByText(/1015/i)).toBeDefined();
    expect(getByText(/7.23/i)).toBeDefined();
  });

  it("should have classes", () => {
    const { container } = render(<CurrentWeather data={mockData} />);

    expect(container.firstChild).toHaveClass("weather");
  });
});
