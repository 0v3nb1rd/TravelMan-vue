<template>
  <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" app>
    <v-list dense>
      <v-list-item v-for="item in items" :key="item.text" :to="item.rout">
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: 'mdi-help-circle', text: 'Аналитика', rout: '/admin' },
      { icon: 'mdi-history', text: 'Создать пост', rout: '/admin/create' },
      { icon: 'mdi-message', text: 'Посты', rout: '/admin/list' },
      { icon: 'mdi-contacts', text: 'Пользователи', rout: '/admin/user' },
      { icon: 'mdi-settings', text: 'Выйти', rout: '/admin/logout' }
    ]
  })
}
</script>

<style>
</style>