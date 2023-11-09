<template> 
  <div class="header__menu-mobile" @click="burger=!burger, $emit('burger')">
    <div class="burger" :class="{'out': !burger}">
      <div class="line"></div>
      <div class="burger-click">
        <div class="line line2"></div>
        <div class="line line2"></div>
      </div>
      <div class="line"></div>
    </div>
  </div>

  <div class="menu-mobile" v-show="burger==false" :class="{'in': !burger}">
    <ul>
      <li @click="burger=true" class="clip">
        <a class="link-medium txt-black" href="#">{{ $t('menu.investing') }}</a>
      </li>
      <li @click="burger=true" class="clip clip-1">
        <a class="link-medium txt-black" href="#">{{ $t('menu.options') }}</a>
      </li>
      <li @click="burger=true" class="clip clip-2">
        <a class="link-medium txt-black" href="#">{{ $t('menu.startup') }}</a>
      </li>
      <li @click="burger=true" class="clip clip-3">
        <a class="link-medium txt-black" href="#overview">{{ $t('menu.overview') }}</a>
      </li>
    </ul>

    <div class="menu-mobile__buttons">
      <a href="#" class="txt-black link-medium">{{ $t('menu.login') }}</a>
      <a href="#" class="txt-black">
        <button class="btn btn-primary">{{ $t('menu.singup') }}</button>
      </a>
    </div>
  </div>
</template> 

<script lang='ts' setup>
import { ref } from 'vue';

defineEmits(['burger'])
 
const burger = ref(true)


</script> 

<style lang='scss' scoped> 
.burger{
  width: 20px;

  .line{
    width: 20px;
    height: 2px;
    background-color: #16171c;
    margin-bottom: 4px;

    transition: all 1s ease;
  }

  .line:last-child{
    margin-top: 4px;
    margin-bottom: 0;
  }

  &-click{
    .line2{
      width: 15px;
      transition: all .5s ease-in-out;
    }

    .line2:first-child{
      margin-bottom: -2px;
    }

    .line2:last-child{
      margin-top: -2px;
    }
  }
}

.out{
  .line{
    transform: translateY(-50%);
    opacity: 0;
  }

  .line:last-child{
    transform: translateY(50%);
  }

  .burger-click{
    .line2{
      width: 25px;
      opacity: 1;
    }

    .line2:first-child{
      transform: rotate(40deg);
    }
    
    .line2:last-child{
      transform: rotate(-40deg);
    }
  }
}

.menu-mobile{
  position: fixed;
  top: 80px;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;

  width: 100%;
  height: calc(100dvh - 50px);
  opacity: 0;
  padding: 0 38.85px;
  padding-bottom: 38.85px;
  background-color: #FFF;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1025px){
    display: none;
  }

  &.in{
    opacity: 1;
  }

  ul{
    list-style: none;
    padding-top: 20px;

    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    li{
      height: fit-content;
    }
  }


  &__buttons{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5625rem;

    width: 100%;

    a{
      width: 100%;
      text-align: center;
    }
    
    button{
      width: 100%;
    }

  }
}

.clip{
  animation-name: top;
  animation-duration: .5s;
  animation-fill-mode: forwards;
  opacity: 0;

  &-1{
    animation-delay: .25s;
  }
  &-2{
    animation-delay: .5s;
  }
  &-3{
    animation-delay: .75s;
  }
}

@keyframes top {
  from{
    transform: translateY(15px);
    opacity: 0;
  }

  to{
    transform: translateY(0);
    opacity: 1;
  }
}

</style>