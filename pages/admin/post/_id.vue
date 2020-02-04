<template>
  <v-breadcrumbs divider=">" :items="items">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">{{ item.text.toUpperCase() }}</v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  data: () => ({
    items: [
      {
        text: 'Посты',
        disabled: false,
        href: '/admin/list'
      },
      {
        text: '$route.params.id',
        disabled: true
      }
    ]
  })
}
</script>

<style>
</style>