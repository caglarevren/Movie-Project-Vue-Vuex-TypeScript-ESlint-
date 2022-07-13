import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { MoviesApi } from '@/common/constants'

Vue.use(Vuex)


export default new Vuex.Store({

  /* ---------------------------------- state --------------------------------- */
  state: {
    movies: []
  },

  /* --------------------------------- getters -------------------------------- */
  getters: {
  },

  /* -------------------------------- mutations ------------------------------- */
  mutations: {
    setMovies(state, payload) {
      state.movies = payload
    }
  },
  /* --------------------------------- actions -------------------------------- */
  actions: {
    async fetchMovies(context): Promise<void> {
      const apiKey = process.env.VUE_APP_MOVIES_API_KEY

      const response = await axios.get(
        `${MoviesApi.API_BASE_URL}discover/movie`,
        {
          params: {
            api_key: apiKey
          }
        }
      )
      
      context.commit('setMovies', response.data.results)
    }
  },
  
  /* --------------------------------- modules -------------------------------- */
  modules: {
  }
})
