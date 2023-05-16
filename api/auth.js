import request from 'utils/request'
import API from 'constant/api/auth'

export function login(params) {
  let { method, url } = API.LOGIN
  return request[method](url, params).then(res => {
    console.log(res, 'result')
    if (res.success) {
      return res.result
    } else throw Error(res.msg)
  })
}
