import axios from 'axios'
import { store } from '@/store/index.js'

// axios 인스턴스 생성
const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {'x-access-token': store.state.token},
  timeout: 1000
})

const request = (url, data) => {

}
const onUnauthroized = () => {
  alert("사용자 인증에 실패했습니다.")
  ㄱ  
}

const modules = {
  getAPI (params) {
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
  }
} 

// get request
// instance.get.interceptors.request.use(
//   function (config) {

//     return config
//   },
//   function (error) {
    
//     return Promise.reject(error)
//   }
// )
// // get response
// instance.get.interceptors.response.use(
//   function (config) {
    
//     return config
//   },
//   function (error) {

//     return error
//   }
// )



// // post request
// instance.post.interceptors.request.use(
//   function (config) {
    
//     return config
//   },
//   function (error) {
    
//     return Promise.reject(error)
//   }
// )
// // post response
// instance.post.interceptors.response.use(
//   function (config) {

//     return config
//   },
//   function (error) {

//     return error
//   }
// )

// // put request
// instance.put.interceptors.request.use(
//   function (config) {
//     config.headers['content-type'] = 'application/json'

//     return config
//   },
//   function (error) {
    
//     return Promise.reject(error)
//   }
// )
// // put response
// instance.put.interceptors.response.use(
//   function (config) {

//     return config
//   },
//   function (error) {

//     return error
//   }
// )

// // delete request
// instance.delete.interceptors.request.use(
//   function (config) {

//     return config
//   },
//   function (error) {

//     return Promise.reject(error)
//   }
// )
// // delete response
// instance.delete.interceptors.response.use(
//   function (config) {

//     return config
//   },
//   function (error) {
    
//     return error
//   }
// )

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

export default modules