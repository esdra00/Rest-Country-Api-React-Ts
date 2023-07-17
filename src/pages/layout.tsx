import {Box, CssBaseline, PaletteMode, ThemeProvider, createTheme} from "@mui/material";
import {createContext, useMemo, useState} from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/header/header";
import {getDesignTokens} from "../styles/theme.styles";

export const ColorModeContext = createContext({toggleColorMode: () => {}});

export default function Layout() {
	const [mode, setMode] = useState<PaletteMode>("light");

	// toggle color mode
	const colorMode = useMemo(
		() => ({
			// The dark mode switch would invoke this method
			toggleColorMode: () => {
				setMode((prevMode: PaletteMode) =>
					prevMode === "light" ? "dark" : "light"
				);
			},
		}),
		[]
	);

	// Update the theme only if the mode changes
	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	return (
		<>
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Box component="main">
						<Header />
						<Outlet />
						{/* 	const location = useLocation(); */}
						{/* <Outlet location={location} key={location.pathname} /> */}
					</Box>
				</ThemeProvider>
			</ColorModeContext.Provider>
		</>
	);
}
