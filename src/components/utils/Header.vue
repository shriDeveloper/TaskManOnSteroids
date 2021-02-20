<template>

<nav class="navbar navbar-expand-lg mt-2">
  <div class="container-fluid">
    <!-- <router-link to="/" class="navbar-brand" style="color:white;"><b>{{title}}</b></router-link> -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item" style="padding-left:10px;">
          <router-link  class=" btn" style="background-color:#e52165;color:white;" to="/add_task"><b>Add Task</b></router-link>
        </li>
        <li class="nav-item" style="padding-left:10px;">
          <router-link class=" btn" style="background-color:#e52165;color:white;" to="/view_tasks"><b>View Tasks</b></router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      title: "TaskMan",
    };
  },
  methods:{
    showTasks(){
      this.$emit('showTasks','clicked');
    }
  }
};
</script>

<style scoped>
.header{
    background: #C33764;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #1D2671, #C33764);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #1D2671, #C33764); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>