import { Route } from "react-router-dom";
import { PageRoutesNames } from "../../constants/PageRoutesName";
import { Movies } from "../../pages/MoviePage";

export function MovieRouter() {
	return (
		<Route path={PageRoutesNames.movies}>
			<Route index element={<Movies />}></Route>
		</Route>
	);
}
