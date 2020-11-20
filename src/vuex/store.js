import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
        async POST_AUTORIZED_USER(_, user) {
            await axios.post('http://localhost:3000/users', user)
        }
    },
    getters: {}
});

export default store;