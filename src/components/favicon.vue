<script setup>
import useFavicon from "../utils/favicon";
let { favicon } = useFavicon();
function loading() {
  favicon.value = "/m7.ico";
}
</script>
<template>
  <button @click="loading">loading</button>
</template>