<template>
  <div class="hello">
    <input type="text" v-model="title" @keydown.enter="addNewEle" />
    <button v-if="active < all" @click="clearData">清理</button>
    <ul v-if="todos.length">
      <transition-group name="flip-list" tag="ul">
        <li v-for="(item, index) in todos" :key="item.id">
          <input type="checkbox" v-model="item.done" />
          <span :class="{ done: item.done }">{{ item.title }}</span>
          <span class="remove-btn" @click="removeTodo($event, index)">❌</span>
        </li>
      </transition-group>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span>{{ `${active} / ${all}` }}</span>
    </div>
  </div>
  <transition name="modal">
    <div class="info-wrapper" v-if="showModal">
      <div class="info">哥，你啥也没输入！</div>
    </div>
  </transition>
  <span class="dustbin">🗑</span>
  <div class="animate-wrap">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div class="animate" v-show="animate.show">📋</div>
    </transition>
  </div>
</template>

<script setup>
import { useTodos } from "../utils/useTodos";
import {reactive} from 'vue'
let { showModal, title, todos, addNewEle, clearData, active, all, allDone } =
  useTodos();
let animate = reactive({
  show: false,
  el: null,
});
function beforeEnter(el) {
  let dom = animate.el;
  let rect = dom.getBoundingClientRect();
  let x = window.innerWidth - rect.left - 60;
  let y = rect.top - 10;
  el.style.transform = `translate(-${x}px,${y}px)`;
}
function enter(el, done) {
  document.body.offsetHeight;
  el.style.transform = `translate(0,0)`;
  el.addEventListener = ("transitionend", done);
}
function afterEnter(el) {
  animate.show = false;
  el.style.display = "none";
}
function removeTodo(e, i) {
  animate.el = e.target;
  todos.value.splice(i, 1);
}
</script>

<style>
.done {
  color: gray;
  text-decoration: line-through;
}
.info-wrapper {
  position: fixed;
  top: 20px;
  width: 200px;
}
.info {
  padding: 20px;
  color: white;
  background: pink;
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.flip-list-move {
  transition: transform 0.8s ease;
}
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s ease;
}
.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.animate-wrap .animate {
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 100;
  transition: all 0.5s linear;
}
</style>
