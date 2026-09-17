import { Outlet, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../../layout/DefaultLayout";
import { PageRoutesNames } from "../../constants/PageRoutesName";
import { MovieContextProvider } from "../../contexts/MovieContext/MovieContextProvider";
import { SpellContextProvider } from "../../contexts/SpellContext/SpellContextProvider";
import { CharacterContextProvider } from "../../contexts/CharacterContext/CharacterContextProvider";
import { BookContextProvider } from "../../contexts/BookContext/BookContextProvider";
import { HomePage } from "../../pages/HomePage";
import { CharacterList } from "../../pages/Characters/CharacterList";
import { CharacterDetail } from "../../pages/Characters/CharacterDetail";
import { MovieList } from "../../pages/Movies/MovieList";
import { MovieDetail } from "../../pages/Movies/MovieDetail";
import { SpellList } from "../../pages/Spells/SpellList";
import { SpellDetail } from "../../pages/Spells/SpellDetail";
import { BookList } from "../../pages/Books/BookList";
import { BookDetail } from "../../pages/Books/BookDetail";

export function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path={PageRoutesNames.home} element={<HomePage />} />
				<Route
					path={PageRoutesNames.characters}
					element={
						<CharacterContextProvider>
							<Outlet />
						</CharacterContextProvider>
					}
				>
					<Route index element={<CharacterList />} />
					<Route path=":index" element={<CharacterDetail />} />
				</Route>
				<Route
					path={PageRoutesNames.movies}
					element={
						<MovieContextProvider>
							<Outlet />
						</MovieContextProvider>
					}
				>
					<Route index element={<MovieList />} />
					<Route path=":id" element={<MovieDetail />} />
				</Route>
				<Route
					path={PageRoutesNames.spells}
					element={
						<SpellContextProvider>
							<Outlet />
						</SpellContextProvider>
					}
				>
					<Route index element={<SpellList />} />
					<Route path=":spellName" element={<SpellDetail />} />
				</Route>
				<Route
					path={PageRoutesNames.books}
					element={
						<BookContextProvider>
							<Outlet />
						</BookContextProvider>
					}
				>
					<Route index element={<BookList />} />
					<Route path=":id" element={<BookDetail />} />
				</Route>
			</Route>
		</Routes>
	);
}
