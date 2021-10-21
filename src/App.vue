<template>
  <div id="app">
    <PaymentList/>
  </div>
</template>

<script>
import PaymentList from './components/v-paymentList-component'
export default {
  name: 'App',
  components: {
    PaymentList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
