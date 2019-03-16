import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000'

axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers.Authorization = localStorage.getItem('token')
    }
    return config
  },
  err => Promise.reject,
)

axios.interceptors.response.use(
  res => {
    if (res.headers.token) {
      localStorage.setItem('token', res.headers.token)
    }
    return res
  },
  err => {
    console.log(err)
    return Promise.reject(err)
  },
)
export default axios
