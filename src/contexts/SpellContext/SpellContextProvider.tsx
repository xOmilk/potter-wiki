import { useState, useEffect } from "react";
import { SpellContext } from "./SpellContext";
import type { Spell } from "../../types/SpellType";
import { fetchAllSpells } from "../../services/fetchSpells";

type SpellContextProviderProps = {
	children: React.ReactNode;
};

export function SpellContextProvider({ children }: SpellContextProviderProps) {
	const [allSpells, setAllSpells] = useState<Spell[]>([]);

	useEffect(() => {
		fetchAllSpells().then(setAllSpells);
	}, []);

	return (
		<SpellContext.Provider value={{ allSpells: { value: allSpells, setAllSpells } }}>
			{children}
		</SpellContext.Provider>
	);
}
