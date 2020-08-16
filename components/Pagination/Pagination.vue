<template>
  <div class="pagination">
    <nuxt-link v-if="prev" :to="`/blog/${prev.slug}`"><i class="far fa-arrow-alt-circle-left"></i> {{prev.title}}</nuxt-link>
    <nuxt-link v-if="next" :to="`/blog/${next.slug}`"><i class="far fa-arrow-alt-circle-right"></i> {{next.title}}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      required: true
    },
    next: {
      type: Object,
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>
$theme-color: #00cc99;
.pagination {
   margin-top: 1rem;
   display: flex;
  //  justify-content: space-between;
   justify-content: center;

   a {
     text-decoration: none;
     color: $theme-color;
     margin: 0 1rem;
   }
 }
</style>