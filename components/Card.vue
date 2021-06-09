<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ title }}
        </p>
        <b-tag v-if="difficulty" class="difficulty" rounded type="is-primary">{{
          difficulty
        }}</b-tag>
      </header>
      <div class="card-content">
        <div class="content">
          {{ !!content ? getContent() : "" }}
          <slot />
        </div>
        <div v-if="tags && expanded" class="tags-wrapper">
          <b-tag rounded v-for="(tag, i) in tags" :key="i">{{ tag }}</b-tag>
        </div>
      </div>

      <div class="card-more" :v-if="Object.keys(more).length">
        <div v-if="more.path" class="more-button">
          <b-button class="is-primary is-light">
            <NuxtLink :to="{ path: more.path }">
              {{ more.label }}
            </NuxtLink>
          </b-button>
        </div>
        <div class="more-button" v-if="more.faq" @click="toggleExpand">
          <b-icon
            v-if="!expanded"
            pack="fas"
            icon="chevron-down"
            size="is-small"
          >
          </b-icon>
          <b-icon v-if="expanded" pack="fas" icon="chevron-up" size="is-small">
          </b-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: false,
      default: "",
    },
    more: {
      type: Object,
    },
    tags: Array,
    difficulty: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    toggleExpand: function () {
      this.expanded = !this.expanded;
    },
    getContent: function () {
      if (this.expanded) {
        return this.content;
      } else {
        return this.truncate(this.content, 150);
      }
    },
    truncate: function (value, characters) {
      if (value && value.length > characters) {
        value = value.substring(0, characters) + "...";
      }
      return value;
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.card {
  .card-header {
    .difficulty {
      align-self: center;
      margin-right: 1em;
    }
  }

  .card-content {
    .tags-wrapper {
      .tag {
        margin: 0 0.25em;
      }
    }
  }

  .card-more {
    display: flex;

    .more-button {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      padding: 7px 7px;
      flex-flow: column;

      &:hover {
        opacity: 0.75;
      }

      .button {
        align-self: flex-end;
      }
    }
  }
}
</style>
