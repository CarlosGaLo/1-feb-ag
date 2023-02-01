<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useRealState } from "@/stores/realState";
import { useLangStore } from "@/stores/langStore";

const route = useRoute();
const realState = useRealState();
const langStore = useLangStore();

const bedroomsHover = ref(0);
</script>

<template>
  <section class="funnel">
    <ul class="funnel--fields">
      <li class="funnel-field">
        <label for="type">Tipo de alojamiento</label>
        <select
          name="type"
          id="type"
          class="input"
          v-model="realState.funnel.type"
        >
          <option value="all">Todos los tipos</option>
          <option value="house">Casa</option>
          <option value="flat">Piso</option>
        </select>
      </li>

      <li v-if="route.name === 'forSale'" class="funnel-field">
        <label for="sale-price">Precios</label>
        <select
          name="sale-price"
          id="sale-price"
          class="input"
          v-model="realState.funnel.salePrice"
        >
          <option value="all">Hasta cualquier precio</option>
          <option value="500000">
            500.000 {{ langStore.langOptions.currencySymbol }}
          </option>
          <option value="1000000">
            1.000.000 {{ langStore.langOptions.currencySymbol }}
          </option>
          <option value="10000000">
            10.000.000 {{ langStore.langOptions.currencySymbol }}
          </option>
        </select>
      </li>

      <li v-if="route.name === 'forRent'" class="funnel-field">
        <label for="rent-price">Precios</label>
        <select
          name="rent-price"
          id="rent-price"
          class="input"
          v-model="realState.funnel.rentPrice"
        >
          <option value="all">Hasta cualquier precio</option>
          <option value="1000">
            1.000 {{ langStore.langOptions.currencySymbol }}
          </option>
          <option value="5000">
            5.000 {{ langStore.langOptions.currencySymbol }}
          </option>
          <option value="10000">
            10.000 {{ langStore.langOptions.currencySymbol }}
          </option>
        </select>
      </li>

      <li class="funnel-field">
        <label for="bedrooms">Nº de dormitorios</label>
        <div class="input bedrooms-btns" @mouseleave="bedroomsHover = 0">
          <button
            v-for="btn in [1, 2, 3, 4, 5, 6]"
            @mouseover="bedroomsHover = btn"
            @click="realState.funnel.rooms = btn"
            class="bedrooms-btn"
            :class="{
              hover: bedroomsHover >= btn,
              selected: realState.funnel.rooms >= btn,
            }"
          >
            +{{ btn }}
          </button>
          <button
            class="bedrooms-btn reinstate"
            @mouseenter="bedroomsHover = 0"
            @click="realState.funnel.rooms = 1"
          >
            Restituir
          </button>
        </div>
      </li>

      <li class="funnel-field">
        <label for="search">Búsqueda</label>
        <div class="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Nº de referencia/Nombre"
            class="input"
            v-model="realState.funnel.search"
          />
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
.funnel {
  min-height: 80px;
  background: linear-gradient(180deg, #2e2e32 0%, #171719 100%);

  &--fields {
    min-height: 80px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0 10px;

    .funnel-field {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;

      .input {
        height: 25px;
        padding-left: 5px;
        background-color: transparent;
        color: #eeede8;
        border: 1px solid #494949;

        &.bedrooms-btns {
          display: flex;
          padding: 0;
          border: none;

          .bedrooms-btn {
            padding: 3px;
            background-color: transparent;
            border: 1px solid #494949;
            height: 100%;
            font-size: 0.7em;
            color: #eeede8;
            cursor: pointer;

            &.selected {
              color: #171719;
              background-color: #eeede8;
            }

            &.hover,
            &.reinstate:hover {
              background-color: #494949;
            }
          }
        }
      }

      select {
        cursor: pointer;

        option {
          background-color: #171719;
        }
      }
    }
  }
}
</style>
