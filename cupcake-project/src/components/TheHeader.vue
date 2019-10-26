<template>
    <header>
        <div class="header-container">
            <img src="static/logo.jpg" alt="logo" class="logo">
            <router-link to="/" class="logo"></router-link>
            <h1 class="header-title titles">CUPCAKES<br/><span class="ampersand">&</span>COOKIES</h1>
            <nav>
                <ul>
                    <router-link to="/">Home</router-link>
                    <li><router-link to="/"><i class="fas fa-home fa-fw" alt="home">Home</i></router-link></li>
                    <li><router-link to="/"><i class="fas fa-location-arrow fa-fw" alt="location">Location</i></router-link></li>
                    <li><router-link to="/"><i class="fas fa-bars fa-fw" alt="bars">Bars</i></router-link></li>
                    <li><router-link to="/"><i class="fas fa-question fa-fw" alt="faq">FAQ</i></router-link></li>
                    <li><router-link to="/"><i class="fas fa-user-alt fa-fw" alt="login" data-toggle="modal" data-target="#exampleModal">Login</i></router-link></li>
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

</style>