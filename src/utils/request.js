import axios from 'axios'
import { Message } from 'element-ui'
// import store from '@/store'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
  withCredentials: false, // 表示跨域请求时是否需要凭证
})

const errorMsg = (msg) => {
  return Message({
    message: msg,
    type: 'error',
    duration: 5000,
  })
}

request.interceptors.request.use(
  (config) => {
    // console.log('baseurl', config.baseURL, process.env)
    // 跨域
    config.crossdomain = true
    if (localStorage.getItem('SESSIONKEY')) {
      config.headers.sessionkey = localStorage.getItem('SESSIONKEY')
    } else {
      // console.log('未登录')
    }
    return config
  },
  (error) => {
    console.log(error)
    Promise.reject(error)
  }
)

request.interceptors.response.use(
  (res) => {
    var code = res.status
    if (!code) {
      errorMsg('请求失败')
    } else if (code === 401) {
      errorMsg('请登录')
    } else if (code === 402 || code === 403) {
      errorMsg('登录失败，请重新登录')
    } else {
      return res.data
    }
  },
  (error) => {
    console.log(error)
    Promise.reject(error)
  }
)
export default request
