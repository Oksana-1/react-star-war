import { getResource } from "../helpers/helpers";

export default class StarDbAPIService {
	_apiBase = "https://swapi.dev/api";
	peopleUrl = this._apiBase + "/people";
	planetsUrl = this._apiBase + "/planets";
	starshipUrl = this._apiBase + "/starships"
	async getPeople() {
		return await getResource(this.peopleUrl);
	}
	async getPersonById(id) {
		return await getResource(`${this.peopleUrl}/${id}`);
	}
	async getPlanets() {
		return await getResource(this.planetsUrl);
	}
	async getPlanetById(id) {
		return await getResource(`${this.planetsUrl}/${id}`);
	}
	async getStarship() {
		return await getResource(this.starshipUrl);
	}
	async getStarshipById(id) {
		return await getResource(`${this.starshipUrl}/${id}`);
	}
}