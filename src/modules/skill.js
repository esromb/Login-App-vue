import axios from 'axios';
const state =  {
    skills: []
}
const getters =  {
    allSkills: state => state.skills
}
const mutations = {
    addSkills: (state, skill) => (state.skills.push(skill)),
    fetchSkills: (state, skills) => (state.skills = skills)
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
    async fetchSkills({commit}) {
        const response = await axios.get('skills');
        commit('fetchSkills', response.data['content']);

    }

}
export default {
    state,
    getters,
    mutations,
    actions
}