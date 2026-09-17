import { createContext } from "react";
import type { Spell } from "../../types/SpellType";

export type SpellContextType = {
	allSpells: {
		value: Spell[];
		setAllSpells: React.Dispatch<React.SetStateAction<Spell[]>>;
	};
	isLoading: boolean;
};

export const defaultSpellValue: SpellContextType = {
	allSpells: {
		value: [],
		setAllSpells: () => {},
	},
	isLoading: true,
};

export const SpellContext = createContext(defaultSpellValue);
