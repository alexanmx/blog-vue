<template>
    <header class="container border-bottom">

        <nav class="navbar navbar-expand-lg py-4">
            <div class="container-fluid">
                <a class="navbar-brand fw-bold text-primary" href="/">{{ dadosSite?.titulo }}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">{{ dadosSite?.titulo }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav">
                            <li class="nav-item" v-for="(item, index) in menuCabecalho" :key="index">
                                <a class="nav-link fw-bold" :href="item.url">{{ item.nome }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PropType } from 'vue';

export default defineComponent({
    name: 'CabecalhoSite',
    props: {
        dadosSite: {
            type: Object as PropType<{ titulo: string; descricao: string; } | null>,
            default: () => null
        },
        menuCabecalho: {
            type: Object,
            required: true,
            default: () => ({})
        }
    }
});
</script>