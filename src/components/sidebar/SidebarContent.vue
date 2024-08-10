<script setup>
import { reactive } from 'vue'
import SidebarItem from './SidebarItem.vue'
import {faBoxesStacked, faDatabase} from '@fortawesome/free-solid-svg-icons'

const menuItems= reactive([
  {
    to: '/',
    label: 'Productos',
    icon: faBoxesStacked,
    key: 'productos',
  },
  {
    to: '/transacciones',
    label: 'Transacciones',
    icon: faDatabase,
    key: 'transacciones',
  },
]);
</script>
<template>
  <aside class="menu p-5">
    <p class="menu-label">Dashboard</p>
    <ul class="menu-list p-2">
      <SidebarItem
        v-for="item in menuItems"
        :key="`sidebar-item-${item.key}`"
        :item="item"
      />
    </ul>
  </aside>
</template>