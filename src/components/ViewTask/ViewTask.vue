<template>
  
    
    
    <div>
        <Spinner v-if="isProgess" class="mt-5" size="large" line-fg-color="#e52165"></Spinner>
    <div v-if="tasks" class="mt-5">
      <Task
        v-on:deleteTask="deleteTask"
        :key="index"
        v-for="(task, index) in tasks"
        :card_description="task.task_description"
        :card_title="task.task_title"
        :task_id="index"
      ></Task>
    </div>
    <div v-else>
        <h2 class="mt-5 text-center" style="color:white;">No Tasks Found</h2>
    </div>
    </div>
</template>

<script>
import Task from "../Tasks/Task.vue";
import Spinner from 'vue-simple-spinner'

const axios = require("axios");

export default {
  data() {
    return {
      tasks: [],
      isProgess:true,
    };
  },
  components: {
    Task,
    Spinner,
  },
  methods: {
    deleteTask(e) {
        console.log("Delete"+e);
        //delete here
        new Promise((resolve,reject)=>{
            axios.delete(`https://vueblog-48658-default-rtdb.firebaseio.com/tasks/${e}.json`).then(res=>{
                resolve(res);
            }).catch(err=>{
                reject(err);
            })
        }).then((res)=>{
            console.log('Deleted Success!');

        })
    },
  },
  mounted() {
    //get call here
    new Promise((resolve, reject) => {
      axios
        .get("https://vueblog-48658-default-rtdb.firebaseio.com/tasks.json")
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }).then((res) => {
      this.tasks = res.data;
      this.isProgess = false;
      if(!this.tasks){
          console.log("Empty");
      }
    });
  },
};
</script>
<style scoped>
</style>

