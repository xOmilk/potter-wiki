import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { SearchDefault } from "../../components/SearchDefault";
import { searchCreatures } from "../../services/searchCreatures";
import type { CreatureType } from "../../types/CreatureType";

export function CreaturesPage() {
	const [searchValue, setSearchValue] = useState("");
	const [creatures, setCreatures] = useState<CreatureType[]>([]);

	useEffect(() => {
		searchCreatures().then((data) => {
			console.log("Dados recebidos:", data);

			if (data?.data) {
				setCreatures(data.data);
			}
		});
	}, []);

	console.log("Creatures no estado:", creatures);

	return (
		<Container>
			<SearchDefault>
				<SearchDefault.Input
					idInputElement=""
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					placeholder="Type the name of the creature"
				/>
			</SearchDefault>

			<p>Total de criaturas: {creatures.length}</p>

			{Array.isArray(creatures) &&
				creatures.map((creature) => (
					<div key={creature.id}>
						<img
							src={creature.attributes.img}
							alt={creature.attributes.name}
						/>
						<p>{creature.attributes.name}</p>
					</div>
				))}
		</Container>
	);
}
