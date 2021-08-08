<template>
  <!--Clases CSS de Bootstrap-->
  <div class="loading-wrapper text-center py-5">
    <div class="spinner-wrapper w-100">
      <!--Componente Spinner de Bootstrap 🔄-->
      <b-spinner
        class="spinner"
        label="Loading..."
        :type="type"
        :variant="variant"
      >
      </b-spinner>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',

  props: {
    variant: {
      required: false,
      type: String,
      // Valor por defecto, en caso que no le se pase esta prop
      default: 'info',
      // Funcion validadora:
      validator: (value) => {
        // El valor de la prop debe coincidir con una de estas palabras
        return [
          'primary',
          'secondary',
          'danger',
          'warning',
          'success',
          'info',
          'light',
          'dark'
        ].includes(value.toLowerCase())
      }
    },

    type: {
      required: false,
      type: String,
      default: 'border',
      validator: (value) => {
        return ['border', 'grow'].includes(value.toLowerCase())
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.spinner-wrapper {
  .spinner {
    width: 4rem;
    height: 4rem;
  }
}
</style>