import { createContext } from "react";
import type { CharacterType } from "../../types/CharacterType";

export type EspecificCharacter = {
	value: CharacterType;
	setEspecificCharacter: React.Dispatch<React.SetStateAction<CharacterType>>;
};

export type allCharacters = {
	value: CharacterType[];
	setAllCharacters: React.Dispatch<React.SetStateAction<CharacterType[]>>;
};

export type CharacterContextType = {
	especificCharacter: EspecificCharacter;
	allCharacters: allCharacters;
	isLoading: boolean;
};

export const defaultCharacterValue: CharacterContextType = {
	allCharacters: {
		value: [],
		setAllCharacters: () => {},
	},
	especificCharacter: {
		value: {
			fullName: "",
			nickname: "",
			hogwartsHouse: "",
			image: "",
			interpretedBy: "",
			birthdate: "",
			index: 0,
		},
		setEspecificCharacter: () => {},
	},
	isLoading: true,
};

export const CharacterContext = createContext(defaultCharacterValue);
