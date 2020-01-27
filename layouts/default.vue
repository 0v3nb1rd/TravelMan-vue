<template>
  <v-app>
    <AppNavigation />

    <Paralax />

    <v-content>
      <nuxt />
      <!-- <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>

            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/zgxeLQ"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>-->
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import AppNavigation from '@/components/main/Navigation'
import Paralax from '@/components/main/Paralax'
import Footer from '@/components/Footer'
export default {
  components: {
    AppNavigation,
    Paralax,
    Footer
  }
}
</script>

<style lang="scss" scoped></style>
