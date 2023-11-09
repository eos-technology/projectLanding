<template>
  <section class="learn">
    <div class="learn__img">
      <div class="learn__img-cards">
        <img src="@/assets/img/spacex.webp" alt="" class="learn__img-space" />
        <img
          src="@/assets/img/digitalocean.webp"
          alt=""
          class="learn__img-space"
        />
        <img src="@/assets/img/facebook.webp" alt="" class="learn__img-space" />
      </div>
      <img src="@/assets/img/phone.webp" alt="" class="learn__img-woman" />
      <img
        src="@/assets/img/total-balance.webp"
        alt=""
        class="learn__img-portfolio"
      />
    </div>
    <div class="learn__text pt-4">
      <h2 class="h2-medium">{{ $t('startup.title') }}</h2>
      <p class="txt-regular">
        {{ $t('startup.subtitle') }}
      </p>
      <div class="learn__text-list">
        <div class="d-flex align-center">
          <div class="learn__text-icon mr-4">
            <i aria-hidden="true" class="fas fa-check"></i>
          </div>
          <h4 class="h4-semibold">{{ $t('startup.item1') }}</h4>
        </div>
        <div class="d-flex align-center">
          <div class="learn__text-icon mr-4">
            <i aria-hidden="true" class="fas fa-check"></i>
          </div>
          <h4 class="h4-semibold">{{ $t('startup.item2') }}</h4>
        </div>
        <div class="d-flex align-center">
          <div class="learn__text-icon mr-4">
            <i aria-hidden="true" class="fas fa-check"></i>
          </div>
          <h4 class="h4-semibold">{{ $t('startup.item3') }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.learn {
  position: relative;
  background-color: #f4f4f4;
  padding: 6rem 30px;
  display: flex;
  justify-content: center;
  gap: 150px;

  @media (max-width: 1290px) {
    padding: 2rem 30px;
    gap: 50px;
    align-items: center;
    flex-direction: column-reverse;
  }

  &__img {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 587px;


    @media (max-width: 700px) {
      height: 550px;
    }

    @media (max-width: 500px) {
      height: 400px;
    
    }

    &-cards {
      position: absolute;
      bottom: 40px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-left: -70px;

      @media (max-width: 500px) {
      margin-left: -20px;
    
    }
    }

    &-space {
      border-radius: 12px;
      height: 56px;
      width: 315px;

      @media (max-width: 700px) {
        height: 47px;
        width: 264px;
      }

      @media (max-width: 500px) {
        height: 27px;
        width: 152px;
      }
    }

    &-woman {
      margin-top: 100px;
      border-radius: 12px;
      height: 365.625px;
      width: 450px;

      @media (max-width: 700px) {
        height: 271px;
        width: 333px;
      }

      @media (max-width: 500px) {
        height: 191px;
        width: 235px;
      }
    }

    &-portfolio {
      position: absolute;
      border-radius: 8px;
      height: 322px;
      width: 270px;
      top: 0px;
      right: 0px;
      margin-right: -70px;

      @media (max-width: 700px) {
        height: 255px;
        width: 214px;
      }

      @media (max-width: 500px) {
        top: 20px;
        margin-right: -30px;
        height: 147px;
        width: 123px;
      }
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: rgb(0, 0, 0);
    width: 100%;
    max-width: 430px;

    &-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgb(22, 23, 28);
      border-radius: 100px;
      height: 36px;
      width: 36px;
      padding: 8px;

      i {
        color: rgb(200, 162, 214);
        font-size: 20px;
      }
    }
  }
}
</style>
