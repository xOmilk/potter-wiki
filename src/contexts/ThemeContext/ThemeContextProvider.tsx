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

	const setTheme: React.Dispatch<React.SetStateAction<ThemeType>> = (newTheme) => {
		const resolvedTheme = typeof newTheme === "function" ? newTheme(state) : newTheme;
		setState(resolvedTheme);
		document.documentElement.setAttribute("data-theme", resolvedTheme.type);
		localStorage.setItem("potterwiki-theme", resolvedTheme.type);
	};

	const theme = {
		value: state,
		setTheme,
	};

	// Apply theme on mount
	React.useEffect(() => {
		document.documentElement.setAttribute("data-theme", state.type);
	}, [state.type]);

	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	);
}
