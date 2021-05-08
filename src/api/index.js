import { getResource } from "../helpers/helpers";

export default class StarDbAPIService {
	_apiBase = "https://swapi.dev/api";
	peopleUrl = this._apiBase + "/people";
	planetsUrl = this._apiBase + "/planets";
	starshipUrl = this._apiBase + "/starships";
	imageBaseUrl = "https://starwars-visualguide.com//assets/img";
	getPersonImageUrl = (id) => {
		return `${this.imageBaseUrl}/characters/${id}.jpg`;
	}
	getPlanetImageUrl = (id) => {
		return `${this.imageBaseUrl}/planets/${id}.jpg`;
	}
	getStarshipImageUrl = (id) => {
		return `${this.imageBaseUrl}/starships/${id}.jpg`;
	}
	getPeople = async () => {
		const people = (await getResource(this.peopleUrl)).results;
		return people.map((person) => this._transformPerson(person));
	}
	getPersonById = async (id) => {
		const person = await getResource(`${this.peopleUrl}/${id}`);
		return this._transformPerson(person);
	}
	getPlanets = async () => {
		const planets = (await getResource(this.planetsUrl)).results
		return planets.map((planet) => this._transformPlanet(planet));
	}
	getPlanetById = async (id) => {
		const planet = await getResource(`${this.planetsUrl}/${id}`);
		return this._transformPlanet(planet);
	}
	getStarships = async () => {
		const starships = (await getResource(this.starshipUrl)).results;
		return starships.map((starship) => this._transformStarship(starship));
	}
	getStarshipById = async (id) => {
		const starship = await getResource(`${this.starshipUrl}/${id}`);
		return this._transformStarship(starship);
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
	_transformStarship = (starship) => {
		return {
			id: this._extractId(starship),
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.costInCredits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargoCapacity
		}
	}
}