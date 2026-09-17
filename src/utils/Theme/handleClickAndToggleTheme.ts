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
	const nextTheme = type === "escuro" ? "claro" : "escuro";
	setTheme({ type: `${nextTheme}` });

	toastHotAdapter.success(`Você trocou para o tema ${nextTheme}`);

	document.documentElement.setAttribute("data-theme", nextTheme);
	localStorage.setItem(THEME_NAME, nextTheme);
}
