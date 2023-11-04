<script setup lang="ts">
import Header from './components/pages/header/header.vue'
import Footer from './components/pages/footer/footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Header />
  <router-view/>
  <Footer />
</template>