<!-- <script setup>
import HeaderView from "../components/HeaderView.vue";
</script>

<template>
  <div class="about">
    <HeaderView />

    <h1>This is an about page</h1>
  </div>
</template>

<style></style> -->

<script setup>
import VueSlickCarousel from 'vue-slick-carousel';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

const name = 'MyComponent';

// 将 VueSlickCarousel 组件导出
const components = {
  VueSlickCarousel,
};
</script>

<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
  </div>
</template>
