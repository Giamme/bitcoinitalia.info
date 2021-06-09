<template>
  <div class="container">
    <div class="meta-wrapper">
      <span v-if="author" class="author-wrapper">
        <p>Autore:</p>
        <b-tooltip label="twitter">
          <a
            target="_blank"
            v-if="author.twitter"
            :href="'https://twitter.com/' + author.twitter"
            >@{{ author.twitter }}</a
          ></b-tooltip
        >
        <p v-if="!author.twitter && author.name">{{ author.name }}</p>
      </span>
      <div class="dates">
        <span>Pubblicato il: {{ createdAt | parseDate }}</span>
        <span>Ultima modifica: {{ updatedAt | parseDate }}</span>
      </div>
    </div>
    <article class="content-wrapper">
      <div class="content">
        <slot />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    createdAt: {
      type: String,
      default: "sconosciuto",
    },
    updatedAt: {
      type: String,
      default: "sconosciuto",
    },
    author: Object,
  },
  filters: {
    parseDate: function (value) {
      const date = new Date(value);
      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      let dt = date.getDate();

      if (dt < 10) {
        dt = "0" + dt;
      }
      if (month < 10) {
        month = "0" + month;
      }

      return dt + "/" + month + "/" + year;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: white;
  margin-top: 3em;

  .meta-wrapper {
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    margin-bottom: 2em;

    font-size: 0.75em;

    .author-wrapper {
      display: inline-flex;
      margin-right: auto;

      p:first-child {
        margin-right: 0.5em;
      }

      a {
        color: #3ca2f2;
      }
    }
    .dates {
      span {
        margin: 0 0.25em;
      }
    }
  }
  border: 1px solid #f9f9f9;
  border-radius: 0.25rem;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0px 0 1px rgb(10 10 10 / 2%);
  padding: 2em 3em;
}
</style>