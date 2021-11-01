<template>
  <v-card>
    <v-card-title>
      <span class="text-sm font-weight-semibold">{{nickname}}님, 안녕하세요?</span>
      <v-spacer></v-spacer>
    </v-card-title>

    <v-card-text class="text-center">
      <!-- Chart -->
      <vue-apex-charts
        id="total-visit-chart"
        height="320"
        :options="chartOptions"
        :series="chartData"
      ></vue-apex-charts>

      <p class="mb-3 text-xs">
        만료까지 {{dday}} 일
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
// eslint-disable-next-line object-curly-newline
import { mdiDotsVertical } from '@mdi/js'

export default {
  components: {
    VueApexCharts,
  },
  data() {
    return {
      dday: 23,
    }
  },
  props: ['nickname'],
  setup() {
    var dday = 2c3
    const chartOptions = {
      chart: {
        height: 350,
        type: 'radialBar',
        sparkline: {
          enabled: true,
        },
      },
      grid: {
        padding: {
          left: 60,
          right: 60,
        },
      },
      stroke: {
        lineCap: 'round',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 90],
          colorStops: [],
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -180,
          endAngle: 180,
          inverseOrder: true,
          hollow: {
            size: '62%',
          },
          dataLabels: {
            name: {
              offsetY: 26,
            },
            value: {
              fontSize: '2.125rem',
              // ! This isn't working???
              fontWeight: 600,
              offsetY: -14,
              formatter(value) {
                return `${value}`
              },
            },
            total: {
              show: false,
              label: '일',
              fontSize: '14px',
            },
          },
        },
      },
      labels: ['days'],
    }
    const chartData = [dday]

    return {
      chartOptions,
      chartData,

      icons: {
        mdiDotsVertical,
      },
    }
  },
}
</script>

<style lang="scss">
#total-visit-chart {
  .apexcharts-canvas {
    .apexcharts-text {
      &.apexcharts-datalabel-value {
        font-weight: 600;
        font-size: 1.5rem;
      }
    }
  }
}
</style>
