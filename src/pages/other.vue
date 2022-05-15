<template>
  <h1>动画</h1>
  <Trs></Trs>
  {{count}}
  <hr>
</template>
<script setup>
import Trs from "../components/trans.vue";
import {computed} from "vue"
import {useStore} from '../store/gvuex'
let store =useStore()
let count = computed(()=>store.state.count)
</script>