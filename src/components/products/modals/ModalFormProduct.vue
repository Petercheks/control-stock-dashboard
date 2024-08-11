<script setup>
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import emitter from "@/emitter.js";

const props = defineProps({
  product: {
    type: Object,
    required: false,
    default: () => null,
  }
})

const modal = ref()
const isLoading = ref(false)

const title = computed(() => {
  return props.product?.id ? 'Editar Producto' : 'Nuevo Producto'
})

const titleButtonSuccess = computed(() => {
  return props.product?.id ? 'Editar' : 'Guardar'
})

const closeModal = () => {
  emitter.emit('close-modal')
}

const confirmProduct = async () => {
  if (props.product?.id) {
    await editProduct()
  } else {
    await createProduct()
  }
}

const editProduct = async () => {
  console.log('editando')
}

const createProduct = async () => {
  console.log('create product')
}

onMounted(() => {
  modal.value.classList.add("is-active");
})

onBeforeUnmount(() => {
  modal.value.classList.remove("is-active");
})
</script>

<template>
  <div ref="modal" class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label class="label">Nombre: </label>
          <div class="control">

          </div>
        </div>
      </section>
      <footer class="modal-card-foot is-flex is-justify-content-space-between">
        <button class="button is-danger" @click="closeModal">Cancelar</button>
        <button
            class="button is-success"
            :class="{'is-loading': isLoading}"
            @click="confirmProduct"
        >
          {{ titleButtonSuccess }}
        </button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
</style>