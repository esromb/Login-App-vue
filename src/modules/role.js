import axios from 'axios';
const state =  {
    roles: []
}
const getters =  {
    allRoles: state => state.roles
}
const mutations = {
    addRoles: (state, role) => (state.roles.push(role)),
    fetchRoles:  (state, roles) => (state.roles = roles)
}

const actions = {
    addRole: ({commit}, payload) => {
        return new Promise((resolve, reject) => {
            axios.post('roles', payload)
            .then(({data, status}) => {
                if (status === 201) {
                    console.log(data);
                    commit('addRoles', data);
                    resolve(true);
                }
            }).catch(error => {
                reject(error);
            })

        });

    },
    async fetchRoles({commit}) {
        const response = await axios.get('roles');
        commit('fetchRoles', response.data['content']);
    }

}
export default {
    state,
    getters,
    mutations,
    actions
}