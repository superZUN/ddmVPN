<template>
  <v-container fluid>
    <span class="font-weight-semibold"> {{nickname}} 님,</span>
    <Dday />
  </v-container>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import Dday from './Dday.vue'

export default {
  components: { Dday },
  props: ['nickname'],
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    console.log(this.nickname)
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
        console.log('watch', this.nickname)
        if (this.nickname != undefined) {
          this.show = true
        }
      },
    },
  },
}
</script>
