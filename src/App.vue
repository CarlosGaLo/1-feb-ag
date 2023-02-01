<script setup>
import { RouterView } from "vue-router";
import { useRealState } from "@/stores/realState";
import { useLangStore } from "@/stores/langStore";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

const realState = useRealState();
realState.fetchProperties();

const langStore = useLangStore();
langStore.setLangOptions();
</script>

<template>
  <HeaderComponent />

  <RouterView v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </RouterView>

  <FooterComponent />
</template>

<style lang="scss">
:root {
  --ga-green: #013d35;
  --ga-black: #013d35;
  --ga-gold: #b9ab7e;
  --ga-white: #eeede8;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
