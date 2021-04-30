<template>
  <div class="loading-wrapper text-center py-5">
    <div class="spinner-wrapper w-100">
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
      default: 'info',
      validator: (value) => {
        return [
          'primary',
          'secondary',
          'danger',
          'warning',
          'success',
          'info',
          'light',
          'dark',
        ].includes(value.toLowerCase())
      }
    },
    type: {
      required: false,
      type: String,
      default: 'border',
      validator: (value) => {
        return ['border','grow'].includes(value.toLowerCase())
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.spinner-wrapper {
  .spinner {
    width 4rem
    height 4rem
  }
}
</style>