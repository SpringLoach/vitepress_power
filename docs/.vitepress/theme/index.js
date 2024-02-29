import DefaultTheme from 'vitepress/theme'
import './custom.css'

// todo 速改驼峰、大小写转换等
window.addEventListener('hashchange', () => {
    const el = document.getElementById('test')
    if (el) {
        el.addEventListener('click', () => {
            console.log('====-----123-----====', 123)
        })
    }
})

export default DefaultTheme