<template>
    <div id="app-navbar">
        <ul id="app-navbar-content">
            <li>
                <!-- TODO: fix button layouts in navbar -->
                <a class="app-navbar-button" href="/">BLOG</a>
                |
                <a class="app-navbar-button">{{title}}</a>
                |
                <a class="app-navbar-button" href="/about">ABOUT ME</a>
            </li>
            <li>
                <div id="navbar-locales-menu">
                    <button id="locale-en" class="locale-button">EN</button>
                    <button id="locale-pt" class="locale-button">PT</button>
                    <button id="locale-fr" class="locale-button">FR</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data () {
        return {
            title: "ERICKR.DEV"
        }
    }
}
</script>
