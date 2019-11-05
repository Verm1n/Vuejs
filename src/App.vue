<template>
    <div id="app">
        <div id="nav">
            <router-link v-if="authenticated" to="/auth" v-on:click.native="logout()" replace>Logout</router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />
    </div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                mockAccount: [{"name":'student',"password":'123'},{"name":'professor',"password":'123'}]
                
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "auth" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style>
    body {
        background-color: #F0F0F0;
        height:2048px
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
       
        margin: auto;
    }
</style>