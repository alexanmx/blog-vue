<template>
    <CabecalhoSite />
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
    <RodapeSite />
</template>

<script lang="ts">
import CabecalhoSite from '@/components/layout/CabecalhoSite.vue';
import RodapeSite from '@/components/layout/RodapeSite.vue';
import BarraLateral from '@/components/layout/BarraLateral.vue';

export default {
    name: 'App',
    components: {
        CabecalhoSite,
        RodapeSite,
        BarraLateral
    }
};
</script>