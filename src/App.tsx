import { BrowserRouter } from "react-router-dom";

import "./styles/theme.css";
import "./styles/globals.css";


import { Toaster } from "react-hot-toast";
import { AppRouter } from "./routes/AppRouter";

export function App() {
	return (
		<BrowserRouter>
			<AppRouter />
			<Toaster position="top-center" />
		</BrowserRouter>
	);
}
