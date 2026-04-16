import { useNavigate } from "react-router-dom";
import { BoxListItens } from "../../../components/BoxListItens";
import type { CharacterType } from "../../../types/CharacterType";

import styles from "./styles.module.css";

type SetAllCharacterProps = {
	filteredCharacters: CharacterType[];
};

export function SetAllCharacters({
	filteredCharacters: allCharacters,
}: SetAllCharacterProps) {
	const navigate = useNavigate();

	if (!allCharacters) return;

	const handleCharacterClick = (character: CharacterType) => {
		navigate(`/characters/${character.index}`);
	};

	return (
		<BoxListItens className={styles.container}>
			<section className={styles.listOfCharacters}>
				{allCharacters.length !== 0 &&
					allCharacters.map((character) => (
						<div
							key={character.index}
							className={styles.character}
							onClick={() => handleCharacterClick(character)}
						>
							<img src={character.image} alt="" />
							<div className={styles.info}>
								<h3>{character.fullName}</h3>
								<p>
									Apelido do personagem:{" "}
									<b>{character.nickname}</b>
								</p>
							</div>
						</div>
					))}
				{allCharacters.length === 0 && (
					<p>Você não digitou nenhum personagem valido.</p>
				)}
			</section>
		</BoxListItens>
	);
}
