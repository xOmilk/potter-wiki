import { useEffect, useState } from "react";
import {
	CharacterContext,
	type CharacterContextType,
} from "./CharacterContext";
import type { CharacterType } from "../../types/CharacterType";
import { searchEspecificCharacter } from "../../services/fetchAllCharacters";

type CharacterContextProviderProps = {
	children: React.ReactNode;
};

export function CharacterContextProvider({
	children,
}: CharacterContextProviderProps) {
	const [allCharacterState, setAllCharacterState] = useState<CharacterType[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const [especificCharacter, setEspecificCharacter] = useState<CharacterType>({
		fullName: "",
		nickname: "",
		hogwartsHouse: "",
		image: "",
		interpretedBy: "",
		birthdate: "",
		index: 0,
	});

	const CharacterStateValue: CharacterContextType = {
		allCharacters: {
			value: allCharacterState,
			setAllCharacters: setAllCharacterState,
		},
		especificCharacter: {
			value: especificCharacter,
			setEspecificCharacter,
		},
		isLoading,
	};

	useEffect(() => {
		async function fetchAllCharacters() {
			try {
				const response = await searchEspecificCharacter("");
				if (Array.isArray(response)) {
					setAllCharacterState([...response]);
				} else {
					setAllCharacterState([response]);
				}
			} finally {
				setIsLoading(false);
			}
		}
		fetchAllCharacters();
	}, []);

	return (
		<CharacterContext.Provider value={CharacterStateValue}>
			{children}
		</CharacterContext.Provider>
	);
}
