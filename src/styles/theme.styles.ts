import {PaletteMode} from "@mui/material";
import {grey} from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		primary: {
			main: "hsl(0, 0%, 100%)",
			...(mode === "dark" && {
				main: "hsl(209, 23%, 22%)",
			}),
		},
		secondary: {
			main: "hsl(209, 23%, 22%)",
			...(mode === "dark" && {main: "hsl(0, 0%, 100%)"}),
		},
		background: {
			...(mode === "light"
				? {default: "hsl(0, 0%, 98%)", paper: "hsl(0, 0%, 100%)"}
				: {default: "hsl(207, 26%, 17%)", paper: "hsl(209, 23%, 22%)"}),
		},
		text: {
			...(mode === "light"
				? {
						primary: "hsl(200, 15%, 8%)",
						secondary: "hsl(0, 0%, 52%)",
				  }
				: {
						primary: "hsl(0, 0%, 100%)",
						secondary: grey[500],
				  }),
		},
		action: {
			...(mode === "light" ? {focus: "#ff0000"} : {focus: "#ff0000"}),
		},
		label: {
			
		}
	},
	typography: {
		fontFamily: "Nunito Sans",
		fontWeight: 600,
		h1: {fontSize: "24px", fontWeight: 800, lineHeight: "inherit"},
		button: {
			fontFamily: "Nunito Sans",
			fontWeight: 300,
			fontSize: "16px",
		},
		body1: {
			fontWeight: 600,
		},
		body2: {
			fontWeight: 300,
			fontSize: "1rem",
			lineHeight: 1.5,
		},
	},
});
