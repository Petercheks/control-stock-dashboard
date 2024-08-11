<script setup>
import { faPenAlt, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import emitter from "@/emitter.js";
import ModalFormCategory from "@/components/categories/modals/ModalFormCategory.vue";
import Api from "@/api.js";
import Toast from "@/toast.js";
import Swal from '@/swal.js';

const props = defineProps({
  category: {
    type: Object,
    required: true
  }
})

const createdAt = () => {
  const date = new Date(props.category.created_at);
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  return date.toLocaleDateString('es-ES', options);
}

const editCategory = () => {
  emitter.emit('open-modal', {
    name: ModalFormCategory,
    props: {
      category: props.category,
    },
  })
}

const deleteCategory = async () => {

  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Esta acción no se puede deshacer.',
    icon: 'warning',
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar',
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await Api.delete(`/categories/${props.category.id}`)

        await Toast.fire({
          icon: 'success',
          title: 'Categoria eliminada.',
        })

        emitter.emit('refresh-categories')
      } catch (error) {
        await Toast.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.detail
        })
      }
    }
  })
}
</script>

<template>
  <tr>
    <td>{{ category.name }}</td>
    <td>567</td>
    <td>{{ createdAt() }}</td>
    <td>
      <div class="buttons is-flex is-justify-content-center">
        <div class="button is-rounded is-info px-2" @click="editCategory">
          <FontAwesomeIcon :icon="faPenAlt" />
        </div>
        <div class="button is-rounded is-danger px-2" @click="deleteCategory">
          <FontAwesomeIcon :icon="faTrashCan" />
        </div>
      </div>
    </td>
  </tr>
</template>