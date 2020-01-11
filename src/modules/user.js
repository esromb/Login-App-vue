import axios from 'axios';
export default {
    state: {},
    getters: {},
    mutations: {},
    actions: {
        LOGIN: ({commit}, payload) => {
            return new Promise((resolve, reject) => {
                axios.post('login')

            });

        }
    }
}