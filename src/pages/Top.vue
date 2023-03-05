<script setup lang="ts">
import { onMounted, computed } from 'vue'

import { useFetchApi } from '@/store'

const fetchApi = useFetchApi()

onMounted(async () => {
  await fetchApi.fetchPokemonById(1)
  console.log(fetchApi.pokemonData)

  await fetchApi.fetchPokemonByPagination(0)
  console.log(fetchApi.pokemonsData)
})

const getPokemons = computed(
  () => fetchApi.pokemonsData.results
)
</script>

<template>
  <h1>Poke Api App</h1>

  <div
    v-for="(pokemon, index) in getPokemons"
    :key="index"
  >
    {{ pokemon }}
  </div>
</template>
