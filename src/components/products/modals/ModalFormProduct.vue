<script setup>
import {computed, onBeforeUnmount, onMounted, reactive, ref} from "vue";
import emitter from "@/emitter.js";
import Api from "@/api.js";
import Toast from "@/toast.js";

const props = defineProps({
  product: {
    type: Object,
    required: false,
    default: () => null,
  }
})

const modal = ref()
const isLoading = ref(false)
const categories = ref([])

const form = reactive({
  name: '',
  units: null,
  code: null,
  purchase_price: null,
  sale_price: null,
  category_id: null,
})

const title = computed(() => {
  return props.product?.id ? 'Editar Producto' : 'Nuevo Producto'
})

const titleButtonSuccess = computed(() => {
  return props.product?.id ? 'Editar' : 'Guardar'
})

const isFormValid = computed( () => {
  return form.name !== '' &&
      form.units !== null &&
      form.code !== null &&
      form.purchase_price !== null && form.purchase_price >= 0 &&
      form.sale_price !== null && form.sale_price >= 0 &&
      form.category_id !== null
})

const closeModal = () => {
  emitter.emit('close-modal')
}

const confirmProduct = async () => {
  isLoading.value = true

  if (props.product?.id) {
    await editProduct()
  } else {
    await createProduct()
  }

  isLoading.value = false
}

const editProduct = async () => {
  try {
    await Api.patch(`/articles/${props.product.id}`, form)

    await Toast.fire({
      icon: 'success',
      title: 'Producto actualizado exitosamente'
    })

    emitter.emit('refresh-products')
    emitter.emit('refresh-categories')
    closeModal()
  } catch (error) {
    await Toast.fire({
      icon: 'Error',
      title: 'Error al actualizar el producto'
    })
  }
}

const createProduct = async () => {
  try {
    await Api.post('/articles', form)

    await Toast.fire({
      icon: 'success',
      title: 'Producto creado exitosamente'
    })

    emitter.emit('refresh-products')
    emitter.emit('refresh-categories')
    closeModal()
  } catch (error) {
    await Toast.fire({
      icon: 'Error',
      title: 'Error al crear el producto'
    })
  }
}

const getCategories = async () => {
  try {
    const { data } = await Api.get('/categories')
    categories.value = data
  } catch (error) {
    await Toast.fire({
      icon: 'Error',
      title: 'Error al obtener las categorias'
    })
  }
}

onMounted(() => {
  modal.value.classList.add("is-active");

  if (props.product) {
    form.name = props.product.name
    form.units = props.product.units
    form.code = props.product.code
    form.purchase_price = props.product.purchase_price
    form.sale_price = props.product.sale_price
    form.category_id = props.product.category.id
  }

  getCategories()
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
            <input
                class="input"
                type="text"
                placeholder="..."
                v-model="form.name"
            >
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-body">

            <div class="field">
              <label class="label">Codigo: </label>
              <div class="control">
                <input
                    class="input is-uppercase"
                    type="text"
                    placeholder="..."
                    v-model="form.code"
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Cantidad de unidades: </label>
              <div class="control">
                <input
                    class="input"
                    type="number"
                    placeholder="0"
                    v-model="form.units"
                >
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <label class="label">Precio de compra: </label>
              <div class="control">
                <input
                    class="input"
                    type="number"
                    placeholder="$..."
                    v-model="form.purchase_price"
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Precio de venta: </label>
              <div class="control">
                <input
                    class="input"
                    type="number"
                    placeholder="$..."
                    v-model="form.sale_price"
                >
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <label class="label">Categoria: </label>
              <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="form.category_id">
                    <option :value="null" disabled>Seleccionar</option>
                    <option
                        v-for="category in categories"
                        :key="category.id"
                        :value="category.id"
                    >
                      {{ category.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
      <footer class="modal-card-foot is-flex is-justify-content-space-between">
        <button class="button is-danger" @click="closeModal">Cancelar</button>
        <button
            class="button is-success"
            :class="{'is-loading': isLoading}"
            @click="confirmProduct"
            :disabled="!isFormValid"
        >
          {{ titleButtonSuccess }}
        </button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
</style>