<template>
  <v-app>
    <AppNavigation />

    <nuxt />

    <Footer />
  </v-app>
</template>

<script>
import AppNavigation from '@/components/main/Navigation'
import Footer from '@/components/Footer'
export default {
  components: {
    AppNavigation,
    Footer
  }
}
</script>

<style lang="scss" scoped></style>
