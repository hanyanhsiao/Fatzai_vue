<!-- 整個網頁的根元件 -->
<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  mounted() {
    AOS.init();
  },
};
</script>

<template>
  <!-- router-link 在經過編譯後會變成 <a> 標籤 -->
  <!-- 使用 to 屬性來處理目標 URL -->
  <router-view />
</template>

<style scoped></style>
