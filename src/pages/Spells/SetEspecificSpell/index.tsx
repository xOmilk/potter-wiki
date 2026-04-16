import { useParams, useNavigate } from "react-router-dom";
import { useSpellContext } from "../../../contexts/SpellContext/useSpellContext";
import { FeedbackMessage } from "../../../components/FeedbackMessage";
import { BoxListItens } from "../../../components/BoxListItens";

import styles from "./styles.module.css";

export function SetEspecificSpell() {
	const { spellName } = useParams<{ spellName: string }>();
	const navigate = useNavigate();
	const { allSpells } = useSpellContext();

	const spell = allSpells.value.find(
		(s) => s.spell.toLowerCase() === spellName?.toLowerCase()
	);

	if (!spell) {
		return (
			<FeedbackMessage
				titleMessage="Feitiço não encontrado"
				tipMessage="Volte a página anterior e tente novamente"
			/>
		);
	}

	return (
		<BoxListItens>
			<button
				onClick={() => navigate("/spells")}
				className={styles.backButton}
			>
				← Voltar
			</button>
			<div className={styles.container}>
				<img
					src={
						spell.spell.toLowerCase().match("wingardium")
							? `https://hogwartslegacy.wiki.fextralife.com/file/Hogwarts-Legacy/thumbnails/levioso_spell_hogwarts_legacy_wiki_95px.jpg`
							: `https://hogwartslegacy.wiki.fextralife.com/file/Hogwarts-Legacy/${spell.spell
									.toLowerCase()
									.replace(/\s+/g, "-")
									.replace(/[^\w-]/g, "")}-hogwarts-legacy-wiki-guide.png`
					}
					onError={(e) => {
						(e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="%23666" width="200" height="200"/><text x="50%" y="50%" text-anchor="middle" fill="white">Imagem indisponível</text></svg>';
					}}
					alt={spell.spell}
				/>
				<div className={styles.info}>
					<h3>{spell.spell}</h3>
					<p>
						<strong>Uso:</strong> {spell.use}
					</p>
					<p>
						<strong>Fonte:</strong> {spell.source}
					</p>
				</div>
			</div>
		</BoxListItens>
	);
}
