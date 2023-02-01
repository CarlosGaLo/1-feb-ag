<script setup>
import { useRealState } from "@/stores/realState";
import { ref, watchEffect } from "vue";
import PropertyDisplay from "@/components/PropertyDisplay.vue";
import FunnelComponent from "../components/FunnelComponent.vue";

const realState = useRealState();

const forRentProperties = ref([]);

watchEffect(() => {
  forRentProperties.value = realState.properties.filter((property) => {
    return (
      property.for_rent &&
      (realState.funnel.type === "all" ||
        property.type === realState.funnel.type) &&
      (realState.funnel.rentPrice === "all" ||
        property.rent_price <= realState.funnel.rentPrice) &&
      property.rooms >= realState.funnel.rooms &&
      (realState.funnel.search === "" ||
        property.title
          .toLowerCase()
          .trim()
          .includes(realState.funnel.search.toLowerCase().trim()) ||
        property.ref
          .toLowerCase()
          .trim()
          .includes(realState.funnel.search.toLowerCase().trim()) ||
        property.location
          .toLowerCase()
          .trim()
          .includes(realState.funnel.search.toLowerCase().trim()))
    );
  });
});
</script>

<template>
  <section class="for-rent">
    <FunnelComponent />

    <main class="for-rent--main">
      <template
        v-if="forRentProperties.length"
        v-for="property in forRentProperties"
        :key="property.id"
      >
        <PropertyDisplay :property="property" />
      </template>
    </main>
  </section>
</template>

<style lang="scss">
.for-rent {
  background: linear-gradient(180deg, #171719 0%, #45454C 100%);

  &--main {
    padding: 0 60px;
  }
}
</style>
