<template>
  <div id="app">
    <load-layout v-if="isLoading">
      <base-loading />
    </load-layout>

    <main-layout v-else />
  </div>
</template>

<script>
import BaseLoading from '@/components/BaseLoading'
import MainLayout from '@/layouts/MainLayout'
import LoadLayout from '@/layouts/LoadLayout'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    BaseLoading,
    MainLayout,
    LoadLayout
  },
  computed: {
    ...mapState('loading', {
      isLoading: 'isLoading'
    })
  }
}
</script>

<style lang="scss">
#app {
  padding: 60px 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #15202b;
}
</style>
