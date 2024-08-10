<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPenAlt, faTrashCan } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div class="box is-rounded">
    <button class="button is-success mb-5 mt-2">
      Agregar Producto
    </button>
    <table class="table is-striped is-fullwidth is-hoverable">
      <thead>
      <tr>
        <th scope="col">Codigo</th>
        <th scope="col">Articulo</th>
        <th scope="col">Categoria</th>
        <th scope="col">Cant. Disponible</th>
        <th scope="col">Monto total</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>34324</td>
        <td>Procucto name</td>
        <td>Categoria name</td>
        <td>7384</td>
        <td>$456.645</td>
        <td>
          <div class="buttons is-flex is-justify-content-center">
            <div class="button is-rounded is-info px-2">
              <FontAwesomeIcon :icon="faPenAlt" />
            </div>
            <div class="button is-rounded is-danger px-2">
              <FontAwesomeIcon :icon="faTrashCan" />
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>34324</td>
        <td>Procucto name</td>
        <td>Categoria name</td>
        <td>7384</td>
        <td>$456.645</td>
        <td>
          <div class="buttons is-flex is-justify-content-center">
            <div class="button is-rounded is-info px-2">
              <FontAwesomeIcon :icon="faPenAlt" />
            </div>
            <div class="button is-rounded is-danger px-2">
              <FontAwesomeIcon :icon="faTrashCan" />
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>34324</td>
        <td>Procucto name</td>
        <td>Categoria name</td>
        <td>7384</td>
        <td>$456.645</td>
        <td>
          <div class="buttons is-flex is-justify-content-center">
            <div class="button is-rounded is-info px-2">
              <FontAwesomeIcon :icon="faPenAlt" />
            </div>
            <div class="button is-rounded is-danger px-2">
              <FontAwesomeIcon :icon="faTrashCan" />
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>34324</td>
        <td>Procucto name</td>
        <td>Categoria name</td>
        <td>7384</td>
        <td>$456.645</td>
        <td>
          <div class="buttons is-flex is-justify-content-center">
            <div class="button is-rounded is-info px-2">
              <FontAwesomeIcon :icon="faPenAlt" />
            </div>
            <div class="button is-rounded is-danger px-2">
              <FontAwesomeIcon :icon="faTrashCan" />
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>34324</td>
        <td>Procucto name</td>
        <td>Categoria name</td>
        <td>7384</td>
        <td>$456.645</td>
        <td>
          <div class="buttons is-flex is-justify-content-center">
            <div class="button is-rounded is-info px-2">
              <FontAwesomeIcon :icon="faPenAlt" />
            </div>
            <div class="button is-rounded is-danger px-2">
              <FontAwesomeIcon :icon="faTrashCan" />
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>34324</td>
        <td>Procucto name</td>
        <td>Categoria name</td>
        <td>7384</td>
        <td>$456.645</td>
        <td>
          <div class="buttons is-flex is-justify-content-center">
            <div class="button is-rounded is-info px-2">
              <FontAwesomeIcon :icon="faPenAlt" />
            </div>
            <div class="button is-rounded is-danger px-2">
              <FontAwesomeIcon :icon="faTrashCan" />
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>