<template>
    <header class="header">
            <router-link to="/" class="logo"><img src="../assets/cupcake_cookies.png" alt="logo" class="logo"></router-link>
            <nav class="nav">
                <ul>
                    <li><router-link to="/"><img src="../assets/Icons/house.png" class="fas fa-home fa-fw" alt="home"></router-link></li>
                    <li><router-link to="/"><img src="../assets/Icons/compass-arrow.png" class="fas fa-location-arrow fa-fw" alt="location"></router-link></li>
                    <li><router-link to="/"><img src="../assets/Icons/file.png" class="fas fa-bars fa-fw" alt="bars"></router-link></li>
                    <li><router-link to="/"><img src="../assets/Icons/question-mark.png" class="fas fa-question fa-fw" alt="faq"></router-link></li>
                    <li><router-link to="/"><img src="../assets/Icons/person.png" class="fas fa-user-alt fa-fw" alt="login" data-toggle="modal" data-target="#exampleModal"></router-link></li>
                </ul>
            </nav>
    </header>
</template>

<script>
export default {
    name: 'TheHeader'
}
</script>

<style lang="scss" scoped>

.header {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px;
    padding: 10px;
}

nav {
    width: 100%;
    ul {
        padding: 0px;
        margin: 0px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 10px;
    }
}

nav li {
    list-style-type: none;
    padding-inline-start: 0;
    background-color: rgb(238, 36, 97);
    border-radius: 50%;
}

@media (min-width: 768px) and (max-width: 1023px) {
    // tablet
    .header {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 2fr;
        padding: 10px;
    }
}

@media (min-width: 1024px) {
    .header {
        grid-template-areas: 
            'logo . menu';
        grid-template-rows: 1fr;
        grid-template-columns: auto 1fr auto;
        padding: 20px;
    }

    .logo {
        grid-area: logo;
    }

    .nav {
        grid-area: menu;
    }
}

</style>