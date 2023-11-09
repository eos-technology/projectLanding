<template>
  <section class="option">
    <div class="option__text">
      <h2 class="h2-medium">
        {{ $t('option.title') }}
      </h2>
    </div>
    <div class="option__cards">
      <div class="option__cards-card">
        <div class="option__cards-icon">
          <i aria-hidden="true" class="fas fa-lightbulb"></i>
        </div>
        <div class="option__cards-text">
          <h4 class="h4-bold">{{ $t('option.titleCard1') }}</h4>
          <p class="sm-regular">
            {{ $t('option.textCard1') }}
          </p>
        </div>
      </div>
      <div class="option__cards-card" style="border-top: 8px solid #c8a2d6">
        <div class="option__cards-icon">
          <i aria-hidden="true" class="fas fa-chart-area"></i>
        </div>
        <div class="option__cards-text">
          <h4 class="h4-bold">{{ $t('option.titleCard2') }}</h4>
          <p class="sm-regular">
            {{ $t('option.textCard2') }}
          </p>
        </div>
      </div>
      <div class="option__cards-card">
        <div class="option__cards-icon">
          <i aria-hidden="true" class="fas fa-brain"></i>
        </div>
        <div class="option__cards-text">
          <h4 class="h4-bold">{{ $t('option.titleCard3') }}</h4>
          <p class="sm-regular">
            {{ $t('option.textCard3') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.option {
  background-color: black;
  border-top: 1px solid rgb(47, 47, 47);
  padding: 6rem 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;

  &__text {
    width: 100%;
    max-width: 750px;
    text-align: center;
    color: white;

    @media (max-width: 800px) {
        max-width: 100%;
      }
  }

  &__cards {
    display: flex;
    gap: 30px;

    @media (max-width: 800px) {
      flex-direction: column;
    }

    &-card {
      display: flex;
      flex-direction: column;
      gap: 30px;
      border-top: 8px solid rgb(225, 222, 226);
      background-color: white;
      border-radius: 12px;
      padding: 48px 32px 32px 32px;
    }

    &-card:hover {
      border-top: 8px solid #c8a2d6;
      transition: all 0.2s cubic-bezier(0.68, 0.01, 0.58, 0.75);
    }

    &-text {
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 310px;

      @media (max-width: 800px) {
        max-width: 100%;
      }
    }

    &-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(
        rgba(0, 0, 0, 0.22) 0%,
        rgba(0, 0, 0, 0) 100%
      );
      border-radius: 100px;
      color: rgb(22, 23, 28);
      height: 32px;
      width: 32px;
      padding: 30px;

      i {
        font-size: 35px;
      }
    }
  }
}
</style>
