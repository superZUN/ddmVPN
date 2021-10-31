<template>
  <v-card v-if="show" class='mt-12 mb-12 offset-sm="2"' elevation="0">
    <v-card-title class="align-start">
      <span class="font-weight-semibold"> {{nickname}} hi 로그인했네!!!</span>
      <v-spacer></v-spacer>
    </v-card-title>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
export default {
  props: ['nickname'],
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    console.log(this.nickname)
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
