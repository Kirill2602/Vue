<template>
  <div>
    <p >Результат: {{ result }}</p>
    <div class="inputs">
      <label for="operand1">Первое число
        <input name="operand1" value="Первое число" placeholder="0"
               v-bind:disabled="radio !== 'Первое число' "
               v-model.number="operand1"
               class="operand1"
               id="operand1"
               type="text"></label>
      <label for="operand2">Второе число
        <input
            name="operand2"
            placeholder="0"
            v-bind:disabled="radio !== 'Второе число'"
            v-model.number="operand2"
            id="operand2"
            type="text"></label>
    </div>
    <div class="buttons">
      <button v-bind:disabled="operand1 === '' || operand2 === ''" class="btn" v-for="operator in operators"
              :name="operator"
              :key="operator" @click="calculate(operator)">{{ operator }}
      </button>
    </div>
    <div><label for="check"><input v-model="checked" id="check" type="checkbox">Показать/Скрыть экранную
      клавиатуру</label></div>

    <div v-show="checked">
      <button @click="getNumb(numb)" class="btn"
              v-for="(numb,index) in numberKeyboard"
              :key="index"
      >{{ numb }}
      </button>
    </div>
    <div>
      <label for="radio1">Первое число<input value="Первое число" v-model="radio" name="radio" id="radio1" type="radio"></label>
      <label for="radio2">Второе число<input value="Второе число" v-model="radio" name="radio" id="radio2" type="radio"></label>
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
      result: '',
      operators: [
        '+',
        '-',
        '*',
        '/',
        'Целочисленное деление',
        'Возведение в степень'
      ],
      numberKeyboard: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '←'
      ],
      checked: true,
      radio: 'Первое число'
    }
  },
  methods: {
    plus() {
      this.result = Number(this.operand1) + Number(this.operand2);
    },
    minus() {
      this.result = this.operand1 - this.operand2;
    },
    multiplication() {
      this.result = this.operand1 * this.operand2;
    },
    division() {
      if (this.operand2 !== '0') {
        this.result = (this.operand1 / this.operand2);
      } else {
        alert('Делить на 0 нельзя!')
      }

    },
    exponentiation() {
      this.result = this.operand1 ** this.operand2
    },
    integerDivision() {
      if (this.operand2 !== '0' && this.operand1 / this.operand2 >= 0) {
        this.result = Math.floor(this.operand1 / this.operand2)
      } else if (this.operand2 !== '0' && this.operand1 / this.operand2 <= 0) {
        this.result = Math.ceil(this.operand1 / this.operand2)
      } else if (this.operand2 === '0') {
        alert('Делить на 0 нельзя!')
      }
    },
    calculate(operation = "+") {
      switch (operation) {
        case "+":
          this.plus();
          break;
        case "-":
          this.minus();
          break;
        case "*":
          this.multiplication();
          break;
        case "/":
          this.division();
          break;
        case "Возведение в степень":
          this.exponentiation();
          break;
        case "Целочисленное деление":
          this.integerDivision();
          break;
      }
    },
    getNumb(numb) {
      if (this.radio === 'Первое число' && numb !== '←') {
        this.operand1 = String(this.operand1 + numb);
      } else if (this.radio === 'Второе число' && numb !== '←') {
        this.operand2 = String(this.operand2 + numb);
      } else if (numb === '←' && this.radio === 'Первое число') {
        this.operand1 = this.operand1.slice(0, -1);
      } else if (numb === '←' && this.radio === 'Второе число') {
        this.operand2 = this.operand2.slice(0, -1);
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
  margin-top: 20px;
  margin-bottom: 10px;
}

input {
  color: green;
  font-size: 20px;
  font-weight: bold;
  width: 100px;
  text-align: center;
}
</style>