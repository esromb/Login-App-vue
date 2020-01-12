import axios from 'axios';
const state =  {
    ebses: []
}
const getters =  {
    allEBSes: state => state.ebses
}
const mutations = {
    addEBS: (state, ebs) => (state.ebses.push(ebs)),
    fetchEBSes:  (state, ebses) => (state.ebses = ebses)
}

const actions = {
    addEBS: ({commit}, payload) => {
        return new Promise((resolve, reject) => {
            axios.post('ebses', payload)
            .then(({data, status}) => {
                if (status === 201) {
                    console.log(data);
                    commit('addEBS', data);
                    resolve(true);
                }
            }).catch(error => {
                reject(error);
            })

        });

    },
    async fetchEBSes({commit}) {
        const response = await axios.get('esas');
        commit('fetchEBSes', response.data['content']);
    }

}
export default {
    state,
    getters,
    mutations,
    actions
}