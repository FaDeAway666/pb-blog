/** @type {import('tailwindcss').Config} */
// 该方法是为了颜色基础类可以提供设置透明度的快捷方式，
function withOpacityValue(variable) {
  // 返回一个函数，透明度为可选参数，这样在 HTML 元素中使用颜色基础类时，既可以采用 text-blue-500 方式，也支持 text-blue-500/20 快捷同时设置透明度的形式
  return ({ opacityValue }) => {
    console.log(variable, opacityValue)
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgba(var(${variable}), ${opacityValue})`
  }
}

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          base: withOpacityValue('--color-bg-base')
        }
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)'
        }
      }
    }
  },
  plugins: []
}
