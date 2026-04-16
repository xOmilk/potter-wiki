import { useParams, useNavigate } from "react-router-dom";
import { useCharacterContext } from "../../../contexts/CharacterContext/useCharacterContext";
import { FeedbackMessage } from "../../../components/FeedbackMessage";

import styles from "./style.module.css";

export function SetEspecificCharacter() {
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
				tipMessage="Volte a página anterior e tente novamente"
			/>
		);
	}

	return (
		<section className={styles.content}>
			<button
				onClick={() => navigate("/characters")}
				className={styles.backButton}
			>
				← Voltar
			</button>
			<div className={styles.resume}>
				<img
					src={character.image}
					alt={`Imagem do ator ${character.interpretedBy} em harry potter`}
					title={`Imagem do ator ${character.interpretedBy} em harry potter`}
				/>
				<div className={styles.info}>
					<h3>{character.fullName}</h3>
					<p>Apelido: {character.nickname}</p>
					<p>Data de nascimento: {character.birthdate}</p>
					<p>Interpretado por: {character.interpretedBy}</p>
					<p>Casa pertencente: {character.hogwartsHouse}</p>
				</div>
			</div>
		</section>
	);
}
