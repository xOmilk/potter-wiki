import { createContext } from "react";
import type { SpellType } from "../../types/SpellType";

export type SpellContextType = {
	allSpells: {
		value: SpellType[];
		setAllSpells: React.Dispatch<React.SetStateAction<SpellType[]>>;
	};
	selectedSpell: {
		value: SpellType | null;
		setSelectedSpell: React.Dispatch<React.SetStateAction<SpellType | null>>;
	};
};

export const defaultSpellValue: SpellContextType = {
	allSpells: {
		value: [],
		setAllSpells: () => {},
	},
	selectedSpell: {
		value: null,
		setSelectedSpell: () => {},
	},
};

export const SpellContext = createContext(defaultSpellValue);
