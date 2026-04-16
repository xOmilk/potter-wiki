import { useNavigate } from "react-router-dom";
import { BoxListItens } from "../../../components/BoxListItens";
import { formatSpellNameForUrl } from "../../../services/fetchSpells";
import type { SpellType } from "../../../types/SpellType";

import styles from "./styles.module.css";

type SetAllSpellsProps = {
	filteredSpells: SpellType[];
};

export function SetAllSpells({
	filteredSpells,
}: SetAllSpellsProps) {
	const navigate = useNavigate();

	const handleSpellClick = (spell: SpellType) => {
		navigate(`/spells/${encodeURIComponent(spell.spell)}`);
	};

	return (
		<BoxListItens>
			<div className={styles.containerList}>
				{filteredSpells.map((element) => (
					<div
						className={styles.listItem}
						key={element.spell}
						onClick={() => handleSpellClick(element)}
						style={{ cursor: "pointer" }}
					>
						<div>
							<img
								src={
									element.spell
										.toLowerCase()
										.match("wingardium")
										? `https://hogwartslegacy.wiki.fextralife.com/file/Hogwarts-Legacy/thumbnails/levioso_spell_hogwarts_legacy_wiki_95px.jpg`
										: `https://hogwartslegacy.wiki.fextralife.com/file/Hogwarts-Legacy/${formatSpellNameForUrl(
												element.spell
										  )}-hogwarts-legacy-wiki-guide.png`
								}
								onError={(e) => {
									(e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect fill="%23666" width="100" height="100"/></svg>';
								}}
							/>
						</div>
						<div className={styles.info}>
							<h3>{element.spell}</h3>
							<p>{element.use}</p>
							<p>{formatSpellNameForUrl(element.spell)}</p>
						</div>
					</div>
				))}
			</div>
		</BoxListItens>
	);
}
