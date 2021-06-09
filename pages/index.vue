<template>
  <div class="container">
    <h1 class="title">BitcoinItalia.<i>info</i></h1>
    <h2 class="subtitle">
      Un sito web open source dedicato a chi inizia ad interessarsi al mondo di
      Bitcoin
    </h2>
    <section class="steps">
      <Card
        title="Perché Bitcoin?"
        :more="{ label: 'Continua a leggere', path: '/intro/perche-bitcoin' }"
        difficulty="principiante"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit
        laoreet purus in imperdiet. Fusce in porta erat, eget facilisis urna.
        Cras sodales turpis eget mi pretium bibendum. Praesent rutrum.
      </Card>
      <Card
        title="Differenze tra sistema bancario tradizionale e Bitcoin"
        :more="{ label: 'Continua a leggere', path: '/intro/perche-bitcoin' }"
        difficulty="intermedio"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit
        laoreet purus in imperdiet. Fusce in porta erat, eget facilisis urna.
        Cras sodales turpis eget mi pretium bibendum. Praesent rutrum.
      </Card>
    </section>
  </div>
</template>

<script>
import Card from "~/components/Card";

export default {
  name: "HomePage",

  components: {
    Card,
  },
  transition: "slide-bottom",
};
</script>

<style lang="scss" scoped>
.container {
  h1 {
    margin-top: 2em;
    text-align: center;
  }
  h2 {
    margin: 2em 1em;
    text-align: center;
  }
}
</style>
