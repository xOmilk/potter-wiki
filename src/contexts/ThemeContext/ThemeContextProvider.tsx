import React, { useState } from "react";
import {
	ThemeContext,
	type ThemeType,
	type TypesOfThemes,
} from "./ThemeContext";

type ThemeContextProviderProps = {
	children: React.ReactNode;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
	const [state, setState] = useState<ThemeType>(() => {
		const storageTheme = (localStorage.getItem("potterwiki-theme") ??
			"classic") as TypesOfThemes;
		return { type: storageTheme };
	});

	const theme = {
		value: state,
		setTheme: (newTheme: ThemeType) => {
			setState(newTheme);
			document.documentElement.setAttribute("data-theme", newTheme.type);
			localStorage.setItem("potterwiki-theme", newTheme.type);
		},
	};

	// Apply theme on mount
	React.useEffect(() => {
		document.documentElement.setAttribute("data-theme", state.type);
	}, [state.type]);

	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	);
}
