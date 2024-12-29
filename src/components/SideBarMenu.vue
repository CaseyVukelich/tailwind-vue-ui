<script setup>
import {ref} from 'vue'

defineProps(['containerClass', 'listClass', 'listItemClass', 'linkClass'])

let routes = ref([
  {
    name: 'home',
    route: '/',
    icon: '☛'
  },
  {
    name: 'about',
    route: '/about',
    icon: '☛'
  },
])
</script>

<template>
  <div class="md:grid md:auto-rows-min md:gap-4 h-full bg-violet-400" :class="containerClass">
    <ul style="list-style-type: none" class="md:mt-1" :class="listClass">
      <li
        v-for="(route, i) in routes"
        class="hover:bg-violet-500 mb-2 rounded-md py-2"
        :class="[{'bg-violet-600': $route.path === route.route}, listItemClass]"
      >
        <span>{{route.icon}}</span>
        <RouterLink
          :to="route.route"
          class="font-fira-sans text-mdd font-medium text-white"
         :class="linkClass"
        >
          {{route.name}}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
