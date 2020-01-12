import axios from 'axios';
const state =  {
    userLoggedIn: false
}
const getters =  {
    isUserLogin: state => state.userLoggedIn
}
const mutations = {
    setUserLogin: (state, isUserLogin) => (state.userLoggedIn = isUserLogin)
}

const actions = {
    LOGIN: ({commit}, payload) => {
        return new Promise((resolve, reject) => {
            axios.post('login', payload)
            .then(({ status}) => {
                if (status === 200) {
                    commit('setUserLogin', true);
                    resolve(true);
                }
            }).catch(error => {
                reject(error);
            })

        });

    },
    SIGNUP: ({commit},payload) => {
        return new Promise((resolve, reject) => {
            axios.post('users', payload)
            .then(({ status}) => {
                if (status === 201) {
                    resolve(true);
                    commit;
                }
            }).catch(error => {
                reject(error);
            })

        });
    },
    logOut: ({commit}) => {
        commit('setUserLogin', false);
    }

}
export default {
    state,
    getters,
    mutations,
    actions
}