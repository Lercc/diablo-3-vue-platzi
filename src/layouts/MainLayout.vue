<template>
  <div class="container">
    <header-bar />

    <router-view />

    <footer-bar />
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar'
import HeaderBar from '@/components/HeaderBar'

export default {
  name: 'MainLayout',
  components: {
    FooterBar,
    HeaderBar
  }
}
</script>
