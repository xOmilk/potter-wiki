import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../../components/Container";
import { SearchDefault } from "../../../components/SearchDefault";
import { FeedbackMessage } from "../../../components/FeedbackMessage";
import { LoadingSpinner } from "../../../components/LoadingSpinner";
import { SpellImage } from "../../../components/SpellImage";
import { useSpellContext } from "../../../contexts/SpellContext/useSpellContext";
import styles from "./styles.module.css";

export function SpellList() {
	const [valueText, setValueText] = useState("");
	const { allSpells, isLoading } = useSpellContext();
	const navigate = useNavigate();

	const filteredSpells = useMemo(() => {
		const search = valueText.toLowerCase();
		return allSpells.value.filter(
			(spell) =>
				spell.attributes.name.toLowerCase().includes(search) ||
				(spell.attributes.incantation?.toLowerCase().includes(search) ?? false)
		);
	}, [allSpells.value, valueText]);

	if (isLoading) {
		return <LoadingSpinner text="Carregando feitiços..." />;
	}

	return (
		<Container>
			<SearchDefault>
				<SearchDefault.Input
					idInputElement="spellSearch"
					placeholder="Digite um feitiço"
					value={valueText}
					onChange={(e) => setValueText(e.target.value)}
				/>
			</SearchDefault>

			{filteredSpells.length === 0 ? (
				<FeedbackMessage
					titleMessage="Nenhum feitiço encontrado"
					tipMessage="Tente outra busca"
				/>
			) : (
				<div className={styles.listWrapper}>
					{filteredSpells.map((spell) => (
						<div
							className={styles.item}
							key={spell.id}
							onClick={() => navigate(`/spells/${spell.attributes.slug}`)}
						>
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
										<em>"{spell.attributes.incantation}"</em>
									</p>
								)}
								<p>
									{spell.attributes.effect ??
										spell.attributes.category ??
										"—"}
								</p>
							</div>
						</div>
					))}
				</div>
			)}
		</Container>
	);
}
