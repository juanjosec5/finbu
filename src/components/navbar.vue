<script setup>
  import { loginState } from '../store';
  import { useStore } from '@nanostores/vue';
  import { useRouter } from 'vue-router';

  import Auth from '../firebase/auth';

  const router = useRouter();
  const $loginState = useStore(loginState);

  function handleLogout() {
    Auth.signOut();
    router.push({name: 'home'})

  }
</script>

<template>
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li v-if="!$loginState">
      <router-link to="/login">Login</router-link>
    </li>
    <li>
      <router-link to="/dashboard">Dashboard</router-link>
    </li>
  </ul>
  <button v-if="$loginState" @click="handleLogout">Log out</button>
</template>