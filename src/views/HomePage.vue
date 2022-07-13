<template>
  <Movies />
</template>

<script lang="ts">
import Vue from 'vue'
import Movies from '@/components/movies/Movies.vue'

export default Vue.extend({
  name: 'HomePage',

  components: {
    Movies,
  },
})
</script>
