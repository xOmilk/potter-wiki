import { useParams, useNavigate } from "react-router-dom";
import { useSpellContext } from "../../../contexts/SpellContext/useSpellContext";
import { FeedbackMessage } from "../../../components/FeedbackMessage";
import { SpellImage } from "../../../components/SpellImage";
import { BackButton } from "../../../components/BackButton";

import styles from "./styles.module.css";

export function SetEspecificSpell() {
	const { spellName: slug } = useParams<{ spellName: string }>();
	const navigate = useNavigate();
	const { allSpells } = useSpellContext();

	const spell = allSpells.value.find((s) => s.attributes.slug === slug);

	if (!spell) {
		return (
			<FeedbackMessage
				titleMessage="Feitiço não encontrado"
				tipMessage="Volte à página anterior e tente novamente"
			/>
		);
	}

	return (
		<div className={styles.content}>
			<BackButton onClick={() => navigate("/spells")} />
			<div className={styles.card}>
				<SpellImage
					slug={spell.attributes.slug}
					potterDbImage={spell.attributes.image}
					alt={spell.attributes.name}
					className={styles.img}
				/>
				<div className={styles.info}>
					<h3>{spell.attributes.name}</h3>
					{spell.attributes.incantation && (
						<p>
							<strong>Encantamento:</strong>{" "}
							<em>"{spell.attributes.incantation}"</em>
						</p>
					)}
					{spell.attributes.category && (
						<p>
							<strong>Categoria:</strong> {spell.attributes.category}
						</p>
					)}
					{spell.attributes.effect && (
						<p>
							<strong>Efeito:</strong> {spell.attributes.effect}
						</p>
					)}
					{spell.attributes.light && (
						<p>
							<strong>Luz:</strong> {spell.attributes.light}
						</p>
					)}
					{spell.attributes.creator && (
						<p>
							<strong>Criado por:</strong> {spell.attributes.creator}
						</p>
					)}
					{spell.attributes.wiki && (
						<p>
							<a href={spell.attributes.wiki} target="_blank" rel="noreferrer">
								Ver no Wiki
							</a>
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
