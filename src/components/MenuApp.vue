<template> 
  <nav class="header__menu-app">
    <ul>
      <li >
        <a class="link-medium txt-black" href="#">{{ $t('menu.investing') }}</a>
      </li>
      <li >
        <a class="link-medium txt-black" href="#">{{ $t('menu.options') }}</a>
      </li>
      <li >
        <a class="link-medium txt-black" href="#">{{ $t('menu.startup') }}</a>
      </li>
      <li >
        <a class="link-medium txt-black" href="#">{{ $t('menu.overview') }}</a>
      </li>
    </ul>
  </nav>

  <div class="header__menu-app">
    <div class="header__actions">
      <a href="#" class="txt-black link-medium">{{ $t('menu.login') }}</a>
      <a href="#" class="txt-black">
        <button class="btn btn-primary">{{ $t('menu.singup') }}</button>
      </a>
    </div>
  </div>
</template> 

<script lang='ts' setup> 

</script> 

<style lang='scss' scoped> 
ul{
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
}

.header{
  &__actions{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5625rem;
  }
}
</style>