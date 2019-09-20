<template>
    <div class="splash-screen">
        <div>
            <router-link to="Login"><img src="../../assets/images/lcc-logo.png" alt="LCC"></router-link>
            <P><b>LEKKI<br>CONCESSION<br>COMPANY</b></P>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Splash.vue",
        created(){
            setTimeout( () => this.$router.push({ path: '/Login'}), 3000);
        }
    }
</script>

<style scoped>

</style>