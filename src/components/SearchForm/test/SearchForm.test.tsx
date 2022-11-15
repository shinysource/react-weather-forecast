import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

import SearchForm from "../index";

const handleSearchChange = jest.fn((value) => {});

const renderComponent = () => {
  return render(<SearchForm onSearchChange={handleSearchChange} />);
};

describe("renders search form", () => {
  let getByText, getAllByRole;

  beforeEach(() => {
    ({ getByText, getAllByRole } = renderComponent());
  });

  it("should render SearchForm component", () => {
    const placeholderText = getByText(/Search For City/i);
    expect(placeholderText).toBeInTheDocument();
  });

  it("updates on change", async () => {
    const searchInput = getAllByRole("combobox", {
      expanded: false,
    });

    expect(searchInput).not.toHaveLength(0);

    fireEvent.input(searchInput[0], { target: { value: "Hong" } });
    expect(searchInput[0]).toHaveValue("Hong");

    await waitFor(
      () => {
        expect(getByText(/Hong Kong HK/i)).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });
});
