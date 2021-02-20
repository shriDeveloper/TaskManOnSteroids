<template>
    <div>
        <Form v-on:onTaskSaved="onTaskSaved"></Form>
        <h3 class="mt-4 text-center" style="color:white" v-if="isSaved">Task has Been Saved!</h3>
    </div>
</template>

<script>

import Form from '../Form/Form.vue';

export default {
    data(){
        return {
            isSaved:false,
        };
    },
    components:{
        Form,
    },
    methods:{
         onTaskSaved(e){
        console.log(e);
        this.isSaved = true;

    },
    deleteTask(e){
      this.tasks.splice(e,1);
    }
 },
 mounted(){
     this.$emit('changeTitle','Add Tasks');
 }


}
</script>

<style scoped>

</style>