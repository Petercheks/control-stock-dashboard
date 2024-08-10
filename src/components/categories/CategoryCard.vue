<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'

const showContent = ref(false);
</script>

<template>
  <div class="card">
    <header class="card-header" @click="showContent = !showContent" style="cursor: pointer">
      <p class="card-header-title has-text-primary is-size-5">Categorias</p>
      <button class="card-header-icon" aria-label="more options">
      <span class="icon has-text-primary" v-if="!showContent">
        <FontAwesomeIcon :icon="faAngleDown" />
      </span>
      <span class="icon has-text-primary" v-else>
        <FontAwesomeIcon :icon="faAngleUp" />
      </span>
      </button>
    </header>
    <div v-if="showContent" class="card-content">
      <slot></slot>
    </div>
  </div>
</template>