<template>
  <v-footer color="primary">
    <div class="container main-footer">
      <v-row justify="center">
        <v-btn
          v-for="(icon, i) in social"
          :key="i"
          text
          icon
          :color="icon.color"
          :href="icon.href"
          fab
        >
          <v-icon x-large>{{ icon.icon }}</v-icon>
        </v-btn>
      </v-row>
    </div>

    <div class="container text-center bottom-footer">
      <div class="footer-copy">
        2019 ©
        <span class="logo-footer logo-letter">Trawel-Man</span>
      </div>
      <p>Копирование и размещение контента на других сайтах - запрещено.</p>
    </div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    social: [
      {
        icon: 'mdi-facebook',
        href: 'https://www.facebook.com/0v3nb1rd',
        color: 'blue'
      },
      {
        icon: 'mdi-instagram',
        href: 'https://www.instagram.com/0v3nb1rd/',
        color: 'purple'
      },
      {
        icon: 'mdi-youtube',
        href:
          'https://www.youtube.com/channel/UCbIfwvwtfg6IHYhEqRXpDwA?view_as=subscriber',
        color: 'red'
      },
      {
        icon: 'mdi-twitter',
        href: 'https://twitter.com/0v3nb1rd',
        color: 'blue'
      },
      {
        icon: 'mdi-github',
        href: 'https://github.com/0v3nb1rd',
        color: 'white'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.main-footer {
  background-color: $dark-blue;
  padding: 25px 0;
  border-bottom: 1px solid rgba(#fff, 0.1);
}

.bottom-footer {
  background-color: $dark-blue;
  padding: 25px 0 35px;
  .logo {
    display: inline-block;
  }
  p {
    margin: 5px;
    color: rgba(#fff, 0.2);
    font-size: 12px;
  }
  .footer-copy {
    color: rgba(#fff, 0.45);
    font-family: baron-it, sans-serif;
    font-size: 13px;
  }
}

.footer-menu {
  li {
    &.active {
      text-decoration: underline;
      background: none;
      a {
        background: none;
      }
    }
    a {
      font-size: 15px;
      padding: 0 10px;
      &:hover {
        text-decoration: underline;
        background: none;
      }
    }
  }
}
</style>
