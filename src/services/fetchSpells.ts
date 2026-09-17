import type { Spell, SpellsResponse } from "../types/SpellType";

const API_URL = "https://api.potterdb.com/v1/spells";

export async function fetchAllSpells(): Promise<Spell[]> {
	const allSpells: Spell[] = [];
	let page = 1;

	while (true) {
		const response = await fetch(`${API_URL}?page[number]=${page}&page[size]=100`);
		if (!response.ok) throw new Error("Erro ao buscar feitiços");
		const data: SpellsResponse = await response.json();
		allSpells.push(...data.data);
		if (!data.meta.pagination.next) break;
		page++;
	}

	return allSpells;
}

export async function fetchSpellBySlug(slug: string): Promise<Spell | null> {
	const response = await fetch(`${API_URL}/${slug}`);
	if (!response.ok) return null;
	const data: { data: Spell } = await response.json();
	return data.data ?? null;
}
