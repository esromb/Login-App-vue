import axios from 'axios';
const state =  {
    skills: []
}
const getters =  {
    getSkills: state => state.skills
}
const mutations = {
    addSkills: (state, skill) => (state.skills.push(skill))
}

const actions = {
     ADDSKILL: ({commit}, payload) => {
        return new Promise((resolve, reject) => {
            axios.post('skills', payload)
            .then(({data, status}) => {
                if (status === 201) {
                    console.log(data);
                    commit('addSkills', data);
                    resolve(true);
                }
            }).catch(error => {
                reject(error);
            })

        });

    },
    fetchSkills: ({commit}) => {
        return new Promise((resolve, reject) => {
            axios.get('skills')
            .then(({data, status}) => {
                if (status === 201) {
                    console.log(data);
                    commit('addSkills', data);
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