interface ICity {
    latitude: string;
    longitude: string;
    name: string;
    countryCode: string;
}

interface ISearchData {
    value: string;
    label: string;
}

interface ISearchFormProps {
    onSearchChange: (arg: ISearchData) => void;
}