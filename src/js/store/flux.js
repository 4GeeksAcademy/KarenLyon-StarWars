import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: {},
			vehicles: {},
			planets: {},
			character:[],
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
		
			getCharacter: (uid) => {
                    fetch(`https://www.swapi.tech/api/people/${uid}`)
					.then((response)=>response.json())
					.then((response)=> {setStore({character:response})})
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

			}
		}
	};
};

export default getState;
