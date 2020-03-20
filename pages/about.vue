<template>
  <v-container>
    <v-sheet tag="article" elevation="2" class="mx-auto justify-center post-article">
      <header class="post-article__action">
        <h2>About me</h2>
      </header>

      <v-divider inset class="mx-auto mb-10"></v-divider>
      <section class="post__description post-article-container container-wrap">
        <!-- <vue-markdown>{{ post.text }}</vue-markdown> -->
        <!-- <h2>About me</h2> -->
        <p>Hi, I'm Nazar. I'm a 30 year old student graduating this year with a Associates degree in applied science with certification of software engineering. Growing up I would always try to make friends in different circles. I love meeting new people and learning new things.</p>
        <p>I grew up as a very active person but I absolutely craved technology also. My friends labeled me a "Social Nerd". I Would get home from wrestling practice and jump right on the computer to make things in Photoshop or mess around with html. I started doing graphics design when I was 25 and stearted learning html around the same time. The coding bug bit me, and it bit me hard.</p>
        <p>I'm a creative person and find no greater rush than creating new things. I'm addicted to learning and mastering new technologies and love bouncing idea back and forth trying to come up with new, exciting ideas on what to make.</p>
      </section>
      <section class="experience">
        <div class="container-wrap">
          <h2>Experience</h2>
          <v-divider inset class="mx-auto mb-10 divider"></v-divider>

          <v-row class="exp">
            <v-col class="exp-section" cols="4" sm="4" lg="4">
              <span class="exp-title">Languages & Markups</span>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <!-- <li></li> -->
              </ul>
            </v-col>
            <v-col class="exp-section" cols="4" sm="4" lg="4">
              <span class="exp-title">Frameworks & Libraries</span>
              <ul>
                <li>Bootstrap</li>
                <li>Materialize</li>
                <li>Jquery</li>
                <li>VUE</li>
                <li>Vuetify</li>
              </ul>
            </v-col>
            <v-col class="exp-section" cols="4" sm="4" lg="4">
              <span class="exp-title">Other</span>
              <ul>
                <li>Scss</li>
                <li>MVC</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Git</li>
              </ul>
            </v-col>
          </v-row>
        </div>
      </section>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  head: {
    title: `Про нас | ${process.env.appName}`
  }
}
</script>

<style lang="scss" scoped>
.container-wrap {
  max-width: 1170px;
  margin: auto;
}
.post-article__action {
  padding: 25px 0;
  margin: 0;
  @media screen and (max-width: $break-small) {
    padding: 15px 0;
  }
  h2 {
    font-size: 1.9rem;
    letter-spacing: 1rem;
    font-weight: 700;
    font-style: italic;
    @media screen and (max-width: $break-small) {
      font-size: 1.5rem;
      letter-spacing: 0.5rem;
    }
  }
}
.post-article-container {
  padding: 0 4% 40px 4%;
  p {
    // @media screen and (max-width: $break-small) {
    //   font-size: 1.1rem;
    // }
  }
}

section.experience {
  padding-top: 10px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 10%,
    rgba(28, 32, 38, 1) 70%
  );
  h2 {
    font-size: 1.7rem;
    letter-spacing: 0.6rem;
    font-style: italic;
    font-weight: 300;
  }
  .divider {
    margin-top: 10px;
    border-color: $textDesk;
  }
}
.exp {
  &-section {
    text-align: center;
    color: $accent;
    @media screen and (max-width: $break-small) {
    }
  }
  &-title {
    display: block;
    font-size: 1.2rem;
    font-weight: 600;
    @media screen and (max-width: $break-small) {
      font-size: 1rem;
      // padding: 5px;
    }
  }
  ul {
    display: inline-block;
    min-width: 100px;
    margin-top: 15px;
    padding: 0px;
    text-align: left;
    @media screen and (max-width: $break-small) {
      margin-top: 10px;
    }
  }
  li {
    position: relative;
    padding-left: 20px;
    color: lighten($accent, 25%);
    @media screen and (max-width: $break-small) {
      font-size: 0.8rem;
      padding-left: 15px;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 10px;
      display: inline-block;
      width: 10px;
      height: 3px;
      background-color: $textDesk;
      @media screen and (max-width: $break-small) {
        top: 8px;
        left: 2px;
        width: 5px;
        height: 2px;
      }
    }
  }
}
</style>