<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/other">其他</router-link>
    <router-link to="/counter">迷你vuex</router-link>
    <router-link to="/jsx">jsx</router-link>
  </div>
  <router-view></router-view>
  <!-- <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view> -->
</template>

<style>
#app {
}
</style>
