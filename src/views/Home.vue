<template>
  <v-card
    id="pricing-plan"
    class="text-center"
  >
    <v-card-text>
      <v-row>
        <v-col
          cols="12"
          md="12"
          sm="12"
          class="mx-auto"
        >
          <h1 class="font-weight-medium mb-5">
            뚱땡이 VPN
          </h1>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-text class="mt-3 pb-15">
      <v-row>
        <v-col
          offset-sm="2"
          sm="8"
          md="12"
          offset-lg="2"
          lg="10"
          class="mx-auto"
        >
          <v-row>
            <!-- basic -->
            <v-col
              cols="12"
              md="4"
            >
              <v-card
                outlined
                class="text-center"
              >
                <v-card-text>
                  <!-- title -->
                  <h1 class="text-2xl font-weight-medium">
                    {{ pricing.basicPlan.title }}
                  </h1>
                  <p>{{ pricing.basicPlan.subtitle }}</p>

                  <!-- annual plan -->
                  <div class="annual-plan">
                    <div class="plan-price d-flex align-center justify-center">
                      <span class="pricing-basic-value text-5xl primary--text font-weight-semibold">
                        {{ status ? pricing.basicPlan.yearlyPlan.perMonth: pricing.basicPlan.monthlyPrice }}
                      </span>
                      <sup class="text-sm text-primary">원</sup>
                      <sub class="pricing-duration text-sm mb-n3">/month</sub>
                    </div>
                    <small
                      v-if="status"
                      class="annual-pricing"
                    >USD {{ pricing.basicPlan.yearlyPlan.totalAnnual }} / year</small>
                  </div>
                <!--/ annual plan -->
                </v-card-text>

                <v-card-text>
                  <div class="pb-2">
                    <div
                      v-for="benefits in pricing.basicPlan.planBenefits"
                      :key="benefits"
                      class="d-flex align-start text-sm px-5 my-4 cursor-pointer text-left"
                    >
                      <v-icon
                        size="14"
                        class="me-2 mt-1"
                      >
                        {{ icons.mdiCheckboxBlankCircleOutline }}
                      </v-icon>
                      <span class="text-sm text--secondary">{{ benefits }}</span>
                    </div>
                  </div>

                  <!-- plan button -->
                  <v-btn
                    outlined
                    block
                    color="success"
                  >
                    Your current plan
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- standard -->
            <v-col
              cols="12"
              md="4"
            >
              <v-card
                outlined
                class="popular text-center"
              >
                <v-card-text>
                  <!-- chip -->
                  <div
                    v-show="pricing.standardPlan.popularPlan"
                    class="pricing-badge text-right mt-n3"
                  >
                    <v-chip
                      small
                      color="primary"
                      class="v-chip-light-bg primary--text font-weight-semibold"
                    >
                      인기/추천
                    </v-chip>
                  </div>

                  <!-- title -->
                  <h1 class="text-2xl font-weight-medium">
                    {{ pricing.standardPlan.title }}
                  </h1>
                  <p>{{ pricing.standardPlan.subtitle }}</p>

                  <!-- annual plan -->
                  <div class="annual-plan">
                    <div class="plan-price d-flex align-center justify-center">
                      <span class="pricing-basic-value text-5xl primary--text font-weight-semibold">
                        {{ status ? pricing.standardPlan.yearlyPlan.perMonth: pricing.standardPlan.monthlyPrice }}
                      </span>
                      <sup class="text-sm text-primary">원</sup>
                      <sub class="pricing-duration text-sm mb-n3">/month</sub>
                    </div>
                    <small
                      v-if="status"
                      class="annual-pricing"
                    >USD {{ pricing.standardPlan.yearlyPlan.totalAnnual }} / year</small>
                  </div>
                <!--/ annual plan -->
                </v-card-text>

                <v-card-text>
                  <div class="pb-2">
                    <div
                      v-for="benefits in pricing.standardPlan.planBenefits"
                      :key="benefits"
                      class="d-flex align-start text-sm px-5 my-4 cursor-pointer text-left"
                    >
                      <v-icon
                        size="14"
                        class="me-2 mt-1"
                      >
                        {{ icons.mdiCheckboxBlankCircleOutline }}
                      </v-icon>
                      <span class="text-sm text--secondary">{{ benefits }}</span>
                    </div>
                  </div>

                  <!-- plan button -->
                  <v-btn
                    block
                    color="primary"
                  >
                    Upgrade
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- enterprise -->
            <v-col
              cols="12"
              md="4"
            >
              <v-card
                outlined
                class="text-center"
              >
                <v-card-text>
                  <!-- title -->
                  <h1 class="text-2xl font-weight-medium">
                    {{ pricing.enterprisePlan.title }}
                  </h1>
                  <p>{{ pricing.enterprisePlan.subtitle }}</p>

                  <!-- annual plan -->
                  <div class="annual-plan">
                    <div class="plan-price d-flex align-center justify-center">
                      <span class="pricing-basic-value text-5xl primary--text font-weight-semibold">
                        {{ status ? pricing.enterprisePlan.yearlyPlan.perMonth: pricing.enterprisePlan.monthlyPrice }}
                      </span>
                      <sup class="text-sm text-primary">원</sup>
                      <sub class="pricing-duration text-sm mb-n3">/month</sub>
                    </div>
                    <small
                      v-if="status"
                      class="annual-pricing"
                    >USD {{ pricing.enterprisePlan.yearlyPlan.totalAnnual }} / year</small>
                  </div>
                <!--/ annual plan -->
                </v-card-text>

                <v-card-text>
                  <div class="pb-2">
                    <div
                      v-for="benefits in pricing.enterprisePlan.planBenefits"
                      :key="benefits"
                      class="d-flex align-start text-sm px-5 my-4 cursor-pointer text-left"
                    >
                      <v-icon
                        size="14"
                        class="me-2 mt-1"
                      >
                        {{ icons.mdiCheckboxBlankCircleOutline }}
                      </v-icon>
                      <span class="text-sm text--secondary">{{ benefits }}</span>
                    </div>
                  </div>

                  <!-- plan button -->
                  <v-btn
                    outlined
                    block
                    color="primary"
                  >
                    Upgrade
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>

    <!-- pricing free trial -->
    <v-card-text class="pricing-free-trial my-16">
      <v-row>
        <v-col
          cols="12"
          md="10"
          class="mx-auto"
        >
          <div class="pricing-trial-content d-flex justify-space-between flex-column flex-md-row">
            <div class="text-center text-md-left mt-7">
              <p class="text-2xl font-weight-medium primary--text mb-2">
                Still not convinced? Start with a 14-day FREE trial!
              </p>
              <p class="text-base">
                You will get full access to with all the features for 14 days.
              </p>

              <v-btn
                color="primary"
                class="mt-4 mt-lg-6"
              >
                Start 14-day FREE trial
              </v-btn>
            </div>

            <!-- images -->
            <v-img
              contain
              height="278"
              max-width="250"
              src="@/assets/images/3d-characters/pose-fs-9.png"
              class="pricing-trial-img mx-auto"
              alt="svg img"
            />
            <!--/ images -->
          </div>
        </v-col>
      </v-row>
    </v-card-text>
    <!--/ pricing free trial -->

    <v-card-text>
      <h2 class="text-2xl font-weight-medium mb-2">
        FAQ's
      </h2>
      <p>Let us help answer the most common questions.</p>
    </v-card-text>

    <v-card-text class="pricing-accordion mt-1">
      <v-row>
        <v-col
          cols="12"
          md="8"
          class="mx-auto text-left"
        >
          <v-expansion-panels v-model="pricingAccordion">
            <v-expansion-panel
              v-for="item in faqsList"
              :key="item.title"
            >
              <v-expansion-panel-header>
                {{ item.title }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ item.desc }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiCheckboxBlankCircleOutline } from '@mdi/js'

export default {
  setup() {
    const status = ref(false)
    const pricingAccordion = ref(0)

    const pricing = {
      basicPlan: {
        title: '고속서버',
        monthlyPrice: '4,900',
        currentPlan: true,
        popularPlan: false,
        subtitle: '메신저 & 유튜브 적합',
        imgSrc: require('@/assets/images/misc/pricing-tree-1.png'),
        yearlyPlan: {
          perMonth: 0,
          totalAnnual: 0,
        },
        planBenefits: ['사용 기기 1대', 'Traffic 무제한', '(50Gb이후 일반 서버)', '메신져 및 유튜브 적합'],
      },
      standardPlan: {
        monthlyPrice: '8,900',
        title: '쾌속서버',
        popularPlan: true,
        currentPlan: false,
        subtitle: '끊김 없는 유튜브',
        imgSrc: require('@/assets/images/misc/pricing-tree-2.png'),
        yearlyPlan: {
          perMonth: 40,
          totalAnnual: 480,
        },
        planBenefits: ['사용 기기 2대', 'Traffic 무제한', '(200Gb이후 일반 서버)', '유튜브 장기시청 적합'],
      },
      enterprisePlan: {
        monthlyPrice: '12,900',
        popularPlan: false,
        currentPlan: false,
        title: '헤비 서버',
        subtitle: 'Solution for big organizations',
        imgSrc: require('@/assets/images/misc/pricing-tree-3.png'),
        yearlyPlan: {
          perMonth: 80,
          totalAnnual: 960,
        },
        planBenefits: ['사용 기기 4대', 'Traffic 무제한', '(400Gb이후 일반 서버)', '유튜브 장기시청 적합'],
      },
    }

    const faqsList = [
      {
        title: 'General settings',
        desc: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
      },
      {
        title: 'Users',
        desc: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
      },
      {
        title: 'Personal data',
        desc: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
      },
      {
        title: 'Advanced settings',
        desc: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
      },
    ]

    return {
      status,
      pricing,
      faqsList,
      pricingAccordion,
      icons: {
        mdiCheckboxBlankCircleOutline,
      },
    }
  },
}
</script>

<style lang="scss" >
@import '@core/preset/preset/mixins';
@import '@core/preset/preset/variables';

#pricing-plan {
  .popular {
    border-color: rgba(145, 85, 253, 0.3);
  }

  .pricing-free-trial {
    background-color: rgba(145, 85, 253, 0.04);
    position: relative;
    height: 14.625rem;
    .pricing-trial-img {
      position: relative;
      top: -3.5rem;
      right: 0;
    }
  }
  .pricing-accordion {
    .v-expansion-panels {
      .v-expansion-panel {
        box-shadow: none !important;
        margin-bottom: -1px;
        &::before {
          box-shadow: none;
        }
      }
    }
  }
}

@media (max-width: 960px) {
  #pricing-plan {
    .pricing-free-trial {
      height: auto;
      .pricing-trial-img {
        bottom: -1.2rem;
        top: unset;
      }
    }
  }
}

@include theme--child(pricing-accordion) using ($material) {
  .v-expansion-panels {
    .v-expansion-panel {
      border: 1px solid map-deep-get($material, 'dividers');
    }
  }
}
</style>
