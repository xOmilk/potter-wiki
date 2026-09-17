import { useNavigate, useLocation } from "react-router-dom";
import { Home, Clapperboard, Users, Sparkles, BookOpen, Sun, Moon } from "lucide-react";
import { PageRoutesNames } from "../../constants/PageRoutesName";
import { handleClickAndToggleTheme } from "../../utils/Theme/handleClickAndToggleTheme";
import { useThemeContext } from "../../contexts/ThemeContext/useThemeContext";
import styles from "./styles.module.css";

const navItems = [
	{ route: PageRoutesNames.home, label: "Home", icon: Home },
	{ route: PageRoutesNames.movies, label: "Filmes", icon: Clapperboard },
	{ route: PageRoutesNames.characters, label: "Personagens", icon: Users },
	{ route: PageRoutesNames.spells, label: "Feitiços", icon: Sparkles },
	{ route: PageRoutesNames.books, label: "Livros", icon: BookOpen },
];

export function Navbar() {
	const navigate = useNavigate();
	const location = useLocation();

	const {
		value: { type: theme },
		setTheme: setActualTheme,
	} = useThemeContext();

	const ThemeIcon = theme === "escuro" ? Sun : Moon;

	return (
		<nav className={styles.navbar}>
			<ul className={styles.pill}>
				{navItems.map(({ route, label, icon: Icon }) => {
					const isActive = location.pathname === route || location.pathname.startsWith(route + "/");
					return (
						<li
							key={route}
							className={`${styles.item} ${isActive ? styles.active : ""}`}
							onClick={() => navigate(route)}
						>
							<Icon size={18} strokeWidth={1.75} />
							<span>{label}</span>
						</li>
					);
				})}

				<li className={`${styles.item} ${styles.divider}`} />

				<li
					className={styles.item}
					onClick={() => handleClickAndToggleTheme(theme, setActualTheme)}
					title={`Mudar para tema ${theme === "escuro" ? "claro" : "escuro"}`}
				>
					<ThemeIcon size={18} strokeWidth={1.75} />
					<span>{theme === "escuro" ? "Claro" : "Escuro"}</span>
				</li>
			</ul>
		</nav>
	);
}
