import { useParams, useNavigate } from "react-router-dom";
import { useCharacterContext } from "../../../contexts/CharacterContext/useCharacterContext";
import { FeedbackMessage } from "../../../components/FeedbackMessage";
import { BackButton } from "../../../components/BackButton";

import styles from "./styles.module.css";

export function CharacterDetail() {
	const { index } = useParams<{ index: string }>();
	const navigate = useNavigate();
	const { allCharacters } = useCharacterContext();

	const character = allCharacters.value.find(
		(char) => char.index === Number(index)
	);

	if (!character) {
		return (
			<FeedbackMessage
				titleMessage="Personagem não encontrado"
				tipMessage="Volte à página anterior e tente novamente"
			/>
		);
	}

	return (
		<div className={styles.content}>
			<BackButton onClick={() => navigate("/characters")} />
			<div className={styles.card}>
				<img
					src={character.image}
					alt={`${character.fullName} em Harry Potter`}
					className={styles.img}
				/>
				<div className={styles.info}>
					<h3>{character.fullName}</h3>
					<p>
						<strong>Apelido:</strong> {character.nickname}
					</p>
					<p>
						<strong>Data de nascimento:</strong> {character.birthdate}
					</p>
					<p>
						<strong>Interpretado por:</strong> {character.interpretedBy}
					</p>
					<p>
						<strong>Casa:</strong> {character.hogwartsHouse}
					</p>
				</div>
			</div>
		</div>
	);
}
