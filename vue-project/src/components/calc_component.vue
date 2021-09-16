<template>
  <div>
    <p>Результат: {{ result }}</p>
    <div class="inputs">
      <label for="operand1">Первое число
        <input placeholder="0"
               v-model.number="operand1"
               class="operand1"
               id="operand1"
               type="text"></label>
      <label for="operand2">Второе число
        <input placeholder="0"
               v-model.number="operand2"
               id="operand2"
               type="text"></label>
    </div>
    <div class="buttons">
      <button @click="plus" class="btn">+</button>
      <button @click="minus" class="btn">-</button>
      <button @click="multiplication" class="btn">*</button>
      <button @click="division" class="btn">/</button>
      <button @click="exponentiation" class="btn">Возведение в степень</button>
      <button @click="integerDivision" class="btn">Целочисленное деление</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "calc_component",
  data() {
    return {
      operand1: '',
      operand2: '',
      result: ''
    }
  },
  methods: {
    plus() {
      return this.result = this.operand1 + this.operand2;
    },
    minus() {
      return this.result = this.operand1 - this.operand2;
    },
    multiplication() {
      return this.result = this.operand1 * this.operand2;
    },
    division() {
      if (this.operand2 !== 0) {
        return this.result = (this.operand1 / this.operand2).toFixed(3);
      } else {
        alert('Делить на 0 нельзя!')
      }

    },
    exponentiation() {
      return this.result = this.operand1 ** this.operand2
    },
    integerDivision() {
      if (this.operand2 !== 0 && this.operand1 / this.operand2 >= 0) {
        return this.result = Math.floor(this.operand1 / this.operand2)
      } else if (this.operand2 !== 0 && this.operand1 / this.operand2 <= 0) {
        return this.result = Math.ceil(this.operand1 / this.operand2)
      } else if (this.operand2 === 0) {
        alert('Делить на 0 нельзя!')
      }
    }
  }
}
</script>

<style scoped>
.inputs {
  margin-bottom: 20px;
}

.operand1 {
  margin-right: 20px;
}

.btn {
  padding: 10px;
  margin-right: 7px;
}
input{
  color: green;
  font-size: 20px;
  font-weight: bold;
  width: 100px;
  text-align: center;
}
</style>