import { createContext } from "react";
import type { Spell } from "../../types/SpellType";

export type SpellContextType = {
	allSpells: {
		value: Spell[];
		setAllSpells: React.Dispatch<React.SetStateAction<Spell[]>>;
	};
};

export const defaultSpellValue: SpellContextType = {
	allSpells: {
		value: [],
		setAllSpells: () => {},
	},
};

export const SpellContext = createContext(defaultSpellValue);
