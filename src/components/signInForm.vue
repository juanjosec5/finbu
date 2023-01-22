<script setup>
    import { ref } from 'vue';
    import Auth from '../firebase/auth';
    import { loginState } from '../store';
    import { useRouter } from 'vue-router';

    const email = ref('');
    const password = ref('');
    const router = useRouter();
    console.log(router);
    async function onSubmit() {
        await Auth.emailLogin(email.value, password.value);
        if (loginState.get()) {
            router.push({name:'dashboard'})
        }
    }
</script>

<template>
    <form @submit.prevent="onSubmit" class="form-wrapper input-element">
        <input
            type="text"
            id="email"
            placeholder="email"
            v-model="email"
            class="form-wrapper__input input-element">
        <input
            type="password"
            id="password"
            placeholder="password"
            v-model="password"
            class="form-wrapper__input input-element">
        <button type="submit" class="form-wrapper__btn input-element">Login</button>
    </form>
</template>

<style lang="scss">
    .input-element {
        border-radius: 8px;
        border: none;
        outline: none;
        padding: 12px;
        font-size: 1rem;
        color: #262626;
    }

    .form-wrapper {
        //border: 1px solid red;
        display: flex;
        gap: 10px;
        flex-direction: column;

        &__input {
            background-color: rgb(224, 224, 224);
        }

        &__btn {
            text-transform: uppercase;
            padding: 12px;
            background-color: #2b87e9;
            color: #fff;

            &:hover {
                cursor: pointer;
                background-color: #205c9c;
            }

            &:active {
                background-color: #123457;
            }
        }
    }
</style>
