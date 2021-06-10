<template>
  <div>
    <Article
      :author="page.author"
      :createdAt="page.createdAt"
      :updatedAt="page.updatedAt"
      :source="page.source"
    >
      <h1>{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </Article>
  </div>
</template>

<script>
export default {
  transition: "slide-bottom",
  async asyncData({ $content, params, error }) {
    const page = await $content("fud/" + params.slug || "index")
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Pagina non trovata" });
      });

    return {
      page,
    };
  },
};
</script>