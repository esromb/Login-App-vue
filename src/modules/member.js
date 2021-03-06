import axios from 'axios';
const state =  {
    teamMembers: []
}
const getters =  {
    allTeamMembers: state => state.teamMembers
}
const mutations = {
    addTeamMember: (state, teamMember) => (state.teamMembers.push(teamMember)),
    fetchTeamMembers:  (state, teamMembers) => (state.teamMembers = teamMembers)
}

const actions = {
    addTeamMember: ({commit}, payload) => {
        return new Promise((resolve, reject) => {
            axios.post('teamMembers', payload)
            .then(({data, status}) => {
                if (status === 201) {
                    console.log(data);
                    commit('addTeamMembers', data);
                    resolve(true);
                }
            }).catch(error => {
                reject(error);
            })

        });

    },
    updateTeamMember: ({commit}, payload) => {
        return new Promise((resolve, reject) => {
            axios.put('teamMembers/' + payload.id, payload)
            .then(({data, status}) => {
                if (status === 204) {
                    console.log(data);
                    commit('addTeamMembers', data);
                    resolve(true);
                }
            }).catch(error => {
                reject(error);
            })

        });
    },
    async fetchTeamMembers({commit}) {
        const response = await axios.get('teamMembers');
        const data = (response.data['page']['totalElements'] > 0) ? response.data['content']: [];
        commit('fetchTeamMembers', data);
    }

}
export default {
    state,
    getters,
    mutations,
    actions
}