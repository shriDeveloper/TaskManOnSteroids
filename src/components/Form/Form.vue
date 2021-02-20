<template>
  <div class="container mt-5 mb-4 col-md-5">
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          v-model.lazy="task.task_title"
          placeholder="Add Title"
        />
      </div>
      <div class="mb-3">
        <input
          type="text"
          v-model.lazy="task.task_description"
          class="form-control"
          placeholder="Add Description"
        
        />
      </div>
      <button @click="addTasks" style="background-color:#e52165;color:white;" class="btn btn-lg">Add</button>
  </div>
</template>

<script>

const axios = require('axios');

export default {
  data() {
    return {
      title: "Vue Blog",
      tasks:[],
      task:{
        task_title:'',
        task_description:'',
      },
    };
  },
  methods:{
    addTasks(){
      if(!this.task.task_title){
        alert("Fill Title Please");
        return false;
      }
      if(!this.task.task_description){
        alert("Fill Description Please");
        return false;
      }
      new Promise((resolve,reject)=>{
        axios.post('https://vueblog-48658-default-rtdb.firebaseio.com/tasks.json',this.task).then((result)=>{
          resolve(result);
        }).catch(err=>{
          reject(err);
        })
      }).then((res)=>{
        this.$emit('onTaskSaved','Saved');
      })
    }
  },
};
</script>

<style scoped>
</style>