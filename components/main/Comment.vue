<template>
  <v-card class="comment yellow lighten-5">
    <div class="comment__header">
      <span class="comment__name">{{ comment.name }}</span>
      <span>
        <v-icon>mdi-clock-outline</v-icon>
        {{ comment.date | date }}
        <!-- {{ new Date(comment.date).toLocaleString() }} -->
      </span>
    </div>
    <blockquote class="comment__text blockquote">{{ comment.text }}</blockquote>
  </v-card>
</template>
<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.comment {
  margin-bottom: 1rem;
  // max-width: 1000px;
  padding: 20px;
  // margin: 0 auto;
  margin-bottom: 1rem;

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
  }
  &__text {
    text-align: left;
    font-size: 17px;
    white-space: pre-line;
  }
}
</style>
