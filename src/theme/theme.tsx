import {createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		primary: {
			main: '#0a1d37',
		},
		secondary: {
			main: '#d6e5fb'
		}
	},
	typography: {
		h1: {fontSize: '1.2rem', fontWeight: 700},
		h2: {fontSize: '2rem'},
	},
});
