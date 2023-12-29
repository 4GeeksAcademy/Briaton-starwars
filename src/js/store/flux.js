const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			personaje: {}
		},
		actions: {
			obtenerPlanetas: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/planets/")
					const data = await response.json()
					console.log(data)
					setStore({ planetas: data.results })

				} catch (error) {
					console.log(error)
				}
			},
			obtenerPersonajes: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/people")
					const data = await response.json()
					console.log(data)
					setStore({ personajes: data.results })
				} catch (error) {
					console.log(error)
				}
			},
			obtenerPersonajeIndividual: async (id) => {
				try {
					const response = await fetch("https://swapi.dev/api/people/"+id)
					const data = await response.json()
					console.log(data)
					setStore({ personaje: data })
				} catch (error) {
					console.log(error)
				}
			}
		}
	};
};

export default getState;
