<template>
  <div>
    <h1>My personal costs</h1>
    <nav class="nav">
      <router-link class="routLink" to="/">Основная форма</router-link>
      <router-link class="routLink" to="/Food?value=200">Шаблон №1. Food с ценой 200</router-link>
      <router-link class="routLink" to="/Transport?value=50">Шаблон №2. Transport с ценой 50</router-link>
      <router-link class="routLink" to="/Entertainment?value=2000">Шаблон №3. Entertainment с ценой 2000</router-link>
    </nav>
    <button class="addNewCost" @click="show = !show">ADD NEW COST +</button>
    <form v-if="show">
      Описание: <input v-model="category" placeholder="Payment description" type="text">
      Потраченная сумма: <input v-model="value" placeholder="Payment amount" type="text">
      Дата: <input v-model="date" placeholder="Payment date" type="text">
      <button type="button" @click="addNewData" class="addFormBtn"
              v-bind:disabled="date===''||value===''||category===''">ADD +
      </button>
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
      value: this.$route.query.value || '',
      date: '',
      category: this.$route.path.slice(1) || '',
      show: this.$route.query.value
    }
  },

  computed: {
    ...mapGetters(['PAGE']),
    getDate() {
      let date = new Date();
      let currentYear = date.getFullYear();
      let currentMonth = ("0" + (date.getMonth() + 1)).slice(-2);
      let currentDate = ("0" + (date.getDate())).slice(-2);
      return `${currentYear}-${currentMonth}-${currentDate}`
    }
  },
  methods: {
    ...mapMutations(['ADD_PAY']),
    addNewData() {
      let min = Math.ceil(this.PAGE.length)
      let max = Math.floor(100)
      this.ADD_PAY({
        id: Math.floor(Math.random() * (max - min + 1)) + min,
        date: this.date,
        category: this.category,
        value: this.value
      })
      console.log('Оно',this.PAGE)
      console.log('ЭТО АЙДИ',this.id)
      this.value = this.date = this.category = this.date = ''
    },
  },
  watch: {
    '$route': function (qwe, old) {
      console.log(1, qwe)
      console.log(2, old)
      if (qwe.path !== old.path || qwe.query.value !== old.query.value) {
        console.log(444, qwe.path)
        console.log(555, this)
        this.category = qwe.path.slice(1)
        this.value = qwe.query.value
        this.date = this.getDate;
        console.log(this.date)
        this.show = qwe.query.value
      }
    }
  },
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

.addNewCost {
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #aeaeae;
  color: white;
  padding: 10px;
  left: 0;
  margin-left: -1121px;
  cursor: pointer;
}

.addNewCost:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color: aqua;
  transform: scale(1.1, 1.1);
}

input {
  margin-bottom: 10px;
}

.addFormBtn {
  background-color: #aeaeae;
  color: white;
  padding: 5px;
  cursor: pointer;
}

h1 {
  text-align: left;
}

.nav {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  border: 2px solid aqua;
  border-radius: 5px;
  padding: 10px;
  background-color: #aeaeae;
}

.routLink {
  text-decoration: none;
  color: white;
}

.routLink:hover {
  transform: scale(1.1, 1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color: aqua;
}
</style>