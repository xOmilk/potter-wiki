import { useNavigate } from "react-router-dom";
import { BoxListItens } from "../../../components/BoxListItens";
import type { Spell } from "../../../types/SpellType";
import { FeedbackMessage } from "../../../components/FeedbackMessage";
import { SpellImage } from "../../../components/SpellImage";

import styles from "./styles.module.css";

type SetAllSpellsProps = {
	filteredSpells: Spell[];
};

export function SetAllSpells({ filteredSpells }: SetAllSpellsProps) {
	const navigate = useNavigate();

	if (filteredSpells.length === 0) {
		return (
			<FeedbackMessage
				titleMessage="Nenhum feitiço encontrado"
				tipMessage="Tente outra busca"
			/>
		);
	}

	const handleSpellClick = (spell: Spell) => {
		navigate(`/spells/${spell.attributes.slug}`);
	};

	return (
		<BoxListItens>
			<div className={styles.containerList}>
				{filteredSpells.map((spell) => (
					<div
						className={styles.listItem}
						key={spell.id}
						onClick={() => handleSpellClick(spell)}
					>
						<SpellImage
							slug={spell.attributes.slug}
							potterDbImage={spell.attributes.image}
							alt={spell.attributes.name}
						/>
						<div className={styles.info}>
							<h3>{spell.attributes.name}</h3>
							{spell.attributes.incantation && (
								<p>
									<em>"{spell.attributes.incantation}"</em>
								</p>
							)}
							<p>{spell.attributes.effect ?? spell.attributes.category ?? "—"}</p>
						</div>
					</div>
				))}
			</div>
		</BoxListItens>
	);
}
