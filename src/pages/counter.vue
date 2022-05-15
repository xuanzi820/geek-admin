<template>
  <h1>迷你vuex</h1>
  {{count}}
  <button @click="add">+1</button><br>
  {{double}}
  <button @click="asyncAdd">异步+1</button>
  <hr>
</template>
<script setup>
import {computed} from "vue"
import {useStore} from "../store/gvuex"
let store = useStore()
let count = computed(()=>store.state.count)
let double = computed(()=>store.getters.double)
function add(){
  store.commit('add')
}
function asyncAdd(){
  store.dispatch('asyncAdd')
}
</script>