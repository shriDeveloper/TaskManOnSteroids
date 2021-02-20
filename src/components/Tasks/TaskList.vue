<template>
  <div class="container mt-1 mb-2 col-md-12">
    <h1 class="text-center">{{ title }}</h1>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: "List of Tasks",
    };
  },
  methods:{
    
  },
  components:{
      Task,
  }
  
};
</script>

<style scoped>
</style>