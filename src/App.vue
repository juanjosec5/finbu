<script setup>
import MainNavbar from './components/navbar.vue';
import Auth from './firebase/auth';
import { ref } from 'vue';
import * as store from './store';
import { useStore } from '@nanostores/vue';

const $loginState = useStore(store.loginState);
const $userEmail = useStore(store.userEmail);
//loginState.value inside script tag
//template tag uses loginState

// Auth.onLogin((user) => loginState.value = true);
// Auth.onLogout(() => loginState.value = false);
</script>

<template>
  <main-navbar></main-navbar>
  <router-view/>
</template>

<style lang="scss">
</style>
