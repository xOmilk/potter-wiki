import { createContext } from "react";

export type TypesOfThemes = "claro" | "escuro";
export type ThemeType = {
	type: TypesOfThemes;
};

export type ThemeContextType = {
	value: ThemeType;
	setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};

export const themeContextDefaultValue: ThemeContextType = {
	value: { type: "escuro" },
	setTheme: () => {},
};

export const ThemeContext = createContext(themeContextDefaultValue);
