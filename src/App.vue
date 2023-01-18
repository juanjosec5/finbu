<script setup>
import SignInForm from './components/signInForm.vue';
import Auth from './firebase/auth';
</script>

<template>
  <sign-in-form></sign-in-form>
  <button @click="Auth.googleLogin">login with Google</button>
  <button @click="Auth.signOut">Sign out</button>
</template>

<style lang="scss">
</style>
