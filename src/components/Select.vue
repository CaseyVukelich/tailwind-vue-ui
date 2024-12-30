<script setup>
defineProps(['options', 'selected'])
defineEmits(['change'])
</script>

<template>
  <select
    @change="$emit('change', $event.target.value)"
    class="bg-violet-400 focus:ring focus:ring-violet-600 active:shadow-xl text-cream-10 font-semivold rounded-full py-2 px-4"
  >
    <option
      v-for="(opt, i) in options"
      :key="i"
      :value="opt.value"
      :selected="i === selected"
    >
      {{opt.name}}
    </option>
  </select>
</template>
