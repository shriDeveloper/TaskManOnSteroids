<template>
  <div>
    <footer class="footer background mt-auto py-3 ">
      <div class="container">
        <span  style="color:white;">@{{ title }}</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Vue Blog",
    };
  },
};
</script>

<style scoped>
</style>