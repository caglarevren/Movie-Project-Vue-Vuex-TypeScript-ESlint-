<template>
  <div>Movies</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Movies',

  /* -------------------------------- LifeCycle ------------------------------- */
  mounted() {
    this.$store.dispatch('fetchMovies')
  },

  /* -------------------------------- Computed -------------------------------- */
  computed: {
    getMovies(): [] {
      return this.$store.state.movies
    },
  },
})
</script>
