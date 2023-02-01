<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, RouterLink } from "vue-router";
import HeaderMenu from "./HeaderMenu.vue";

function menuAnimation() {
  showMenu.value = !showMenu.value;
  document.querySelector(".hr-long").classList.toggle("active-long");
  document.querySelector(".hr-short").classList.toggle("active-short");
}

const route = useRoute();
const isHomeView = computed(() => {
  return route.name === "home";
});

const showMenu = ref(false);

watch(
  () => route.name,
  () => {
    showMenu.value = false;
  }
);
</script>

<template>
  <header class="header" :class="{ 'header-home': isHomeView }">
    <section class="top-bar">
      <RouterLink :to="{ name: 'home' }">
        <img
          :src="`../src/assets/logos/${isHomeView ? 'Positivo' : 'Golden'}.png`"
          alt="Golden Avenue Logo"
          height="25"
        />
      </RouterLink>

      <div @click="menuAnimation" class="menu-btn">
        <div>
          <hr class="hr-long" />
          <hr class="hr-short" />
        </div>
      </div>
    </section>

    <transition name="hero">
      <section class="hero-banner" v-if="isHomeView">
        <transition name="hero-text" appear>
          <div class="hero-text">
            <h1 class="hero-title">A BIG TITLE</h1>
            <h2 class="hero-subtitle">WITH AN EVOCATIVE SUBTITLE</h2>
          </div>
        </transition>
        <div class="hero-bottom">
          <span>⇓</span>
        </div>
      </section>
    </transition>

    <HeaderMenu :showMenu="showMenu" />
  </header>
</template>

<style lang="scss">
.hero-enter-from,
.hero-leave-to {
  opacity: 0;
}
.hero-enter-active,
.hero-leave-active {
  transition: all 0.3s ease;
}

.hero-text-enter-from {
  opacity: 0;
}
.hero-text-enter-active {
  transition: all 2s ease;
}

.header {
  color: white;

  .hero-banner {
    height: 100vh;
    width: 100vw;
    position: relative;
    top: -50px;
    z-index: -1;
    background-color: #171719;
    background-image: url("../assets/1-San-Roque-Villa-43.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .hero-text {
      font-family: "Cormorant Garamond", serif;
      padding: 30vh 60px 10px;
      text-shadow: 0 0 20px #171719;

      .hero-title {
        line-height: 0.8em;
        font-size: 4em;
        margin: 0;
      }

      .hero-subtitle {
        margin: 0;
      }
    }

    .hero-bottom {
      text-align: center;
      height: 40px;
    }
  }

  &.header-home {
    height: 100vh;

    .top-bar {
      opacity: 0.9;
    }
  }

  .top-bar {
    height: 50px;
    background-color: #171719;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px;

    .menu-btn {
      cursor: pointer;
    }
  }
}

.hr-long {
  width: 34px;
  height: 2px;
  background-color: var(--ga-gold);
  border: none;
  transition: transform 0.5s ease-out;
}

.hr-short {
  position: relative;
  right: 6px;
  width: 22px;
  height: 2px;
  background-color: var(--ga-gold);
  border: none;
  transition: transform 0.5s ease-out;
}

.active-long {
  transform: rotateZ(45deg);
  width: 26px;
}

.active-short {
  transform: rotateZ(135deg);
  width: 26px;
  bottom: 10px;
  right: 1px;
}
</style>
