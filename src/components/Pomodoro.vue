<template>
    <div v-if="show">
        <p>POMODORO LOGO GOES HERE</p>
        <a href="https://github.com/ErickRDev/rusty-tomato">Repository</a>
        <p>Ipsum dolor..</p>
    </div>
</template>

<script>
export default {
    name: 'Pomodoro',
    props: [
        'show'
    ]
}
</script>