<template>
  <Dashboard>
    <component :is="child_component"/>
  </Dashboard>
</template>

<script>
import Dashboard from '../partials/Dashboard/Dashboard'
import MainPage from '../partials/@HomePage/MainPage'

export default {
  name: 'HomePage',
  components: {
    Dashboard,
    MainPage
  },
  data () {
    return {
      child_component: 'main-page'
    }
  }
}
</script>

<style scoped>
</style>
