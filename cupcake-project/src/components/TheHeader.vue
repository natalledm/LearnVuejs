<template>
    <header>
        <div class="header-container">
            <img src="../assets/cupcake_cookies.png" alt="logo" class="logo">
            <router-link to="/" class="logo"></router-link>
            <nav>
                <ul>
                    <router-link to="/">Home</router-link>
                    <li><router-link to="/"><img src="../assets/Icons/house.png" class="fas fa-home fa-fw" alt="home"></router-link></li>
                    <li><router-link to="/"><img src="../assets/Icons/compass-arrow.png" class="fas fa-location-arrow fa-fw" alt="location"></router-link></li>
                    <li><router-link to="/"><img src="../assets/Icons/file.png" class="fas fa-bars fa-fw" alt="bars"></router-link></li>
                    <li><router-link to="/"><img src="../assets/Icons/question-mark.png" class="fas fa-question fa-fw" alt="faq"></router-link></li>
                    <li><router-link to="/"><img src="../assets/Icons/person.png" class="fas fa-user-alt fa-fw" alt="login" data-toggle="modal" data-target="#exampleModal"></router-link></li>
                    </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'TheHeader'
}
</script>

<style>

.header-container {
    display: flex;
    flex-wrap: nowrap;
}

nav {
    list-style-type: none;
    width: 300px;
    padding-right: 20px;
    align-self: center;
}

nav ul {
    padding-inline-start: 0;
}

nav li {
    display: inline-block;
    padding: 5%;
    background-color: rgb(238, 36, 97);
    border-radius: 50%;
}

nav li a {
    color: white;
}


</style>