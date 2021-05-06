import { createApp, h } from 'vue'
import './assets/styles.css'
import './assets/layouts.css'

const routes = {
    '/': 'Blog',
    '/about': 'AboutMe'
}

const AppRouter = {
    data: () => ({
        currentRoute: window.location.pathname
    }),

    computed: {
        ViewComponent () {
            const matchingPage = routes[this.currentRoute] || '404'
            console.log(matchingPage)
            return require(`./pages/${matchingPage}.vue`).default
        }
    },

    render () {
        return h(this.ViewComponent)
    },

    created () {
        window.addEventListener('popstate', () => {
            this.currentRoute = window.location.pathname
        })
    }
}

createApp(AppRouter).mount('#app')
