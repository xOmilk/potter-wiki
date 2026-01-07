import axios from "axios";
import { API_CREATURES_URL } from "../constants/urls";
import type { CreaturesTypeResponseAPI } from "../types/CreatureType";

export async function searchCreatures() {
	try {
		const response = await axios.get<CreaturesTypeResponseAPI>(
			API_CREATURES_URL
		);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}
