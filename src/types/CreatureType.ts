export type CreatureType = {
	id: number;
	type: string;
	attributes: {
		related_to: string;
		name: string;
		skin_color: string;
		eye_color: string;
		mortality: string;
		img: string;
	};
};

export type CreaturesTypeResponseAPI = {
	data: CreatureType[];
};
