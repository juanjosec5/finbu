<script setup>
    import { ref } from 'vue';
    import Auth from '../firebase/auth';

    const email = ref('');
    const password = ref('');

    function onSubmit() {
        Auth.emailLogin(email.value, password.value)
    }
</script>

<template>
    <form @submit.prevent="onSubmit">
        <input type="text" id="email" placeholder="email" v-model="email">
        <input type="text" id="password" placeholder="password" v-model="password">
        <button type="submit">Login</button>
    </form>
</template>

<style lang="scss">

</style>
