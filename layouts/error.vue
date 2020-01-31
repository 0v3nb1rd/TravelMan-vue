<template>
  <v-app class="error-layout">
    <div class="error-content">
      <h1 class="error-title" v-if="error.statusCode === 404">{{ pageNotFound }}</h1>
      <h1 v-else>{{ otherError }}</h1>
      <NuxtLink to="/">Вернутся на главную</NuxtLink>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: '404 Ошибка ;(',
      otherError: 'An error occurred'
    }
  }
}
</script>

<style scoped>
.error-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
}

.error-title {
  color: rgb(145, 6, 6);

  margin-bottom: 1rem;
}
</style>
