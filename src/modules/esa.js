import axios from 'axios';
const state =  {
    esas: []
}
const getters =  {
    allESAs: state => state.esas
}
const mutations = {
    addESA: (state, esa) => (state.esas.push(esa)),
    fetchESAs:  (state, esas) => (state.esas = esas)
}

const actions = {
    addESA: ({commit}, payload) => {
        return new Promise((resolve, reject) => {
            axios.post('esas', payload)
            .then(({data, status}) => {
                if (status === 201) {
                    console.log(data);
                    commit('addESA', data);
                    resolve(true);
                }
            }).catch(error => {
                reject(error);
            })

        });

    },
    async fetchESAs({commit}) {
        const response = await axios.get('esas');
        commit('fetchESAs', response.data['content']);
    }

}
export default {
    state,
    getters,
    mutations,
    actions
}