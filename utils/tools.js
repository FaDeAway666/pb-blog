export const classes = () => {}

// 防抖函数
export const debounce = (fn, delay) => {
  let timer = null
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}

export const throttle = (fn, inter) => {
  let timer = null
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
        timer = null
      }, inter)
    }
  }
}

export const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getStorage = key => {
  return JSON.parse(localStorage.getItem(key))
}
