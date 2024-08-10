<script setup>

import { faPenAlt, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

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
  console.log('editar categoria')
}

const deleteCategory = () => {
  console.log('borrar categoria')
}
</script>

<template>
  <tr>
    <td class="is-narrow">{{ category.id }}</td>
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