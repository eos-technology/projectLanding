<template>
  <!-- Black section -->
  <section id="overview" class="overview bg-black text-white">
    <h2 class="text-h2 text-center text-center mx-auto pb-14">
      {{ $t("overview.investStartups") }}
    </h2>

    <v-row>
      <v-col class="d-flex flex-column align-center px-15">
        <img class="icon mb-6" src="@/assets/img/icon-tarjet.webp" alt="" />
        <h4 class="h4 mb-3 text-center">{{ $t("overview.complexity") }}</h4>
        <p class="t-body text-center">
          {{ $t("overview.prismCred") }}
        </p>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col class="d-flex flex-column align-center px-15 border-e">
        <img class="icon mb-6" src="@/assets/img/icon-bussines.webp" alt="" />
        <h4 class="h4 mb-3 text-center">
          {{ $t("overview.service") }}
        </h4>
        <p class="t-body text-center">
          {{ $t("overview.prismCred") }}
        </p>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col class="d-flex flex-column align-center px-15">
        <img class="icon mb-6" src="@/assets/img/icon-money.webp" alt="" />
        <h4 class="h4 mb-3 text-center">{{ $t("overview.greatThings") }}</h4>
        <p class="t-body text-center">
          {{ $t("overview.prismCred") }}
        </p>
      </v-col>
    </v-row>
  </section>
  <!-- Video -->
  <v-row
    class="overview__invest overflow-hidden d-flex justify-center flex-column py-8"
  >
    <h2 class="mx-auto text-white text-center mb-8 text-h4 text-md-h2 px-8">
      {{ $t("overview.experienceBenefits") }}
    </h2>
    <v-btn
      size="56"
      class="w-auto mx-auto rounded-pill px-4 text-capitalize font-weight-bold"
      color="secondary"
      >{{ $t("overview.startInvesting") }}

      <template v-slot:append>
        <v-icon class="ml-2" icon="mdi-arrow-right"></v-icon> </template
    ></v-btn>
    <video class="overview__video" autoplay loop>
      <source src="@/assets/video/footer.mp4" type="video/mp4" />
    </video>
  </v-row>
  <!-- Footer Section -->
  <footer class="footer pa-12">
    <v-row class="py-12">
      <v-col cols="12" sm="4">
        <img
          class="footer__logo"
          src="@/assets/img/pagebolt-logo.webp"
          alt=""
        />
        <p class="text-body-2">
          Maximize returns, Minimize risks. <br />
          Invest smarter.
        </p>
      </v-col>
      <v-col cols="12" sm="2"
        ><div class="d-flex flex-column">
          <p class="text-body-1">Company</p>
          <router-link class="footer__link" to="#">About us</router-link>
          <router-link class="footer__link" to="#">Contact us</router-link>
          <router-link class="footer__link" to="#">Carrer</router-link>
          <router-link class="footer__link" to="#">Blog</router-link>
        </div></v-col
      >
      <v-col cols="12" sm="2"
        ><div class="d-flex flex-column">
          <p class="text-body-1">Product</p>
          <router-link class="footer__link" to="#">Pricing product</router-link>
          <router-link class="footer__link" to="#">Mobile Apps</router-link>
          <router-link class="footer__link" to="#">Updates</router-link>
          <router-link class="footer__link" to="#">WordPress</router-link>
          <router-link class="footer__link" to="#">Web Security</router-link>
        </div></v-col
      >
      <v-col cols="12" sm="2"
        ><div class="d-flex flex-column">
          <p class="text-body-1">Legal</p>
          <router-link class="footer__link" to="#">Privacy Policy</router-link>
          <router-link class="footer__link" to="#"
            >Terms of Service</router-link
          >
        </div></v-col
      >
      <v-col cols="12" sm="2"
        ><div class="d-flex flex-column">
          <p class="text-body-1">Help</p>
          <router-link class="footer__link" to="#">Payment Method</router-link>
          <router-link class="footer__link" to="#">Knowledge Base</router-link>
          <router-link class="footer__link" to="#">Tutorials</router-link>
        </div></v-col
      >
      <v-divider></v-divider>
      <v-col sm="8" class="py-12 d-flex justify-space-between align-center">
        <p class="text-body-2 text-grey-darken-1">
          Copyright: © 2023 PageBolt WordPress theme by UiCore. All Rights
          Reserved.
        </p>
      </v-col>

      <v-col sm="4" class="social">
        <v-icon class="social__icon pa-6" icon="mdi-facebook"></v-icon>
        <v-icon class="social__icon pa-6" icon="mdi-twitter"></v-icon>
        <v-icon class="social__icon pa-6" icon="mdi-linkedin"></v-icon>
      </v-col>
    </v-row>
  </footer>
</template>

<style lang="scss">
.overview {
  padding: 120px 0;
  .text-h2 {
    max-width: 500px;
  }
  .icon {
    max-width: 3.75rem;
  }
  &__invest {
    min-height: 440px;
    position: relative;

    @media (max-widh: 600px) {
      min-height: 600px;
    }
    .text-h2 {
      max-width: 1050px;
    }
  }
  &__video {
    position: absolute;
    z-index: -2;
  }
}
.footer {
  &__logo {
    width: 7.5rem;
  }
  &__link {
    text-decoration: none;
    margin-top: 1rem;
    color: #383838;
    font-size: 14px;
    &:hover {
      color: #c8a2d6;
    }
  }
}
.social {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  &__icon {
    font-size: 30px;
    border: 1px solid #000;
    border-radius: 100px;

    &:hover {
      border: 1px solid #c8a2d6;
      color: #c8a2d6;
      cursor: pointer;
    }
  }
}
</style>
