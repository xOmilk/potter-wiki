import { MoonIcon, SunIcon } from "lucide-react";
import { useThemeContext } from "../../contexts/ThemeContext/useThemeContext";
import { handleClickAndToggleTheme } from "../../utils/Theme/handleClickAndToggleTheme";

const nextThemeIcon = {
	classic: <SunIcon />,
	light: <MoonIcon />,
};

export function Theme() {
	const {
		value: { type: theme },
		setTheme: setActualTheme,
	} = useThemeContext();

	return (
		<div
			onClick={() => handleClickAndToggleTheme(theme, setActualTheme)}
			title={`Tema atual: ${theme}`}
		>
			{nextThemeIcon[theme]}
			{<p>Mudar Tema</p>}
		</div>
	);
}
