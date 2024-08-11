<script setup>
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import emitter from "@/emitter.js";
import Api from "@/api.js";
import Toast from "@/toast.js";

const props = defineProps({
  category: {
    type: Object,
    required: false,
    default: () => null,
  }
})
const modal = ref();
const categoryName = ref(props.category?.name ?? null)
const isLoading = ref(false)

const title = computed(() => {
  return props.category?.id ? 'Editar Categoria' : 'Nueva Categoria'
})

const titleButtonSuccess = computed(() => {
  return props.category?.id ? 'Editar' : 'Guardar'
})

const closeModal = () => {
  emitter.emit('close-modal')
}

const confirmCategory = async () => {
  if (props.category?.id) {
    await editCategory()
  } else {
    await createCategory()
  }
}

const editCategory = async () => {
  isLoading.value = true

  try {
    await Api.patch(`/categories/${props.category.id}`, {
      name: categoryName.value,
    })

    await Toast.fire({
      icon: 'success',
      title: 'Categoria editada.',
    })

    isLoading.value = false
    emitter.emit('refresh-categories')
    emitter.emit('close-modal')
  } catch (error) {
    console.log(error)
    await Toast.fire({
      icon: 'error',
      title: 'Error',
      text: error.response.data.detail
    })
  }
}

const createCategory = async () => {
  isLoading.value = true

  try {
    await Api.post('/categories', {
      name: categoryName.value,
    })

    await Toast.fire({
      icon: 'success',
      title: 'Categoria creada.',
    })

    isLoading.value = false
    emitter.emit('refresh-categories')
    emitter.emit('close-modal')
  } catch (error) {
    await Toast.fire({
      icon: 'error',
      title: 'Error',
      text: error.response.data.detail
    })
  }
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
            <input class="input" type="text" placeholder="Aretes..." v-model="categoryName">
          </div>
        </div>
      </section>
      <footer class="modal-card-foot is-flex is-justify-content-space-between">
          <button class="button is-danger" @click="closeModal">Cancelar</button>
          <button
              class="button is-success"
              :class="{'is-loading': isLoading}"
              @click="confirmCategory"
              :disabled="!categoryName"
          >
            {{ titleButtonSuccess }}
          </button>
      </footer>
    </div>
  </div>
</template>