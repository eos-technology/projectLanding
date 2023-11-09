<template>  
  <header id="header" :class="{ 'scrolled': isScrolled }">
    <div class="header">
      <div class="header__logo">
        <a href="#home">
          <img src="@/assets/img/pagebolt-logo.webp" alt="">
        </a>
      </div>

      <menu-app @scroll="handleScroll" />

      <menu-mobile @burger="burger=!burger" />

    </div>
  </header>
</template>

<script lang='ts' setup> 
import { onMounted, ref } from 'vue';
import MenuApp from './MenuApp.vue';
import MenuMobile from './MenuMobile.vue';

const burger = ref(false)
const isScrolled = ref(false)

onMounted(() => {
  const header = document.getElementById("header");
  var scrollPosition = 0;

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80 && !isScrolled.value && !burger.value) {
        isScrolled.value = true;
      }

      if (window.scrollY < scrollPosition) {
        isScrolled.value = false;
      }

      scrollPosition = window.scrollY;
    });
  } else {
    console.error("Element with ID 'header' not found");
  }
});

const emits = defineEmits(["value"]);


const handleScroll = (value: string) => {
  emits("value", value);
}

</script> 

<style lang='scss' scoped> 
header{
  box-shadow: 0 1px 0 rgba(0,0,0,.05);
  background-color: #FFF;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;

  transition: all 0.4s ease;
}

.header{
  padding: 0 10px;
  margin: 0 38.85px;
  max-width: 1600px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: all 0.4s ease;

  @media (min-width: 1600px){
    margin: 0 auto;
  }


  @media (max-width: 920px){
    margin: 0 20px;
  }

  &__logo{
    display: flex;
    flex-direction: row;
    align-items: center;

    img{
      width: 118px;
      height: 32px;
    }
  }

  
}

.scrolled{
  transform: translateY(-20%);
  opacity: 0;
  z-index: -20;
}
</style>

<style lang="scss">
.header{
  &__menu{
    &-app{
      display: none;

      @media (min-width: 1025px){
        display: block;
      }
    }

    &-mobile{
      display: none;

      @media (max-width: 1025px){
        display: block;
      }
    }
  }
}

</style>