<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import NavBar from '../components/NavBar.vue'
import SideBarMenu from '../components/SideBarMenu.vue'
import FooterContent from '../components/FooterContent.vue'
import AccountActions from '../components/AccountActions.vue'
import AlertOutlet from '../components/AlertOutlet.vue'

const alerts = [
  { msg: 'alert added', badgeMsg: 'new', isActive: true },
]
</script>

<template>
  <main>
    <NavBar>
      <template #home>
        <span class="font-semibold text-xl tracking-tight">
          The Website ⌂
        </span>
      </template>
      <template #accountActions>
        <AccountActions />
      </template>
    </NavBar>
    <AlertOutlet :alerts="alerts" />
    <div class="md:grid md:grid-rows-4 md:grid-cols-6 h-full">
      <div class="md:row-start-1 md:row-span-4 md:col-span-full md:grid md:grid-cols-subgrid md:gap-2">
        <div class="col-start-1 col-span-1">
          <SideBarMenu />
        </div>
        <!-- Content -->
        <div class="md:col-start-2 md:col-span-5">
          <TheWelcome />
        </div>
      </div>
    </div>
    <FooterContent>
      <p>lorem ipsum</p>
    </FooterContent>
  </main>
</template>
