import { toastHotAdapter } from "../../adapters/Toast/ToastHot/toastHotAdapter";
import { THEME_NAME } from "../../constants/themeConstant";
import type {
	ThemeType,
	TypesOfThemes,
} from "../../contexts/ThemeContext/ThemeContext";

export function handleClickAndToggleTheme(
	type: TypesOfThemes,
	setTheme: React.Dispatch<React.SetStateAction<ThemeType>>
) {
	const nextTheme = type === "classic" ? "light" : "classic";
	setTheme({ type: `${nextTheme}` });

	/* toastHotAdapter.info(`O tema atualmente é ${type}`); */
	toastHotAdapter.success(`O tema atualmente é: ${nextTheme}`);

	document.documentElement.setAttribute("data-theme", type);
	localStorage.setItem(THEME_NAME, type);
}
