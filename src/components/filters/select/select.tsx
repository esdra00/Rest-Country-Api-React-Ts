import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export default function SelectRegion({
	region,
	selectRegion,
}: {
	region: any;
	selectRegion: any;
}) {
	return (
		<FormControl sx={{minWidth: 115}}>
			<InputLabel color="primary" id="select_region">Region</InputLabel>
			<Select
				labelId="select_region"
				id="select"
				value={region}
				label="Region"
				onChange={selectRegion}
			>
				<MenuItem value={"All"}>All</MenuItem>
				<MenuItem value={"Europe"}>Europe</MenuItem>
				<MenuItem value={"Americas"}>Americas</MenuItem>
				<MenuItem value={"Asia"}>Asia</MenuItem>
				<MenuItem value={"Oceania"}>Oceania</MenuItem>
				<MenuItem value={"Africa"}>Africa</MenuItem>
			</Select>
		</FormControl>
	);
}
