import { useState, useEffect } from "react";
import { SpellContext } from "./SpellContext";
import type { SpellType } from "../../types/SpellType";
import { getSpells } from "../../services/fetchSpells";

type SpellContextProviderProps = {
	children: React.ReactNode;
};

export function SpellContextProvider({
	children,
}: SpellContextProviderProps) {
	const [allSpells, setAllSpells] = useState<SpellType[]>([]);
	const [selectedSpell, setSelectedSpell] = useState<SpellType | null>(null);

	useEffect(() => {
		const fetchSpells = async () => {
			const spells = await getSpells();
			setAllSpells(spells);
		};
		fetchSpells();
	}, []);

	const contextValue = {
		allSpells: { value: allSpells, setAllSpells },
		selectedSpell: { value: selectedSpell, setSelectedSpell },
	};

	return (
		<SpellContext.Provider value={contextValue}>
			{children}
		</SpellContext.Provider>
	);
}
