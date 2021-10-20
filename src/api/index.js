import axios from 'axios'
import { store } from '@/store/index.js'

// axios 인스턴스 생성
const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'accesstoken': store.state.token
  },
  timeout: 1000
})

instance.interceptors.request.use(
  function (config) {
    // 요청직전에 호출되며, axios의 설정을 여기서 진행
    return config
  },
  function (error) {
    // 요청 에러직전에 호출
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    // 응답이 정상(200)일 경우 호출
    return response
  },
  function (error) {
    // 응답에 문제가 발생한(200을 제외한 나머지) 경우 호출
    return error
  }
)

export default instance