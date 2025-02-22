<template>
    <CabecalhoSite :menu-cabecalho="menuCabecalho" :dados-site="dadosSite" />
    <main class="container">
        <div class="row">
            <div class="col-lg-9">
                <RouterView name="Content"></RouterView>
            </div>
            <div class="col-lg-3 px-5 px-lg-0">
                <BarraLateral></BarraLateral>
            </div>
        </div>
    </main>
    <RodapeSite :menu-rodape="menuRodape" :dadosSite="dadosSite" />
</template>

<script lang="ts">
import CabecalhoSite from '@/components/layout/CabecalhoSite.vue';
import RodapeSite from '@/components/layout/RodapeSite.vue';
import BarraLateral from '@/components/layout/BarraLateral.vue';
import { useMenu } from '@/composables/useJson';

export default {
    name: 'App',
    components: {
        CabecalhoSite,
        RodapeSite,
        BarraLateral
    },
    setup() {
        const { dadosSite, menuRodape, menuCabecalho } = useMenu();

        return {
            dadosSite, menuRodape, menuCabecalho
        };
    }
};
</script>