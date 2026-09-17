import { useNavigate } from "react-router-dom";

import { FaFilm, FaUserFriends, FaBook } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

import { GiMagicSwirl } from "react-icons/gi";
import { PageRoutesNames } from "../../constants/PageRoutesName";

import styles from "./styles.module.css";
import { handleClickAndToggleTheme } from "../../utils/Theme/handleClickAndToggleTheme";
import { useThemeContext } from "../../contexts/ThemeContext/useThemeContext";
import { MoonIcon, SunIcon } from "lucide-react";

export function Navbar() {
	const navigate = useNavigate();

	const {
		value: { type: theme },
		setTheme: setActualTheme,
	} = useThemeContext();

	const nextThemeIcon = {
		escuro: <SunIcon />,
		claro: <MoonIcon />,
	};

	return (
		<nav className={styles.listContainer}>
			<ul className={styles.ulList}>
				<li
					className={`${styles.item} ${styles.home}`}
					onClick={() => {
						navigate(PageRoutesNames.home);
					}}
				>
					<AiFillHome />
					<span>Home</span>
				</li>
				<li
					className={`${styles.item} ${styles.movies}`}
					onClick={() => {
						navigate(PageRoutesNames.movies);
					}}
				>
					<FaFilm />
					<span>Filmes</span>
				</li>
				<li
					className={`${styles.item} ${styles.characters}`}
					onClick={() => {
						navigate(PageRoutesNames.characters);
					}}
				>
					<FaUserFriends />
					<span>Personagens</span>
				</li>
				<li
					className={`${styles.item} ${styles.spells}`}
					onClick={() => {
						navigate(PageRoutesNames.spells);
					}}
				>
					<GiMagicSwirl />
					<span>Feitiços</span>
				</li>
				<li
					className={`${styles.item} ${styles.books}`}
					onClick={() => {
						navigate(PageRoutesNames.books);
					}}
				>
					<FaBook />
					<span>Livros</span>
				</li>
				<li
					className={`${styles.item} ${styles.theme}`}
					onClick={() =>
						handleClickAndToggleTheme(theme, setActualTheme)
					}
				>
					<div title={`Tema atual: ${theme}`}>
						{nextThemeIcon[theme]}
						{<span>Mudar Tema</span>}
					</div>
				</li>
			</ul>
		</nav>
	);
}
