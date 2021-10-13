<template>
  <div>
    <v-container>
      <h1>My personal costs</h1>
      <v-app-bar>
        <div class="nav">
          <v-btn class="routLink" to="/">Home</v-btn>
          <v-btn class="routLink" to="/Food?value=200">Template Food</v-btn>
          <v-btn class="routLink" to="/Transport?value=50">Template Transport</v-btn>
          <v-btn class="routLink" to="/Entertainment?value=2000">Template Entertainment</v-btn>
        </div>
      </v-app-bar>
      <v-btn class="addNewCost" @click="show = !show">ADD NEW COST +</v-btn>
      <v-form v-if="show">
        Описание:
        <v-text-field v-model="category" placeholder="Payment description"/>
        Потраченная сумма:
        <v-text-field v-model="value" placeholder="Payment amount"/>
        Дата:
        <v-text-field v-model="date" placeholder="Payment date"/>
        <v-btn type="button" @click="addNewData" class="addFormBtn"
               v-bind:disabled="date===''||value===''||category===''">ADD +
        </v-btn>
      </v-form>
    </v-container>
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
      this.value = this.date = this.category = this.date = ''
    },
  },
  watch: {
    '$route': function (qwe, old) {
      if (qwe.path !== old.path || qwe.query.value !== old.query.value) {
        this.category = qwe.path.slice(1)
        this.value = qwe.query.value
        this.date = this.getDate;
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
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #aeaeae;
  color: white;
  padding: 10px;
  margin-left: -900px;
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
.nav{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>