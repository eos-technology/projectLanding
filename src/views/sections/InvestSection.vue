<template>
  <section class="learn">
    <div class="learn__text">
      <h2 class="h2-medium">{{ $t('invest.title') }}</h2>
      <p class="txt-regular">
        {{ $t('invest.subtitle') }}
      </p>
      <button class="learn__text-btn">
        <span>{{ $t('invest.btn') }}</span>
        <i aria-hidden="true" class="fas fa-arrow-right"></i>
      </button>
    </div>
    <div class="learn__img">
      <img src="@/assets/img/profit.webp" alt="" class="learn__img-profit" />
      <img src="@/assets/img/men2-crad.webp" alt="" class="learn__img-woman" />
      <img
        src="@/assets/img/most-popular.webp"
        alt=""
        class="learn__img-portfolio"
      />
      <div class="learn__img-icon">
        <i aria-hidden="true" class="fas fa-pie-chart"></i>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.learn {
  border-top: 1px solid rgb(236, 236, 236);
  position: relative;
  background-color: #f4f4f4;
  padding: 6rem 50px;
  display: flex;
  justify-content: center;
  gap: 200px;

  @media (max-width: 1290px) {
    gap: 50px;
    align-items: center;
    flex-direction: column;
  }

  &__img {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 500px;

    @media (max-width: 500px) {
        height: 350px;
      }

    &-profit {
      position: absolute;
      border: 1px solid rgb(117, 117, 117);
      border-radius: 8px;
      max-height: 59.25px;
      margin-left: 120px;

      @media (max-width: 700px) {
        height: 42px;
        width: 217px;
      }

      @media (max-width: 500px) {
        height: 31px;
        width: 159px;
      }

      
    }

    &-woman {
      margin-top: 10px;
      border-radius: 12px;
      width: 100%;
      height: 100%;
      height: 394px;
      width: 310px;


      @media (max-width: 500px) {
        height: 274px;
        width: 215px;
      }
    }

    &-portfolio {
      position: absolute;
      border-radius: 12px;
      width: 100%;
      height: 100%;
      max-height: 264px;
      max-width: 300px;
      bottom: 0px;
      margin-left: -165px;

      
      @media (max-width: 700px) {
        height: 191px;
        width: 217px;
        margin-left: -60px;
      }

      @media (max-width: 500px) {
        height: 140px;
        width: 159px;
      }
    }

    &-icon {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      width: 100px;
      height: 100px;
      padding: 30px;
      background-color: rgb(232, 236, 216);
      bottom: 60px;
      right: 0px;
      margin-right: -50px;
      animation: bounce 4s infinite;

      
      @media (max-width: 700px) {
        width: 60px;
        height: 60px;
      }

      @media (max-width: 500px) {
        margin-right: -20px;
        bottom: 25px;
      }

      @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-10px);
        }
        60% {
          transform: translateY(-10px);
        }
      }

      i {
        font-size: 30px;
      }
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: rgb(0, 0, 0);
    width: 100%;
    max-width: 500px;

    &-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 19rem;
      border-radius: 100px;
      background-color: rgb(43, 40, 50);
      padding: 15px 36px;
      color: rgb(255, 255, 255);
      box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 15px 0px;
      font-weight: 700;


      @media(max-width: 500px){
        width: 100%;
      }
    }

    &-btn:hover {
      background-color: #c8a2d6;
      transition: all 0.2s cubic-bezier(0.68, 0.01, 0.58, 0.75);
    }
  }
}
</style>
