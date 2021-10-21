import axios from 'axios'
import { router } from '../router/index.js'

const state = {
  token: null,
  id: null,
  name: null,
  role: null,
  email: null,
  nickname: null
}

const getters = {
  'token': state => state.token,
  'id': state => state.id,
  'email': state => state.email,
  'nickname': state => state.nickname,
  'role': state => state.role
}

const mutations = {
  login (state, item) {
      state.token = item.headers['accesstoken']
      state.id = item.data['id']
      state.role = item.data['role']
      state.email = item.data['email']
      state.nickname = item.data['nickname']
  },
  logout (state) {
      state.token = null
      state.id = null
      state.role = null
      state.email = null
      state.nickname = null
  }
}

const actions = {
  login ({commit}, {id, password}) {
      const params = {
          "email": id,
          "password": password
      }
      axios.post("http://localhost:8080/signin", JSON.stringify(params), {
        headers: { 'content-type': 'application/json' }
      }).then(res => {
        alert("정보가 확인되었습니다.\n환영합니다!")
        commit('login', res)
        router.push("/posts")
      }).catch(e => {
        console.log(e)
        alert("로그인 요청에 문제가 발생했습니다.")
      })

  },
  logout ({commit}) {
      commit('logout')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}