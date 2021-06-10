<template>
  <div>
    <b-navbar>
      <template #brand>
        <b-navbar-item href="/">
          <h1>BitcoinItalia.<i>info</i></h1>
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item tag="NuxtLink" :to="{ path: '/' }">
          Cos'é Bitcoin?
        </b-navbar-item>
        <b-navbar-item href="https://bitcoin-intro.com/it/">
          Come iniziare?
        </b-navbar-item>
        <b-navbar-item tag="NuxtLink" :to="{ path: '/faq' }">
          Domande frequenti
        </b-navbar-item>
        <b-navbar-dropdown collapsible label="Anti-FUD">
          <b-navbar-item
            v-for="(article, i) in fudList"
            :key="i"
            tag="NuxtLink"
            :to="{ path: article.path }"
          >
            {{ article.title }}
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
      <template #end>
        <b-button
          @click="isDonationModalActive = true"
          outlined
          type="is-primary"
        >
          <i class="fab fa-creative-commons-nc-eu"></i>
          <i class="fab fa-creative-commons-nc-jp"></i>
          <i class="fab fa-creative-commons-nc"></i>

          Donazioni
        </b-button>
      </template>
    </b-navbar>
    <Nuxt />
    <div class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>BitcoinItalia.<i>info</i></strong> -
          <a @click="isCreditsModalActive = true">credits</a> -
          <a href="https://github.com/Giamme/bitcoinitalia.info" target="_blank"
            >github</a
          >
        </p>
      </div>
    </div>
    <b-modal
      v-model="isDonationModalActive"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-label="Donation Modal"
      aria-modal
    >
      <template>
        <div class="card">
          <div class="card-header">
            <h1 class="card-header-title">Hallelujua</h1>
          </div>
          <div class="card-content">
            <p>Vivaa las vegas</p>
          </div>
        </div>
      </template>
    </b-modal>
    <b-modal
      v-model="isCreditsModalActive"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-label="Credits Modal"
      aria-modal
    >
      <template>
        <div class="card">
          <div class="card-header">
            <h1 class="card-header-title">Hallelujua</h1>
          </div>
          <div class="card-content">
            <p>Vivaa las vegas</p>
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fudList: [],
      isDonationModalActive: false,
      isCreditsModalActive: false,
    };
  },
  async fetch() {
    this.fudList = await this.$content("fud")
      .only(["title", "path"])
      .sortBy("title")
      .fetch();
  },
};
</script>


