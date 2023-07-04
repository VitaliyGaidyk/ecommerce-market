import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "remixicon/fonts/remixicon.css";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme";
import {Provider} from "react-redux";
import {store} from "./app/store";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<ToastContainer
						theme="dark"
						position="top-right"
						autoClose={2000}
						closeOnClick
						pauseOnHover={false}
					/>
					<App/>
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);

