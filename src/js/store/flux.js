import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: {},
			vehicles: {},
			planets: {},
			peopleDetails: [],
			vehiclesDetails: [],
			planetsDetails: [],
			favorites: [],
		},
		actions: {
			getAllPeople: () => {
				fetch("https://www.swapi.tech/api/people/", {
					method: 'GET',
					headers: {
						'Content-type': 'application/json'
					},
				},)
					.then(data => data.json())
					.then(data => setStore({ people: data }))
					.catch(err => console.error(err))


			},

			getPeopleDetails: (uid) => {
				fetch(`https://www.swapi.tech/api/people/${uid}`)
					.then((response) => response.json())
					.then((response) => { setStore({ peopleDetails: response }) })
			},

			getAllVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/", {
					method: 'GET',
					headers: {
						'Content-type': 'application/json'
					},
				},)
					.then(data => data.json())
					.then(data => setStore({ vehicles: data }))
					.catch(err => console.error(err))

			},
			getVehiclesDetails: (uid) => {
				fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
					.then((response) => response.json())
					.then((response) => { setStore({ vehiclesDetails: response }) })
			},

			getAllPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/", {
					method: 'GET',
					headers: {
						'Content-type': 'application/json'
					},
				},)
					.then(data => data.json())
					.then(data => setStore({ planets: data }))
					.catch(err => console.error(err))
			},

			getPlanetsDetails: (uid) => {
				fetch(`https://www.swapi.tech/api/planets/${uid}`)
					.then((response) => response.json())
					.then((response) => { setStore({ planetsDetails: response }) })
			},






		}
	};
};

export default getState;
