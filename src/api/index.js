import { getResource } from "../helpers/helpers";

export default class StarDbAPIService {
	_apiBase = "https://swapi.dev/api";
	peopleUrl = this._apiBase + "/people";
	planetsUrl = this._apiBase + "/planets";
	starshipUrl = this._apiBase + "/starships";
	imageBaseUrl = "https://starwars-visualguide.com//assets/img";
	async getPeople() {
		const people = (await getResource(this.peopleUrl)).results;
		return people.map((person) => this._transformPerson(person));
	}
	async getPersonById(id) {
		const person = await getResource(`${this.peopleUrl}/${id}`);
		return this._transformPerson(person);
	}
	async getPlanets() {
		const planets = await getResource(this.planetsUrl)
		return planets.map((planet) => this._transformPlanet(planet));
	}
	async getPlanetById(id) {
		const planet = await getResource(`${this.planetsUrl}/${id}`);
		return this._transformPlanet(planet);
	}
	async getStarship() {
		return await getResource(this.starshipUrl);
	}
	async getStarshipById(id) {
		return await getResource(`${this.starshipUrl}/${id}`);
	}
	_extractId(item) {
		const urlRegex = /\/([0-9]*)\/$/;
		return item.url.match(urlRegex)[1];
	}
	_transformPlanet = (planet) => {
		return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter
		}
	}
	_transformPerson = (person) => {
		return {
			id: this._extractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color
		}
	}
}