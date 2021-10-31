<template>
  <v-card
    id="pricing-plan"
    class="text-center pa-1 ma-1"
  >
    <myVpnStatus :nickname="nickname"/>
    <v-card-text class="mt-3">
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
                    color="primary"
                  >
                    신청하기
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
                    신청하기
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
                    신청하기
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  </v-card-text>

    <analytics-statistics-card></analytics-statistics-card>

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
import AnalyticsStatisticsCard from './AnalyticsStatisticsCard.vue'
import myVpnStatus from './myVpnStatus.vue'

export default {
  components: {
    AnalyticsStatisticsCard,
    myVpnStatus,
  },
  props: ['nickname'],
  data() {
    return {
      name: this.nickname,
      welcome: 'welcome',
    }
  },
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
        subtitle: '틈만 나면 유튜브 시청',
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
        title: '대용량 서버',
        subtitle: '용량 걱정이 펑펑써도 콸콸콸',
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
        title: '서비스가 차단될 수 있나요?',
        desc: '뚱땡이VPN은 DNS, 콘텐츠, IP 차단 등 가장 정교한 형태의 차단 수단을 우회할 수 있습니다. 또한 VPN서버에 접속하는 엑세스키를 소수 인원에게 비공개로 제공하기 때문에 검열 기관에서 차단할 서버를 쉽게 액세스하여 파악할 수 있는 공개 VPN과는 다릅니다. 또한, 매우 강력한 차단 정책에 대비하여 복수의 서버를 비공개적으로 보유하고 있습니다. 서버 차단 시 즉시 여분 서버를 제공해 드리기 때문에 서버 차단에 대해 안심하셔도 됩니다.',
      },
      {
        title: '개인정보나 인터넷 기록이 저장 되나요?',
        desc: '뚱땡이 VPN이 사용하는 outline App는 사용자의 개인정보 보호를 염두에 두고 만들어졌습니다. 절대 사용자의 트래픽을 로그하거나 인터넷 사용을 추적하지 않습니다. 사용자가 방문하는 웹사이트, 통신하는 대상 또는 내용에 관한 정보도 수집하지 않습니다. ',
      },
      {
        title: '뚱땡이 VPN은 안전한가요?',
        desc: '뚱땡이 VPN이 사용하는 Outline은 독립 보안 기업 두 곳의 감사를 받았습니다. 다음 보고서를 읽어보세요. Radically Open Security, Cure53..',
      },
      {
        title: '무료 VPN을 사용하면 안되나요?',
        desc: '많은 무료 VPN의 경우 사용자의 데이터에 누가 액세스할 수 있는지 알 수 없습니다. 많은 무료 VPN에서는 사용자의 데이터를 공유 또는 판매하거나 온라인 활동을 추적합니다. 일부 보안 전문가는 널리 사용되는 많은 무료 VPN에서 정부 또는 기타 감독기관에 백도어 액세스를 허용한다고 주장합니다. 대다수의 무료 VPN은 차단 및 감지에도 취약합니다.',
      },
      {
        title: 'VPN이 왜 필요한가요?',
        desc: '많은 무료 VPN의 경우 사용자의 데이터에 누가 액세스할 수 있는지 알 수 없습니다. 많은 무료 VPN에서는 사용자의 데이터를 공유 또는 판매하거나 온라인 활동을 추적합니다. 일부 보안 전문가는 널리 사용되는 많은 무료 VPN에서 정부 또는 기타 감독기관에 백도어 액세스를 허용한다고 주장합니다. 대다수의 무료 VPN은 차단 및 감지에도 취약합니다.',
      },
      {
        title: 'VPN의 원리는 뭔가요?',
        desc: '많은 무료 VPN의 경우 사용자의 데이터에 누가 액세스할 수 있는지 알 수 없습니다. 많은 무료 VPN에서는 사용자의 데이터를 공유 또는 판매하거나 온라인 활동을 추적합니다. 일부 보안 전문가는 널리 사용되는 많은 무료 VPN에서 정부 또는 기타 감독기관에 백도어 액세스를 허용한다고 주장합니다. 대다수의 무료 VPN은 차단 및 감지에도 취약합니다.',
      },
      {
        title: 'VPN은 불법인가요?',
        desc: '많은 무료 VPN의 경우 사용자의 데이터에 누가 액세스할 수 있는지 알 수 없습니다. 많은 무료 VPN에서는 사용자의 데이터를 공유 또는 판매하거나 온라인 활동을 추적합니다. 일부 보안 전문가는 널리 사용되는 많은 무료 VPN에서 정부 또는 기타 감독기관에 백도어 액세스를 허용한다고 주장합니다. 대다수의 무료 VPN은 차단 및 감지에도 취약합니다.',
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
  mounted() {
    // console.log('home, test', this.test)
    // console.log('home, name', this.name)
    // console.log('home, props.nickname', this.nickname)
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
