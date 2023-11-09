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

          <div class="home__img-grid">
            <img src="../../assets/img/mutual-card.webp" alt="">
            <img src="../../assets/img/stock-card.webp" alt="">
            <img src="../../assets/img/savings-card.webp" alt="">
            <img src="../../assets/img/crypto-card.webp" alt="">
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.home {
  padding-top: 11.25rem;
  padding-bottom: 5.625rem;
  background-color: #FFF;
  
  @media (max-width: 767px){
    padding-top: 6.25rem;
  }

  

  &__container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    margin: 0 38.85px;
    padding: 0 10px;

    @media (min-width: 1600px){
      margin: 0 auto;
      max-width: 1600px;
    }

    @media (max-width: 920px){
      flex-direction: column;
      gap: 1rem;
      margin: 0 20px;
    }

  }

  &__info{
    flex: 1;

    h1{
      margin-bottom: 1.25rem;
    }

    p{
      max-width: 470px;

      @media (max-width: 767px){
        max-width: 100%;
      }
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

    @media (max-width: 767px){
      flex: 1;
    }
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
      margin-right: 13%;

      display: flex;
      flex-direction: row;
      align-items: flex-end;

      @media (max-width: 1200px){
        margin-right: 5%;
      }

      @media (max-width: 600px){
        margin-right: 5%;
      }

      @media (max-width: 500px){
        margin-top: -120px;
        margin-right: 1%;
      }

      @media (max-width: 350px){
        margin-top: -100px;
      }
    }

    &-grid{
      display: grid;
      grid-template-columns: auto auto;
      justify-content: center;
      gap: 1rem;
      padding: 10px;
      padding-left: 18px;

      @media (max-width: 350px){
        gap: .5rem;
      }

      img{
        box-shadow: #222f3e1f 0px 10px 50px 0px;
        border-radius: 12px;
        width: 94px;

        @media (max-width: 480px){
          width: calc(94px - 5vw);
          border-radius: 8px;
        }

        @media (max-width: 400px){
          width: calc(94px - 8vw);
        }
        @media (max-width: 350px){
          width: calc(94px - 15vw);
        }
      }

    }

    .img1{
      border-radius: 1.25rem;
      width: 480px;
      height: 566px;
      aspect-ratio: auto 976 / 1152;

      @media (max-width: 700px){
        width: calc(480px - 10vw);
        height: auto;
      }

      @media (max-width: 540px){
        width: 70vw;
        height: auto;
      }
    }

    
    .img2{
      height: fit-content;
      width: 220px;

      position: absolute;
      right: calc(50% + 40px);
      top: 100px;

      box-shadow: #222f3e1f 0px 10px 50px 0px;
      border-radius: 12px;

      @media (max-width: 540px){
        border-radius: 8px; 
        right: calc(50% + 7vw);
        width: calc(200px - 10vw);
        top: calc(100px - 10vw);
      }

      @media (max-width: 400px){
        top: calc(100px - 15vw);
        width: calc(220px - 20vw);
      }

      @media (max-width: 350px){
        width: calc(220px - 40vw);
        border-radius: 6px;
        right: calc(50% + 10vw);
      }
    }
    
    
    .img3{
      width: 259px;

      box-shadow: #222f3e1f 0px 10px 50px 0px;
      border-radius: 12px;
      margin-bottom: 50px;

      &-container{
        padding: 10px;
      }

      @media (max-width: 767px){
        width: calc(259px - 5vw);
      }

      @media (max-width: 530px){
        width: calc(259px - 14vw);
      }
      @media (max-width: 440px){
        width: calc(259px - 25vw);
      }
      @media (max-width: 400px){
        width: calc(259px - 40vw);
      }
      // @media (max-width: 350px){
      //   width: calc(259px - 50vw);
      // }
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

  @media (max-width: 400px){
    text-wrap: wrap;
    font-size: .75rem !important;
  }
}
</style>
