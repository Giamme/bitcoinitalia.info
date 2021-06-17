<template>
  <div class="container">
    <div class="filters-container">
      <div class="filters-content">
        <span>Filtri: </span>
        <b-button
          size="is-small"
          :type="'is-light ' + (isFiltered(tag) ? 'is-primary' : '')"
          v-for="(tag, i) in tags"
          :key="i"
          rounded
          @click="addFilter(tag)"
          >{{ tag }}</b-button
        >
      </div>
    </div>
    <div class="_grid">
      <div
        v-for="(faq, i) in filteredArray()"
        :key="i"
        :class="'_card-wrapper ' + (faq.a.length > 149 ? 'wide ' : '')"
      >
        <Card
          :title="faq.q"
          :more="{ faq: true }"
          :content="faq.a"
          class="_card"
          :tags="faq.tags"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "~/components/Card";

export default {
  components: {
    Card,
  },
  transition: "slide-bottom",
  data() {
    return {
      faqs: [],
      filter: [],
      tags: [
        "blockchain",
        "economia",
        "decentralizzazione",
        "sicurezza",
        "fud",
        "storia",
        "leggi",
      ],
    };
  },
  methods: {
    isFiltered: function (tag) {
      if (this.filter.length) {
        return !!this.filter.find((fil) => fil === tag);
      } else return true;
    },
    filteredArray: function () {
      if (this.filter.length) {
        return this.faqs.filter((faq) =>
          faq.tags.find((tag) => this.filter.includes(tag))
        );
      } else return this.faqs;
    },
    addFilter: function (tag) {
      if (!this.filter.includes(tag)) {
        this.filter.push(tag);
      } else {
        this.filter = this.filter.filter((fil) => fil !== tag);
      }
    },
  },
  async fetch() {
    this.faqs = await this.$content("faq").only(['a', 'q', 'tags']).fetch()

  },
};
</script>

<style lang="scss" scoped>
.container {
  .filters-container {
    padding: 1.5em;

    background: white;
    margin: 2em 0.75em;
    border-radius: 5px;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
      0 0px 0 1px rgba(10, 10, 10, 0.02);

    .filters-content {
      display: flex;
      align-content: center;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;

      span {
        align-self: center;
        margin-right: 1.5em;

        @media (max-width: 768px) {
          display: none;
        }
      }

      button {
        margin: 0.25em 0.5em;
      }
    }
  }

  ._grid {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: stretch;

    @media (max-width: 768px) {
      flex-wrap: nowrap;
      flex-flow: column;
    }

    ._card-wrapper {
      flex: 25%;

      @media (max-width: 1440px) {
        flex: 50%;
      }

      &.wide {
        flex: 50%;

        @media (max-width: 1440px) {
          flex: 100%;
        }
      }
    }
  }
}
</style>