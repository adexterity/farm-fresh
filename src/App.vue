<script setup>
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import Catalogue from './components/Catalogue.vue';
import WhyFarmFresh from './components/WhyFarmFresh.vue';
import Testimonial from './components/Testimonials.vue';
</script>

<template>
  <div class="bg-[url('./src/assets/Ellipse.jpg')] bg-no-repeat">

    <!-- navbar -->
    <NavBar />

    <!-- hero section -->
    <HeroSection />

    <!-- catalogue section -->
    <Catalogue />

    <!-- whyFarmFresh section -->
    <WhyFarmFresh />

    <!-- testimonail section -->
    <Testimonial />

  </div>
</template>

<style scoped>
/* .container {
  margin: 0 auto;
  width: 80vw;

  border: 1px solid black;
  my-0 mx-auto w-80vw border border-black
} */
</style>
