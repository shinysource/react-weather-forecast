import React from "react";
import { render } from "@testing-library/react";

import Forecast from "../index";
import mockData from "./mock-data.json";

const renderComponent = () => {
  return render(<Forecast data={mockData} />);
};

describe("renders forecast list", () => {
  let getAllByText;

  beforeEach(() => {
    ({ getAllByText } = renderComponent());
  });

  it("renders 5 days forecast", () => {
    expect(getAllByText(/day/i)).toHaveLength(5);
  });

  it("renders forecast card", () => {
    expect(getAllByText(/Pressure/i)).not.toHaveLength(0);
    expect(getAllByText(/Clouds/i)).not.toHaveLength(0);
    expect(getAllByText(/Sea Level/i)).not.toHaveLength(0);
    expect(getAllByText(/Max Temperature/i)).not.toHaveLength(0);
    expect(getAllByText(/Humidity/i)).not.toHaveLength(0);
    expect(getAllByText(/Wind Speed/i)).not.toHaveLength(0);
    expect(getAllByText(/Feels Like/i)).not.toHaveLength(0);
    expect(getAllByText(/Min Temperature/i)).not.toHaveLength(0);
  });
});
