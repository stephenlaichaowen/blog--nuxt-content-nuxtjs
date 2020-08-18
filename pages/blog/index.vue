<template>
  <div class="blog">
    <!-- <article v-for="blog in blogs" :key="blog.id">
      <nuxt-link :to="`/blog/${blog.slug}`">
        <img :src="blog.image" alt="banner" />
        <main>
          <h2>{{ blog.title }}</h2>
          <p>{{ blog.slug }}</p>
        </main>
      </nuxt-link>
    </article>-->

    <b-card
      v-for="blog in blogs"
      :key="blog.id"
      :title="blog.title"
      :img-src="blog.image"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2 card"
    >
      <b-card-text
        class="content"
      >Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
      <div class="margin"></div>
      <nuxt-link :to="`/blog/${blog.slug}`" class="link">
        <b-button variant="primary">Continue ...</b-button>
      </nuxt-link>
    </b-card>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const blogs = await $content('blogs').fetch()
    return { blogs }
  }

  // axios / json
  // async asyncData({ $axios }) {
  //   const blogs = await $axios.$get(`/blogs.json`)
  //   return { blogs }
  // }
}
</script>

<style lang="scss" scoped>
.blog {
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;

  .card {
    box-shadow: 5px 10px 8px #888888;

    &:hover {
      transform: translateY(-5px);
      cursor: pointer;
    }
  }

  .margin {
    margin: 0.5rem 0;
  }

  // article {
  //   border-top-left-radius: 4px;
  //   border-top-right-radius: 4px;
  //   box-shadow: 3px 3px 5px rgba(0, 204, 153, 0.5);

  //   &:hover {
  //     transform: translateY(-5px);
  //   }

  //   img {
  //     width: 100%;
  //   }

  //   main {
  //     padding: 2rem 1rem;
  //   }

  //   h2 {
  //     margin-bottom: 1rem;
  //   }
  // }
}
</style>