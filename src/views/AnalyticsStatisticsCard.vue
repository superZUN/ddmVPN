<template>
  <v-card class='mt-12 mb-12 offset-sm="2"' elevation="12">
    <v-card-title class="align-start">
      <span class="font-weight-semibold"> Download VPN app</span>
      <v-spacer></v-spacer>
    </v-card-title>

    <v-card-text>
      <v-row>
        <v-col
          v-for="data in statisticsData"
          :key="data.title"
          cols="6"
          md="3"
          class="d-flex align-center"
        >
        <button @click="onClickRedirect(data.url)">
          <v-avatar
            size="44"
            :color="resolveStatisticsIconVariation (data.title).color"
            rounded
            class="elevation-1"
          >
            <v-icon
              dark
              color="white"
              size="30"
            >
              {{ resolveStatisticsIconVariation (data.title).icon }}
            </v-icon>
          </v-avatar>
        </button>
          <div class="ms-3">
            <p class="text-xs mb-0">
              {{ data.title }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-subtitle class='ma-6'>
      <span class='red--text'>VPN App을 다운받으신 후 발급받은 인증키를 입력하셔야 VPN사용이 가능합니다.</span>
    </v-card-subtitle>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiAndroid,
  mdiApple,
  mdiAccountOutline,
  mdiCurrencyUsd,
  mdiTrendingUp,
  mdiDotsVertical,
  mdiLabelOutline,
  mdiMicrosoftWindows,
} from '@mdi/js'

export default {
  setup() {
    const statisticsData = [
      {
        title: 'iOS',
        total: '245k',
        url: 'https://itunes.apple.com/us/app/outline-app/id1356177741',
      },
      {
        title: 'Android',
        total: '12.5k',
        url: 'https://play.google.com/store/apps/details?id=org.outline.android.client',
      },
      {
        title: 'Windows',
        total: '1.54k',
        url: 'https://raw.githubusercontent.com/Jigsaw-Code/outline-releases/master/client/stable/Outline-Client.exe',
      },
      {
        title: 'macOS',
        total: '$88k',
        url: 'https://itunes.apple.com/us/app/outline-app/id1356178125',
      },
    ]

    const resolveStatisticsIconVariation = data => {
      if (data === 'iOS') return { icon: mdiApple, color: 'primary' }
      if (data === 'Android') return { icon: mdiAndroid, color: 'success' }
      if (data === 'Windows') return { icon: mdiMicrosoftWindows, color: 'warning' }
      if (data === 'macOS') return { icon: mdiApple, color: 'info' }

      return { icon: mdiAccountOutline, color: 'success' }
    }

    return {
      statisticsData,
      resolveStatisticsIconVariation,

      // icons
      icons: {
        mdiDotsVertical,
        mdiTrendingUp,
        mdiAccountOutline,
        mdiLabelOutline,
        mdiCurrencyUsd,
        mdiApple,
        mdiAndroid,
        mdiMicrosoftWindows,
      },
    }
  },
  methods: {
    onClickRedirect: function (url) {
      window.open(url, '_blank')
    },
  },
}
</script>
