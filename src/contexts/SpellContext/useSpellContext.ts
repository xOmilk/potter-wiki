import { useContext } from "react";
import { SpellContext } from "./SpellContext";

export function useSpellContext() {
	const context = useContext(SpellContext);

	if (!context) {
		throw new Error(
			"useSpellContext deve ser utilizado dentro de SpellContextProvider"
		);
	}

	return context;
}
