<script setup>
defineProps(['containerClass', 'alertClass', 'closeClass'])
defineEmits(['close'])
</script>

<template>
  <div
    class="bg-indigo-900 text-center py-4 lg:px-4 inline-block text-indigo-100 rounded"
    :class="containerClass"
  >
    <div class="flex">
      <div
        class="flex-nowrap p-2 bg-indigo-800 items-center leading-none lg:rounded-full flex lg:inline-flex min-w-80"
        :class="alertClass"
        role="alert"
      >
        <slot name="badge" />
        <!-- default slot for message and/or content -->
        <slot/> 
      </div>
      <slot name="close">
        <button
          @click="$emit('close')"
          class="px-3 py-1 ml-2 hover:bg-indigo-950 rounded"
          :class="closeClass"
        >
          X
        </button>
      </slot>
    </div>
  </div>
</template>
