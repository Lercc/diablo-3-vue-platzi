<template>
  <div>
    <base-loading v-if="isLoading" />
    <h1>Profile View</h1>
  </div>
</template>

<script>
import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/search'
import BaseLoading from '@/components/BaseLoading'

export default {
  name: 'ProfileView',
  components: { BaseLoading },

  // Lo damos de alta
  mixins: [setError],

  data() {
    return {
      isLoading: false,
      profileData: null
    }
  },

  created() {
    // llamada a la API
    this.isLoading = true
    const { region, battleTag: account } = this.$route.params
    this.fetchData(region, account)
  },

  methods: {
    fetchData(region, account) {
      getApiAccount({ region, account })
        .then(({ data }) => {
          // Guardamos los datos en una variable local
          this.profileData = data
        })
        .catch(err => {
          this.profileData = null
          // Creamos el objeto error
          const errObj = {
            routeParams: this.$route.params,
            message: err.message
          }
          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }
          // Hacemos uso del Mixin
          // Guardamos el objeto en el Store
          this.setApiErr(errObj)
          // Navegamos a la ruta de nombre 'Error'
          this.$router.push({ name: 'Error' })
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
