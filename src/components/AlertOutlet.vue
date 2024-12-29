<script setup>
import {ref} from 'vue'
import Alert from './Alert.vue'
import Badge from './Badge.vue'


const props = defineProps({
  alerts: {
    type: Array,
    required: true,
    validator (value) {
      return value.every(v => Object.hasOwn(v, 'isActive'))
    }
  }
})

let alerts = ref([
  { msg: 'the alert worked', badgeMsg: 'new', isActive: true },
  { msg: 'welcome to the admin site', badgeMsg: 'new', isActive: true },
  { msg: 'test 3', badgeMsg: 'new', isActive: true },
  ...props.alerts
])

function closeAlert(i) {
  alerts.value[i].isActive = false
}
</script>

<template>
  <div class="absolute top-10 md:inset-x-1/3">
    <template v-for="(alert, i) in alerts" :key="i">
      <Alert
        v-if="alerts[i].isActive"
        containerClass="mt-4"
        @close="closeAlert(i)" 
      >
        <template #badge>
          <Badge>{{alert.badgeMsg}}</Badge>
        </template>
        <p class="font-semibod mr-2 text-left">{{alert.msg}}</p>
      </Alert>
    </template>
  </div>
</template>
