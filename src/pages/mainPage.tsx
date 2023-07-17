import {SelectChangeEvent} from "@mui/material";
import {createContext, useState} from "react";
import Card from "../components/card/card";
import Filters from "../components/filters/Filters";
import {useFetch, useFetchCountry} from "../utils/api";
import style from "/src/styles/style.module.scss";

export const ColorModeContext = createContext({toggleColorMode: () => {}});

export default function MainPage() {
	const [region, setRegion] = useState("All");
	const [search, setSearch] = useState("");

	const selectRegion = (event: SelectChangeEvent) => {
		setRegion(event.target.value);
	};

	const handleKeyDown = (event: any) => {
		if (event.key === "Enter" && event.target.value) {
			setSearch(event.target.value);
		}
	};

	let {data} = search ? useFetchCountry(search) : useFetch();

	return (
		<>
			<Filters
				selectRegion={selectRegion}
				region={region}
				handleKeyDown={handleKeyDown}
			/>
			<div className={style.container}>
				<Card countries={data} region={region} />
			</div>
		</>
	);
}
