<template>
  <Header @value="handleScroll"/>
  <home-section />
  <LearnSection id="invest"/>
  <OptionSection id="options"/>
  <StartupSection id="startup"/>
  <InvestSection />
  <OverviewSection id="overview"/>
</template>

<script lang="ts" setup>
import Header from '../components/Header.vue'
import HomeSection from './sections/HomeSection.vue';
import OverviewSection from "./sections/OverviewSection.vue";
import LearnSection from './sections/LearnSection.vue';
import OptionSection from './sections/OptionSection.vue'
import StartupSection from './sections/StartupSection.vue'
import InvestSection from './sections/InvestSection.vue';

const handleScroll = (value: string) => {
  console.log(value)
  const targetSection = document.getElementById(value)

  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: 'smooth'
    })
  }
}

</script>

<style lang="scss" scoped></style>
