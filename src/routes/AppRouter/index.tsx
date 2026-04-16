import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../../layout/DefaultLayout";
import { PageRoutesNames } from "../../constants/PageRoutesName";
import { CharactersPage } from "../../pages/CharacterPage";
import { MovieContextProvider } from "../../contexts/MovieContext/MovieContextProvider";
import { SpellContextProvider } from "../../contexts/SpellContext/SpellContextProvider";
import { CharacterContextProvider } from "../../contexts/CharacterContext/CharacterContextProvider";
import { BookContextProvider } from "../../contexts/BookContext/BookContextProvider";
import { Movies } from "../../pages/MoviePage";
import { Spells } from "../../pages/Spells";
import { BooksPage } from "../../pages/BooksPage";
import { HomePage } from "../../pages/HomePage";
import { SetEspecificMovie } from "../../pages/MoviePage/SetEspecificMovie";
import { SetEspecificCharacter } from "../../pages/CharacterPage/SetEspecifCharacter";
import { SetEspecificSpell } from "../../pages/Spells/SetEspecificSpell";
import { SetEspecificBook } from "../../pages/BooksPage/SetEspecificBook";

export function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path={PageRoutesNames.home} element={<HomePage />} />
				<Route
					path={PageRoutesNames.characters}
					element={
						<CharacterContextProvider>
							<CharactersPage />
						</CharacterContextProvider>
					}
				>
					<Route path=":index" element={<SetEspecificCharacter />} />
				</Route>
				<Route
					path={PageRoutesNames.movies}
					element={
						<MovieContextProvider>
							<Movies />
						</MovieContextProvider>
					}
				>
					<Route path=":id" element={<SetEspecificMovie />} />
				</Route>
				<Route
					path={PageRoutesNames.spells}
					element={
						<SpellContextProvider>
							<Spells />
						</SpellContextProvider>
					}
				>
					<Route path=":spellName" element={<SetEspecificSpell />} />
				</Route>
				<Route
					path={PageRoutesNames.books}
					element={
						<BookContextProvider>
							<BooksPage />
						</BookContextProvider>
					}
				>
					<Route path=":id" element={<SetEspecificBook />} />
				</Route>
			</Route>
		</Routes>
	);
}
