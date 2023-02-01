<script setup>
import { useRealState } from "@/stores/realState";
import { ref, watchEffect } from "vue";
import PropertyDisplay from "@/components/PropertyDisplay.vue";
import FunnelComponent from "../components/FunnelComponent.vue";

const realState = useRealState();

const forSaleProperties = ref([]);

watchEffect(() => {
  forSaleProperties.value = realState.properties.filter((property) => {
    return (
      property.for_sale &&
      (realState.funnel.type === "all" ||
        property.type === realState.funnel.type) &&
      (realState.funnel.salePrice === "all" ||
        property.sale_price <= realState.funnel.salePrice) &&
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
  <section class="for-sale">
    <FunnelComponent />

    <main class="for-sale--main">
      <article
        v-if="forSaleProperties.length"
        v-for="property in forSaleProperties"
        :key="property.id"
      >
        <PropertyDisplay :property="property" />
      </article>
    </main>
  </section>
</template>

<style lang="scss">
.for-sale {
  background: linear-gradient(180deg, #171719 0%, #45454C 100%);

  &--main {
    padding: 0 60px;
  }
}
</style>
