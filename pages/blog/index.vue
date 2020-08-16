<template>
  <div class="blog">
    <article v-for="blog in blogs" :key="blog.id">
      <nuxt-link :to="`/blog/${blog.slug}`">
        <img :src="blog.image" alt="banner" />
        <main>
          <h2>{{ blog.title }}</h2>
          <p>{{ blog.slug }}</p>
        </main>
      </nuxt-link>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const blogs = await $content('blogs')
      .only(['title', 'slug', 'image'])
      .fetch()
    console.log(blogs)
    return {
      blogs
    }
  }
}
</script>

<style lang="scss" scoped>
.blog {
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;

  article {
    // border: 3px solid #00cc99;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    // box-shadow: 3px 3px 5px rgba(0, 204, 153, 0.5);
    box-shadow: 3px 3px 5px rgb(0, 204, 153);
    

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 100%;
      // border-top-left-radius: 4px;
      // border-top-right-radius: 4px;
    }

    main {
      padding: 2rem 1rem;
    }

    h2 {
      margin-bottom: 1rem;
    }
  }
}
</style>