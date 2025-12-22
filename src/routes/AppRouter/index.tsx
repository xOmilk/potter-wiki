import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../../layout/DefaultLayout";
import { PageRoutesNames } from "../../constants/PageRoutesName";
import { CharactersPage } from "../../pages/CharacterPage";
import { Movies } from "../../pages/MoviePage";
import { Spells } from "../../pages/Spells";
import { HomePage } from "../../pages/HomePage";

export function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path={PageRoutesNames.home} element={<HomePage />} />
				<Route
					path={PageRoutesNames.characters}
					element={<CharactersPage />}
				/>
				<Route path={PageRoutesNames.movies} element={<Movies />} />
				<Route path={PageRoutesNames.spells} element={<Spells />} />
			</Route>
		</Routes>
	);
}
