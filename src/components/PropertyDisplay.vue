<script setup>
import { useRoute } from "vue-router";
import { useLangStore } from "@/stores/langStore";
import { computed } from "vue";

const route = useRoute();
const props = defineProps({
  property: Object,
});

const langStore = useLangStore();
const salePrice = computed(() => {
  return parseInt(props.property.sale_price * langStore.langOptions.rateChange);
});
const rentPrice = computed(() => {
  return parseInt(props.property.rent_price * langStore.langOptions.rateChange);
});
</script>

<template>
  <article class="property-card">
    <img
      class="image"
      src="../assets/1-San-Roque-Villa-43.jpg"
      alt="property picture"
      loading="lazy"
    />
    <div class="features">
      <h2 class="title">{{ property.title }}</h2>
      <p class="address">{{ property.location }}</p>
      <p v-if="route.name === 'forSale'" class="price">
        {{ salePrice }} {{ langStore.langOptions.currencySymbol }}
      </p>
      <p v-if="route.name === 'forRent'" class="price">
        {{ rentPrice }} {{ langStore.langOptions.currencySymbol }}
      </p>
      <p class="description">{{ property.description }}</p>
      <ul class="detail-list">
        <li class="detail">
          <p class="detail--text detail--title">Ref.</p>
          <p class="detail--text detail--value">{{ property.ref }}</p>
        </li>
        <li class="detail">
          <p class="detail--text detail--title">Dorms.</p>
          <p class="detail--text detail--value">{{ property.rooms }}</p>
        </li>
        <li class="detail">
          <p class="detail--text detail--title">Baños</p>
          <p class="detail--text detail--value">{{ property.baths }}</p>
        </li>
        <li class="detail">
          <p class="detail--text detail--title">Construido</p>
          <p class="detail--text detail--value">
            {{ property.built_area }} m<sup>2</sup>
          </p>
        </li>
        <li class="detail">
          <p class="detail--text detail--title">
            <span v-if="property.type === 'house'">Parcela</span>
            <span v-if="property.type === 'flat'">Terraza</span>
          </p>
          <p class="detail--text detail--value">
            {{ property.outside_area }} m<sup>2</sup>
          </p>
        </li>
      </ul>
    </div>
  </article>
</template>

<style lang="scss">
.property-card {
  height: 300px;
  background: linear-gradient(180deg, #2e2e32 0%, #171719 100%);
  display: flex;
  margin: 40px 0;

  .image {
    width: 60%;
    object-fit: cover;
  }

  .features {
    width: 40%;
    padding: 10px 30px;
    position: relative;

    .title {
      margin-bottom: 0;
    }

    .address {
      margin-top: 5px;
      margin-bottom: 40px;
      font-size: 0.8em;
      color: #ccc;
    }

    .price {
      font-size: 1.5em;
      margin-bottom: 0;
    }

    .description {
      font-size: 0.6em;
      color: #ccc;
    }

    .detail-list {
      width: calc(100% - 60px);
      height: 50px;
      display: flex;
      gap: 2px;
      position: absolute;
      bottom: 20px;

      .detail {
        background: linear-gradient(180deg, #171719 0%, #2e2e32 100%);
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        &--text {
          font-size: 0.6em;
          text-align: center;
          margin: 0;
        }

        &--title {
          color: #ccc;
        }
      }
    }
  }
}
</style>
