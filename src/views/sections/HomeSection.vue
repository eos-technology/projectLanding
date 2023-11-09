<template>
  <section id="home" class="home">
    <div class="home__container">
      <div class="home__info">
        <h1 class="h1-semibold txt-black">
          <span >{{ $t('home.maximizeReturns') }}</span>, <br>
          <span class="bg-middle">{{ $t('home.minimizeRisks') }}.</span> <br>
          <span>{{ $t('home.investSmarter') }}</span>.
        </h1>

        <p class="txt-regular txt-black">{{ $t('home.text1') }}</p>

        <div class="btn-container">
          <v-btn class="btn btn-primary">
            {{ $t('home.startInvest') }}
            <template v-slot:append>
              <v-icon class="ml-2" icon="mdi-arrow-right"></v-icon>
            </template>
          </v-btn>
        </div>

        <div class="home__resumen">
          <div class="home__item">
            <span class="txt-black txt-bold">$224.4k</span>
            <span class="txt-gray s-regular">{{ $t('home.amountRaised') }}</span>
          </div>
          <div class="home__item">
            <span class="txt-black txt-bold">$1,5k</span>
            <span class="txt-gray s-regular">{{ $t('home.minimum') }}</span>
          </div>
          <div class="home__item">
            <span class="txt-black txt-bold">$12M</span>
            <span class="txt-gray s-regular">{{ $t('home.valuationCap') }}</span>
          </div>
        </div>
      </div>
      <div class="home__img">
        <img class="img1" width="976" height="1152" src="../../assets/img/men-header.webp" alt="">

        <img class="img2" src="../../assets//img/invest-card.webp" alt="">

        <div class="home__img-container">
          <div class="img3-container">
            <img class="img3" src="../../assets/img/portfolio-card.webp" alt="">
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.home {
  padding-top: 6.25rem;
  padding-bottom: 5.625rem;
  background-color: #FFF;
  
  @media (max-width: 480px){
    padding-top: 2.25rem;
    padding-bottom: 4.625rem;
  }

  

  &__container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 38.85px;
    padding: 0 10px;

    @media (min-width: 1600px){
      margin: 0 auto;
      max-width: 1600px;
    }

  }

  &__info{
    flex: 1;

    h1{
      margin-bottom: 1.25rem;
    }

    p{
      max-width: 470px;
    }

    .btn-container{
      margin-bottom: 20px;
      padding-bottom: 20px;
      padding-top: 40px;
    }
  }

  &__resumen{
    display: flex;
    flex-direction: row;
  }

  &__item{
    padding-right: 24px;
    padding-bottom: 12px;
    border-right: 1px solid #e1e2e4;
    display: flex;
    flex-direction: column;
  }

  &__item:nth-child(2){
    padding: 0 24px 12px 24px;
  }

  &__item:nth-child(3){
    padding: 0 0 12px 24px;
    border: none;
  }

  &__img{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    position: relative;

    &-container{
      margin-top: -220px;
    }

    .img1{
      border-radius: 1.25rem;
      width: 480px;
      height: 566px;
      aspect-ratio: auto 976 / 1152;
    }

    
    .img2{
      height: fit-content;
      width: 220px;

      position: absolute;
      right: calc(50% + 40px);
      top: 100px;

      box-shadow: #222f3e1f 0px 10px 50px 0px;
      border-radius: 12px;
    }
    
    
    .img3{
      width: 259px;


      box-shadow: #222f3e1f 0px 10px 50px 0px;
      border-radius: 12px;
      margin-bottom: 50px;
      
      &-container{
        padding: 10px;
      }
    }
  }

}

.bg-middle{
  background-color: #C8A2D6;
}

.btn{
  text-transform: none;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 15px 0px;
  height: fit-content;
  padding: 1.25rem 1.8rem;
}
</style>
