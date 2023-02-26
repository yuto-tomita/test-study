import { defineStore } from 'pinia'

export const useFetchApi = defineStore({
  id: 'useFetchApi',
  state: (): {
    pokemonData: any
    pokemonsData: any
  } => {
    return {
      pokemonData: [],
      pokemonsData: [],
    }
  },
  actions: {
    /**
     * @description
     * ポケモン図鑑IDをもとにポケモンの情報を取得するAPIをリクエストする
     */
    async fetchPokemonById(id: number) {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      )

      if (res.ok) {
        this.pokemonData = await res.json()
      } else {
        throw new Error('')
      }
    },
    /**
     * @description
     * 20件ごとのポケモンデータを取得する
     */
    async fetchPokemonByPagination(id: number) {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${id}`
      )

      if (res.ok) {
        this.pokemonsData = await res.json()
      }
    },
  },
})
