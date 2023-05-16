import axios from 'axios'

let instance
function createAxiosInstance() {
  if (instance) return instance

  instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 5000,
    withCredentials: true
  })

  instance.interceptors.request.use(
    function (request) {
      if (request.method === 'get') {
        request.headers['Content-Type'] = 'application/json'
      } else if (request.method === 'post') {
        request.headers['Content-Type'] = 'application/json'
      }
      console.log(request, 'request')
      return request
    },
    function (err) {
      console.log(err)
    }
  )

  instance.interceptors.response.use(
    function (response) {
      console.log(response, 'response')
      return response.data
    },
    function (err) {
      console.log(err)
    }
  )

  return instance
}

export default createAxiosInstance()
