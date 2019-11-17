<template>
    <footer class="footer">
        <p class="copyright"> Cupcakes & Cookies 2013. Todos os direitos reservados.</p>
        <p class="privacy">Conheça a nossa <a href="">Política de Privacidade</a>.</p>
        <nav class="contact-us">
            <ul>
                <li><router-link to="/"><img src="../assets/Icons/facebook.png" class="fab fa-facebook-f" alt="facebook"></router-link></li>
                <li><router-link to="/"><img src="../assets/Icons/linkedin.png" class="fab fa-linkedin-in" alt="facebook"></router-link></li>
                <li><router-link to="/"><img src="../assets/Icons/twitter.png" class="fab fa-facebook-f" alt="twitter"></router-link></li>
            </ul>
        </nav>
    </footer>
</template>

<script>
export default {
    name: 'TheFooter'
}
</script>

<style lang="scss" scoped>

.footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 10px;
}

@media (min-width: 768px) and (max-width: 1023px) {
    // tablet
    .footer {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 2fr;
        padding: 10px;
    }
}

@media (min-width: 1024px) {
    .footer {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 50px);
        grid-template-areas: 
            'copyright . contact-us'
            'privacy . .';
        padding: 10px;
    }

    .copyright {
        // grid-row-start: 1;
        // grid-column-start: 1;
        grid-area: copyright;
    }

    .privacy {
        // grid-row-start: 2;
        // grid-column-start: 1;
        grid-area: privacy;
    }

    .nav {
        // grid-row-start: 1;
        // grid-column: 3;
        grid-area: contact-us;
    }
}

nav {
    ul {
        padding: 0px;
        margin: 0px;
        overflow: hidden;
    }
}

nav li {
    list-style-type: none;
    float: left;
}
</style>