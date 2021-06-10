<template>
  <div class="container">
    <article class="content-wrapper">
      <div class="content">
        <slot />
      </div>
    </article>

    <ArticleMeta
      :author="author"
      :source="source"
      :createdAt="createdAt"
      :updatedAt="updatedAt"
    />
  </div>
</template>

<script>
import ArticleMeta from "./ArticleMeta.vue";

export default {
  props: {
    createdAt: String,
    updatedAt: String,
    author: Object,
    source: String,
  },
  components: {
    ArticleMeta,
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: white;
  margin-top: 3em;

  border: 1px solid #f9f9f9;
  border-radius: 0.25rem;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0px 0 1px rgb(10 10 10 / 2%);
  padding: 2em 3em;
}
</style>