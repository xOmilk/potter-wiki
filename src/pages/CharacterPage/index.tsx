import { useMemo, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { SearchDefault } from "../../components/SearchDefault";
import { Container } from "../../components/Container";
import { SetAllCharacters } from "./SetAllCharacters";
import { useCharacterContext } from "../../contexts/CharacterContext/useCharacterContext";

CharactersComponents.SetAllCharacters = SetAllCharacters;

function CharactersComponents() {
	const [searchValue, setSearchValue] = useState("");
	const { index } = useParams();

	const { allCharacters } = useCharacterContext();

	function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
		const text = e.target.value;
		setSearchValue(text);
	}

	const filteredCharacters = useMemo(() => {
		return allCharacters.value.filter((character) => {
			return character.fullName
				.toLowerCase()
				.includes(searchValue.toLowerCase());
		});
	}, [allCharacters.value, searchValue]);

	// If a character index is in the URL, show the nested route (detail view)
	if (index) {
		return <Outlet />;
	}

	// Otherwise show the list view
	return (
		<Container>
			<SearchDefault>
				<SearchDefault.Input
					placeholder="Digite um personagem"
					idInputElement="SearchCharacter"
					value={searchValue}
					onChange={onChangeInput}
				/>
			</SearchDefault>

			<CharactersComponents.SetAllCharacters
				filteredCharacters={filteredCharacters}
			/>
		</Container>
	);
}

export function CharactersPage() {
	return <CharactersComponents />;
}
