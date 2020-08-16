<template>
  <article>
    <nuxt-content :document="blog" />
    <Pagination :prev="prev" :next="next" />
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
  }
}
</script>

<style lang="scss" scoped>
article {
  padding: 2rem;
}
</style>