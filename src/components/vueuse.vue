<template>  
  <h1 @click="toggle">全屏</h1>
  <button @click="enter">enter</button>
</template>
<script setup>
import {useFullscreen} from '@vueuse/core'
const {isFullscreen,esc,enter,toggle}  = useFullscreen()
</script>