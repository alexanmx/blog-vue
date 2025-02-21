<template>
    <footer class="container bg-light border-top py-3">
        <p class="h5">{{ dadosSite?.titulo }}</p>
        <ul class="list-unstyled d-flex align-items-start flex-column flex-md-row gap-3">
            <li class="" v-for="(item, index) in menuRodape" :key="index">
                <a class="text-decoration-none fw-bold link-secondary" :href="item.url">{{ item.nome }}</a>
            </li>
        </ul>
    </footer>
</template>

<script lang="ts">
import { useMenu } from '@/composables/useJson';

export default {
    name: 'RodapeSite',
    setup() {
        const { dadosSite, menuRodape } = useMenu();

        return {
            dadosSite, menuRodape
        };
    }
};
</script>