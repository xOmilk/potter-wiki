import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../../components/Container";
import { SearchDefault } from "../../../components/SearchDefault";
import { FeedbackMessage } from "../../../components/FeedbackMessage";
import { LoadingSpinner } from "../../../components/LoadingSpinner";
import { useCharacterContext } from "../../../contexts/CharacterContext/useCharacterContext";
import styles from "./styles.module.css";

export function CharacterList() {
	const [searchValue, setSearchValue] = useState("");
	const { allCharacters, isLoading } = useCharacterContext();
	const navigate = useNavigate();

	const filteredCharacters = useMemo(() => {
		return allCharacters.value.filter((character) =>
			character.fullName.toLowerCase().includes(searchValue.toLowerCase())
		);
	}, [allCharacters.value, searchValue]);

	if (isLoading) {
		return <LoadingSpinner text="Carregando personagens..." />;
	}

	return (
		<Container>
			<SearchDefault>
				<SearchDefault.Input
					placeholder="Digite um personagem"
					idInputElement="SearchCharacter"
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
			</SearchDefault>

			{filteredCharacters.length === 0 ? (
				<FeedbackMessage
					titleMessage="Nenhum personagem encontrado"
					tipMessage="Tente outra busca"
				/>
			) : (
				<div className={styles.listWrapper}>
					{filteredCharacters.map((character) => (
						<div
							key={character.index}
							className={styles.item}
							onClick={() => navigate(`/characters/${character.index}`)}
						>
							<img
								src={character.image}
								alt={character.fullName}
								className={styles.img}
							/>
							<div className={styles.info}>
								<h3>{character.fullName}</h3>
								<p>
									Apelido: <strong>{character.nickname}</strong>
								</p>
							</div>
						</div>
					))}
				</div>
			)}
		</Container>
	);
}
