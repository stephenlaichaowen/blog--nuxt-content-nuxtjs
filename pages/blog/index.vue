<template>
  <div class="blog">
    <article v-for="blog in blogs" :key="blog.id">
      <nuxt-link :to="`/blog/${blog.slug}`">
        <h2>{{ blog.title }}</h2>
        <p>{{ blog.slug }}</p>
      </nuxt-link>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const blogs = await $content('blogs')
      .only(['title', 'slug'])
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
}

article {
  border: 3px solid #00cc99;
  padding: 2rem 1rem;
  

  h2 {
    margin-bottom: 1rem;
  }  
}
</style>