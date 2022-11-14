import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

import { GEO_API_URL, geoApiOptions } from "../../config";

const SearchForm: React.FC<ISearchFormProps> = ({
  onSearchChange,
}): JSX.Element => {
  const [search, setSearch] = useState(null as ISearchData | unknown);

  const loadOptions = async (inputValue: string) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      );

      const response_1 = await response.json();

      return {
        options: response_1.data.map((city: ICity) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name} ${city.countryCode}`,
          };
        }),
      };
    } catch (err) {
      return console.error(err);
    }
  };

  const handleOnChange = (searchData: ISearchData) => {
    setSearch(searchData as ISearchData);
    onSearchChange(searchData as ISearchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search For City"
      debounceTimeout={400}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default SearchForm;
