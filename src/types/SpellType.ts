export type SpellAttributes = {
	slug: string;
	name: string;
	category: string | null;
	creator: string | null;
	effect: string | null;
	hand: string | null;
	image: string | null;
	incantation: string | null;
	light: string | null;
	wiki: string | null;
};

export type Spell = {
	id: string;
	type: string;
	attributes: SpellAttributes;
};

export type SpellsResponse = {
	data: Spell[];
	meta: {
		pagination: {
			current: number;
			next: number | null;
			last: number;
			records: number;
		};
	};
};
