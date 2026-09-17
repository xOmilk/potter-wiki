import { useState, useEffect } from "react";
import { SpellContext } from "./SpellContext";
import type { Spell } from "../../types/SpellType";
import { fetchAllSpells } from "../../services/fetchSpells";

type SpellContextProviderProps = {
	children: React.ReactNode;
};

export function SpellContextProvider({ children }: SpellContextProviderProps) {
	const [allSpells, setAllSpells] = useState<Spell[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchAllSpells()
			.then(setAllSpells)
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<SpellContext.Provider
			value={{ allSpells: { value: allSpells, setAllSpells }, isLoading }}
		>
			{children}
		</SpellContext.Provider>
	);
}
