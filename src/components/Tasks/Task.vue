<template>
  <div class="container mt-1 mb-2 col-md-5">
    <div class="card" @click="deleteTask">
      <div class="card-body">
        <h5 class="card-title">{{card_title}}</h5>
        <p class="card-text">
          {{card_description}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  props:['card_title','card_description','task_id'],
  data() {
    return {
      title: "Vue Blog",
    };
  },
  methods:{
    deleteTask(){
      this.$emit('deleteTask',this.task_id);
    }
  }
  
};
</script>

<style scoped>
.card{
  background-color:#e52165;
  color:white;
}
.card:hover{
  cursor: pointer;
  border:2px solid black;
  
}
</style>