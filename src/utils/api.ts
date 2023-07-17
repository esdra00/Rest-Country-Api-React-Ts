import axios from "axios";
import {useEffect, useState} from "react";
import {Main} from "../types";

export function useFetch() {
	const [data, setData] = useState();

	useEffect(() => {
		const fetch = async () => {
			axios.get(
				"https://restcountries.com/v3.1/all?fields=name,capital,cca3,currencies,region,subregion,languages,borders,flags,population,tld"
			).then((response) => {
				setData(response.data);
			});
		};
		fetch();
	}, []);

	return {data};
}

export function useFetchCountry(country: string) {
	const [data, setData] = useState<Main>();

	useEffect(() => {
		const fetch = async () => {
			axios.get(
				`https://restcountries.com/v3.1/name/${country}?fields=name,capital,cca3,currencies,region,subregion,languages,borders,flags,population,tld`
			).then((response) => {
				// return response.data;
				setData(response.data);
			});
		};
		fetch();
	}, [country]);

	return {data};
}

export function useFetchCode(code: string) {
	const [data, setData] = useState<Main>();

	useEffect(() => {
		const fetch = async () => {
			axios.get(
				`https://restcountries.com/v3.1/alpha/${code}?fields=name,capital,cca3,currencies,region,subregion,languages,borders,flags,population,tld`
			).then((response) => {
				// return response.data;
				setData(response.data);
			});
		};
		fetch();
	}, [code]);

	return {data};
}
