<template>
  <v-container fluid>
    <Dday :nickname="nickname" v-show="show"/>
    <!-- <DDVPNStatisticsView v-show="!show"/> -->
  </v-container>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import Dday from './DdayView.vue'

export default {
  components: { Dday },
  props: ['nickname'],
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    // console.log(this.nickname)
  },
  methods: {
    updateUserStatus() {},
  },
  watch: {
    nickname: {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      handler(val, oldVal) {
        // do your stuff
        if (this.nickname != undefined) {
          this.show = true
        }
      },
    },
  },
}
</script>
