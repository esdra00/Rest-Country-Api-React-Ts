import SearchIcon from "@mui/icons-material/Search";
import {Box, TextField} from "@mui/material";
import style from "/src/styles/style.module.scss";



export default function Search({handleKeyDown}: any) {
	return (
		<Box
			className={style.searchBar}
			sx={{backgroundColor: "background.paper"}}
		>
			<SearchIcon />
			<TextField
				sx={{width: "100%"}}
				variant="standard"
				size="small"
				label="Search for a country..."
				onKeyDown={handleKeyDown}
			/>
		</Box>
	);
}
