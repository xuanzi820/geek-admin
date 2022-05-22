<template>
  <h1>jsx</h1>
  <Heading :level="3">Hello</Heading>
  <Todo></Todo>
</template>
<script setup>
import Heading from "../components/Heading.jsx"
import Todo from "../components/Todo.jsx"
</script>