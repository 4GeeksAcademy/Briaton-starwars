const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			personaje: {},
			planeta: {},
			favoritos: []
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
					const response = await fetch("https://swapi.dev/api/people/" + id)
					const data = await response.json()
					console.log(data)
					setStore({ personaje: data })
				} catch (error) {
					console.log(error)
				}
			},
			obtenerPlanetaIndividual: async (id) => {
				try {
					const response = await fetch("https://swapi.dev/api/planets/" + id)
					const data = await response.json()
					console.log(data)
					setStore({ planeta: data })
				} catch (error) {
					console.log(error)
				}
			},
			agregarFavoritos: (nombre) => {
				const store = getStore()
				if (store.favoritos.includes(nombre)) {
					//borra el favorito si ya existe
					let aux = []
					aux = store.favoritos.filter((elemento) => elemento != nombre)
					setStore({ favoritos: aux })
				} else {
					setStore({ favoritos: [...store.favoritos, nombre] })
				}
			}
		}
	};
};

export default getState;
