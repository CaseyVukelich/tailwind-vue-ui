<script setup>
defineProps(['displayname', 'class', 'type'])

const value = defineModel('value')
</script>

<template>
  <input
    class="bg-violet-400 focus:outline-violet-600 text-cream-10 py-2 px-4 font-semibold active:shadow-xl rounded-full caret-cream-50"
    :class="class"
    :placeholder="displayname"
    :type="type"
    v-model="value"
  />
</template>

<style scoped>
::placeholder {
  color: rgb(255 252 235 / var(--tw-text-opacity, 1));
}
</style>
