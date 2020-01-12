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
            .then(({ data, status}) => {
                console.log(data);
                if (status === 200 && data == 'SUCCESS') {
                    commit('setUserLogin', true);
                    resolve(true);
                } else {
                    reject({});
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