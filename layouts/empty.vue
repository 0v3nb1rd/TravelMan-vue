<template>
  <v-app id="inspire">
    <v-snackbar top v-model="snackbar" color="blue">{{ message }}</v-snackbar>
    <nuxt />
  </v-app>
</template>

<script>
export default {
  data: () => ({
    snackbar: false,
    message: ''
  }),
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(val) {
      this.message = val
      this.snackbar = true
    }
  }
}
</script>

<style lang="scss" scoped>
.empty-layout {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 4rem;
}
</style>>