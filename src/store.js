import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
    
    state: {

        token: null,
        id: null,
        name: null,
        role: null,
        email: null,
        nickname: null

    },
    
    getters: {},

    mutations: {
        login (state, item) {

            state.token = item.headers['x-access-token']
            state.id = item.data['id']
            state.name = item.data['name']
            state.role = item.data['role']
            state.email = item.data['email']
            state.nickname = item.data['nickname']
        
        }
    },

    actions: {
        login ({commit}, {id, password}) {

            const params = {
                "id": id,
                "password": password
            }
            const url = "http://localhost:8080/signin"

            return axios.post(url, JSON.stringify(params), {
                headers: { 'content-type': 'application/json' }
            }).then(res => {
                commit('login', res)
            })
            
        },
        logout ({commit}) {
            commit('logout')
        }
    }
})