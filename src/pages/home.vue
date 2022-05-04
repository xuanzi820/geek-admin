<template>
  <h1>这是首页</h1>
  <hr>
  <h1>你的评分是{{score}}</h1>
  <Rate3 v-model="score"></Rate3>
  <Rate2 :value="score" @update-rate="update"></Rate2>

  <hr>
  <Rate :value="score"></Rate>
  <Rate :value="2" theme="red"></Rate>
  <Rate :value="4" theme="green"></Rate>
  <hr>
  <h2>修改Favicon</h2>
  <Favicon></Favicon>
  <hr>
  <h2>Vueuse全屏</h2>
  <Vueuse></Vueuse>
  <hr>
  <h2>todolist案例</h2>
  <TodoList></TodoList>
</template>
<script setup>
import TodoList from '../components/TodoList.vue'
import Vueuse from '../components/vueuse.vue'
import Favicon from '../components/favicon.vue'
import {ref} from "vue"
import Rate3 from '../components/Rate3.vue'
import Rate2 from '../components/Rate2.vue'
import Rate from '../components/Rate1.vue'
let score = ref(3.5)
function update (){
  score.value = 3.5
}
</script>