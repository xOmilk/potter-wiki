import { useMemo, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Container } from "../../components/Container";
import { SearchDefault } from "../../components/SearchDefault";
import { useSpellContext } from "../../contexts/SpellContext/useSpellContext";
import { SetAllSpells } from "./SetAllSpells";

function SpellsComponents() {
	const [valueText, setValueText] = useState("");
	const { spellName } = useParams();
	const { allSpells } = useSpellContext();

	const filteredSpells = useMemo(() => {
		return allSpells.value.filter((spell) =>
			spell.spell.toLowerCase().includes(valueText.toLowerCase())
		);
	}, [allSpells.value, valueText]);

	function handleChangeTextFn(e: React.ChangeEvent<HTMLInputElement>) {
		setValueText(e.target.value);
	}

	// If a spell name is in the URL, show the nested route (detail view)
	if (spellName) {
		return <Outlet />;
	}

	// Otherwise show the list view
	return (
		<Container>
			<SearchDefault>
				<SearchDefault.Input
					idInputElement="spellSearch"
					placeholder="Digite um feitiço"
					value={valueText}
					onChange={(e) => handleChangeTextFn(e)}
				/>
			</SearchDefault>

			{filteredSpells && <SetAllSpells filteredSpells={filteredSpells} />}
		</Container>
	);
}

export function Spells() {
	return <SpellsComponents />;
}
