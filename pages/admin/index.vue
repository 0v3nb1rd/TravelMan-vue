<template>
  <div class="analitics">
    <h1>Аналитика по постам</h1>
    <AppAnalyticsChart title="Количество просмотров" :labels="views.labels" :data="views.data" />
    <AppAnalyticsChart
      title="Количество комментариев"
      :labels="comments.labels"
      :data="comments.data"
    />
  </div>
</template>

<script>
// import { Bar } from 'vue-chartjs'
import AppAnalyticsChart from '@/components/admin/AnaliticsChart'
export default {
  layout: 'admin',
  components: { AppAnalyticsChart },
  head: {
    title: `Аналитика | | ${process.env.appName}`
  },
  middleware: ['admin-auth'],
  async asyncData({ store }) {
    const { views, comments } = await store.dispatch('post/getAnalytics')
    return { views, comments }
  }
}
</script>

<style></style>
