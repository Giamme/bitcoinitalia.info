<template>
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
    <span v-if="source" class="source-wrapper">
      <p>Sorgente:</p>
      <a :href="source" target="_blank">{{ source | truncate }}</a>
    </span>
    <span v-if="author.publisher" class="publisher-wrapper">
      <p>Pubblicato da:</p>
      <b-tooltip label="twitter">
        <a
          target="_blank"
          v-if="author.publisher.twitter"
          :href="'https://twitter.com/' + author.publisher.twitter"
          >@{{ author.publisher.twitter }}</a
        ></b-tooltip
      >
      <p v-if="!author.publisher.twitter && author.publisher.name">
        {{ author.publisher.name }}
      </p>
    </span>
    <div class="dates">
      <span>Pubblicato il: {{ createdAt | parseDate }}</span>
      <span>Ultima modifica: {{ updatedAt | parseDate }}</span>
    </div>
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
    source: String,
  },
  filters: {
    truncate: function (value, characters = 30) {
      if (value && value.length > characters) {
        value = value.substring(0, characters) + "...";
      }
      return value;
    },

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
.meta-wrapper {
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  margin-top: 4em;

  background: orange;
  color: white;
  padding: 1em;
  border-radius: 5px;

  font-size: 0.75em;

  @media (max-width: 768px) {
    flex-flow: column;
    justify-content: left;
  }

  .author-wrapper,
  .source-wrapper,
  .publisher-wrapper {
    display: inline-flex;
    margin-right: auto;

    p:first-child {
      margin-right: 0.5em;
    }

    a {
      color: #333;
    }
  }
  .dates {
    @media (max-width: 768px) {
      display: contents;
    }
    span {
      margin: 0 0.25em;

      @media (max-width: 768px) {
        margin: 0;
      }
    }
  }
}
</style>