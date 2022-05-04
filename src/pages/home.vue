<template>
  <!-- <h1>这是首页</h1> -->
  <h1>你的评分是{{score}}</h1>
  <Rate :value="score" @update-rate="update"></Rate>
  <!-- <Rate :value="score"></Rate>
  <Rate :value="2" theme="red"></Rate>
  <Rate :value="4" theme="green"></Rate> -->
  <!-- <Favicon></Favicon>
  <Vueuse></Vueuse>
  <TodoList></TodoList> -->
</template>
<script setup>
// import TodoList from '../components/TodoList.vue'
// import Vueuse from '../components/vueuse.vue'
// import Favicon from '../components/favicon.vue'
import {ref} from "vue"
import Rate from '../components/Rate2.vue'
// import Rate from '../components/Rate1.vue'
let score = ref(3.5)
function update (){
  score.value = 3.5
}
</script>