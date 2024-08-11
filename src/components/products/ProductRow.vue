<script setup>
import {faPenAlt, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import emitter from "@/emitter.js";
import ModalFormProduct from "@/components/products/modals/ModalFormProduct.vue";
import Toast from "@/toast.js";
import Api from "@/api.js";
import Swal from "@/swal.js";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  }
})

const openModalProduct = () => {
  emitter.emit('open-modal', {
    name: ModalFormProduct,
    props: {
      product: props.product,
    },
  })
}

const deleteProduct = async () => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Esta acción no se puede deshacer.',
    icon: 'warning',
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar',
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await Api.delete(`/articles/${props.product.id}`)

        await Toast.fire({
          icon: 'success',
          title: 'Producto eliminado.',
        })

        emitter.emit('refresh-products')
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

const profitMargin = () => {
  return (((props.product.sale_price - props.product.purchase_price) / props.product.purchase_price) * 100).toFixed(1)
}
</script>

<template>
  <tr>
    <td>{{ product.code }}</td>
    <td>{{ product.name }}</td>
    <td>{{ product.category.name }}</td>
    <td>{{ product.units }}</td>
    <td>{{ product.purchase_price }}</td>
    <td>{{ product.sale_price }}</td>
    <td>{{ profitMargin() }} %</td>
    <td>
      <div class="buttons is-flex is-justify-content-center">
        <div class="button is-rounded is-info px-2" @click="openModalProduct">
          <FontAwesomeIcon :icon="faPenAlt" />
        </div>
        <div class="button is-rounded is-danger px-2" @click="deleteProduct">
          <FontAwesomeIcon :icon="faTrashCan" />
        </div>
      </div>
    </td>
  </tr>
</template>