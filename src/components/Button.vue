<script setup>
defineProps(['class'])
defineEmits(['click'])
</script>

<template>
  <button
    class="bg-violet-400 hover:bg-violet-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-600 active:shadow-xl text-cream-10 font-semibold py-2 px-4 rounded-full"
    :class="class"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>
