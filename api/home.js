import request from 'utils/request'
import API from 'constant/api/home'

const URL = 'https://v1.hitokoto.cn/'
// 这个走后端请求，走前端代理会导致图标加载不出来，原因未知
export const getSentence = type => {
  let { method, url } = API.SENTENCE
  if (process.env.NODE_ENV !== 'development') url = URL
  console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')
  return request[method](url, {
    params: { type }
  }).then(res => {
    if (res) {
      return res
    } else throw Error(res.msg)
  })
}
