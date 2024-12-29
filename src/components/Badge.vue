<script setup>
defineProps(['class'])
</script>

<template>
  <span
    class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"
    :class="class"
  >
    <slot />
  </span>
</template>
