<template>
  <div>
    <Header></Header>
    <div class="container mt-5 text-center col-md-12">
      <h1 style="color: white">{{title}}</h1>
    </div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/utils/Header.vue";
import Footer from "./components/utils/Footer.vue";

export default {
  data() {
    return {
      title:'TaskMan',
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
  },
};
</script>

<style>
</style>
