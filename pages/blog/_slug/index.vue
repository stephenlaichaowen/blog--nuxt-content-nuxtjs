<template>
  <article>
    <nuxt-content :document="blog" />
    <Pagination :prev="prev" :next="next" />

    <!-- axios / json -->
    <h1>{{ blog.title }}</h1>
    <p>{{ blog.content }}</p>
    <img :src="blog.image" alt="Image">
    <Pagination :prev="blog.prev" :next="blog.next" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content('blogs', params.slug).fetch()
    const [prev, next] = await $content('blogs')
      .only(['title', 'slug'])
      .surround(params.slug)
      .fetch()
    return {
      blog,
      prev,
      next
    }
  },

  // axios / json
  async asyncData({ $axios, params }) {
    const blog = await $axios.$get(`/${params.slug}.json`)
    console.log(params.slug)
    console.log(blog.prev)
    console.log(blog.next)
    return { blog }
  }
}
</script>

<style lang="scss" scoped>
article {
  padding: 2rem;

  h1,
  p {
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
  }
}
</style>