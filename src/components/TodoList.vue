<template>
  <div class="hello">
    <input type="text" v-model="title" @keydown.enter="addNewEle" />
    <button v-if="active < all" @click="clearData">清理</button>
    <ul v-if="todos.length">
      <li v-for="(item, index) in todos" :key="index">
        <input type="checkbox" v-model="item.done" />
        <span :class="{ done: item.done }">{{ item.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span>{{ `${active} / ${all}` }}</span>
    </div>
  </div>
</template>

<script setup>
import { useTodos } from '../utils/useTodos';
let {title, todos, addNewEle, clearData, active, all, allDone} = useTodos()
</script>

<style scoped>
.done {
  color: gray;
  text-decoration: line-through;
}
</style>
