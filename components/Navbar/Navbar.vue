<template>
  <nav>
    <ul>
      <nuxt-link tag="li" to="/">
        <a>Home</a>
      </nuxt-link>
      <nuxt-link tag="li" to="/blog">
        <a>blog</a>
      </nuxt-link>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$border-color: yellow;

nav {
  height: 8vh;
  background: #00cc99;

  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
    height: 100%;
    // border: 2px solid yellow;

    li {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.8em;

      &.nuxt-link-exact-active {
        border-bottom: 3px solid $border-color;

        a {
          color: $border-color;
        }
      }

      a {
        display: block;
        font-size: 1.3rem;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.8);

        &:hover,
        &:active {
          color: $border-color;
          transition: color 0.5s ease-out;
        }
      }
    }
  }
}
</style>