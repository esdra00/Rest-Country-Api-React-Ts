import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {Box, IconButton, Typography, useTheme} from "@mui/material";
import {useContext} from "react";
import {ColorModeContext} from "../../pages/layout";
import style from "/src/styles/style.module.scss";

export default function Header() {
	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);

	return (
		<Box
			component="header"
			sx={{backgroundColor: "background.paper", color: "text.primary"}}
			className={style.header}
		>
			<Typography variant="h1">Where in the world</Typography>
			<Box>
				<IconButton
					sx={{ml: 1}}
					onClick={colorMode.toggleColorMode}
					color="inherit"
				>
					{theme.palette.mode === "dark" ? (
						<Brightness7Icon />
					) : (
						<Brightness4Icon />
					)}
				</IconButton>
				{theme.palette.mode} mode
			</Box>
		</Box>
	);
}
