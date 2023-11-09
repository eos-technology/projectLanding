<template>
  <section class="learn">
    <div class="learn__container">
      <div class="learn__img">
        <img src="@/assets/img/profit.webp" alt="" class="learn__img-profit" />
        <img
          src="@/assets/img/woman-card.webp"
          alt=""
          class="learn__img-woman"
        />
        <img
          src="@/assets/img/portfolioValue.webp"
          alt=""
          class="learn__img-portfolio"
        />
      </div>
      <div class="learn__text">
        <h2 class="h2-medium">{{ $t("learn.title") }}</h2>
        <p class="txt-regular">
          {{ $t("learn.subtitle") }}
        </p>
        <button class="learn__text-btn">
          <span>{{ $t("learn.btn") }}</span>
          <i aria-hidden="true" class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.learn {
  position: relative;
  background-color: black;
  padding: 7.5rem 0px;

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media (min-width: 1600px) {
      margin: 0 auto;
      max-width: 1600px;
    }

    @media (max-width: 920px) {
      flex-direction: column-reverse;
      gap: 2rem;
      margin: 0 38.85px;
      padding: 0 10px;
      gap: 4rem;
      align-items: center;
      justify-content: center;
    }
  }

  &__img {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 555.078px;

    @media (max-width: 700px) {
      height: 430px;
    }

    @media (max-width: 500px) {
      height: 270px;
    }

    &-profit {
      position: absolute;
      margin-top: -20px;
      margin-left: -70px;
      border: 1px solid rgb(117, 117, 117);
      border-radius: 8px;
      height: 59.25px;
      width: 310px;

      @media (max-width: 700px) {
        height: 37px;
        width: 192px;
      }

      @media (max-width: 500px) {
        margin-left: -20px;
        height: 28px;
        width: 128px;
      }
    }

    &-woman {
      border-radius: 12px;
      height: 365.625px;
      width: 450px;

      @media (max-width: 700px) {
        height: 271px;
        width: 333px;
      }

      @media (max-width: 500px) {
        height: 184px;
        width: 259px;
      }
    }

    &-portfolio {
      position: absolute;
      bottom: 20px;
      right: 0px;
      margin-right: -70px;
      border: 1px solid rgb(117, 117, 117);
      border-radius: 8px;
      height: 339.453px;
      width: 260px;

      @media (max-width: 700px) {
        height: 220px;
        width: 168px;
      }

      @media (max-width: 500px) {
        bottom: 0px;
        margin-right: -30px;
        height: 176px;
        width: 130px;
      }
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: white;
    width: 100%;
    max-width: 500px;

    @media (max-width: 920px) {
      max-width: 100%;
    }

    &-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 12.6rem;
      border-radius: 100px;
      background-color: white;
      padding: 15px 36px;
      color: black;
      font-weight: 700;
    }

    &-btn:hover {
      background-color: #c8a2d6;
      transition: all 0.2s cubic-bezier(0.68, 0.01, 0.58, 0.75);
    }
  }
}
</style>
