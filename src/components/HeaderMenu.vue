<script setup>
import { RouterLink } from "vue-router";
import { useLangStore } from "@/stores/langStore";

const props = defineProps({
  showMenu: Boolean,
});

const langStore = useLangStore();
</script>

<template>
  <transition name="menu">
    <nav class="menu" v-if="showMenu">
      <ul class="nav-links">
        <li class="menu-link">
          <RouterLink :to="{ name: 'forSale' }">For Sale</RouterLink>
        </li>
        <li class="menu-link">
          <RouterLink :to="{ name: 'forRent' }">For Rent</RouterLink>
        </li>
        <li class="menu-link">
          <RouterLink :to="{ name: 'ourServices' }">Our Services</RouterLink>
        </li>
        <li class="menu-link">
          <RouterLink :to="{ name: 'ourTeam' }">Our Team</RouterLink>
        </li>
        <li class="menu-link">
          <RouterLink :to="{ name: 'blog' }">Blog</RouterLink>
        </li>
        <li class="menu-link">
          <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
        </li>
      </ul>
      <form @submit.prevent="" class="filters-form">
        <ul class="filter-fields">
          <li class="filter">
            <label for="language">Idioma</label>
            <select
              name="language"
              id="language"
              v-model="langStore.langOptions.lang"
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </li>
          <li class="filter">
            <label for="currency">Moneda</label>
            <select
              name="currency"
              id="currency"
              v-model="langStore.langOptions.currency"
            >
              <option value="EUR">EUR €</option>
              <option value="USD">USD $</option>
              <option value="GBP">GBP £</option>
            </select>
          </li>
        </ul>
      </form>
    </nav>
  </transition>
</template>

<style lang="scss">
.menu-enter-from,
.menu-leave-to {
  transform: translateX(30vw);
  opacity: 0;
}
.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s ease;
}

.header {
  &.header-home {
    .menu {
      opacity: 0.9;
    }
  }

  .menu {
    width: clamp(215px, 30vw, 30vw);
    height: calc(100vh - 50px);
    position: absolute;
    top: 50px;
    right: 0;
    z-index: 1;
    background-color: #171719;
    padding: 20px 60px;

    .nav-links {
      height: calc(50% - 20px);
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .menu-link {
        position: relative;

        &:hover::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: -20px;
          width: 100%;
          border-bottom: 1px solid #b9ab7e;
        }

        a {
          display: inline-block;
          width: 100%;
        }
      }
    }

    .filters-form {
      height: 50%;

      .filter-fields {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-bottom: 25px;

        .filter {
          display: flex;
          flex-direction: column;

          select {
            height: 25px;
            padding-left: 5px;
            background-color: transparent;
            color: #eeede8;
            cursor: pointer;

            option {
              background-color: #171719;
            }
          }
        }
      }
    }
  }
}
</style>
