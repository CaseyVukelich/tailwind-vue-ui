<script setup>
defineProps(['class'])
</script>

<template>
  <div class="min-h-96 text-center bg-violet-950" :class="class">
    <slot />
  </div>
</template>
