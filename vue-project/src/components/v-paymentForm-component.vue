<template>
  <div>
    <h1>My personal costs</h1>
    <button class="addNewCost" @click="show = !show">ADD NEW COST +</button>
    <form v-if="show"><input v-model="category" placeholder="Payment description" type="text">
      <input v-model="value" placeholder="Payment amount" type="text">
      <input v-model="date" placeholder="Payment date" type="date">
      <button type="button" @click="addNewData" class="addFormBtn" v-bind:disabled="date===''||value===''||category===''">ADD +</button>
    </form>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
  name: "v-paymentForm-component",
  data() {
    return {
      id: 1,
      value: '',
      date: '',
      category: '',
      show:false
    }
  },
  computed:{
    ...mapGetters(['PAGE']),
  },
  methods: {
    ...mapMutations(['ADD_PAY']),
    addNewData(){
      this.ADD_PAY({
        id: this.id + this.PAGE.length,
        date: this.date,
        category: this.category,
        value: this.value
      })
    this.value = this.date = this.category = ''
    }
  }
}
</script>

<style scoped>
form {
  z-index: 1;
  margin-bottom: 20px;
  margin-top: 20px;
  border: 1px solid #000;
  padding: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
}
.addNewCost{
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #aeaeae;
  color: white;
  padding: 10px;
  left: 0;
  margin-left: -1121px;
  cursor: pointer;
}
.addNewCost:hover{
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  color: aqua;
  transform: scale(1.1,1.1);
}
input {
  margin-bottom: 10px;
}
.addFormBtn{
  background-color: #aeaeae;
  color: white;
  padding: 5px;
  cursor: pointer;
}
h1{
  text-align: left;
}
</style>