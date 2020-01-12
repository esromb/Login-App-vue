import axios from 'axios';
const state =  {
    roles: []
}
const getters =  {
    getRoles: state => state.roles
}
const mutations = {
    addRoles: (state, role) => (state.roles.push(role))
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
    fetchRoles: ({commit}) => {
        return new Promise((resolve, reject) => {
            axios.get('roles')
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

    }

}
export default {
    state,
    getters,
    mutations,
    actions
}