<template>
  <h1>这是关于页面</h1>
  <h1 @click="add">{{ count }}</h1>
</template>
<script setup>
import { ref } from "vue";
import { useTodos } from "../utils/useTodos";
// import { useMouse } from '../utils/mouse';
// let {x,y} = useMouse()
// console.log(x.value,y.value)
let count = ref(1);
let color = ref("red");
function add() {
  count.value++;
  color.value = Math.random() > 0.5 ? "blue" : "red";
}
let { title, todos, addNewEle, clearData, active, all, allDone } = useTodos();
</script>
<style scoped>
h1 {
  color: v-bind(color);
}
</style>