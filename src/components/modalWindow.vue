<template>
  <div class="wrapper">
    <div class="modal">
      <button @click="$keks.closeModal()" class="close">X</button>
      <h1>Редактирование</h1>
      <div class="modalInputs">
        Описание: <input class="modalInput" v-model="newObj.category" type="text">
        Потраченная сумма: <input class="modalInput" v-model="newObj.value" type="text">
        Дата: <input class="modalInput" v-model="newObj.date" type="text"></div>
      <button @click="saveNewObj(); $keks.saveChanges()">Сохранить</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "modalWindow",
  props: ['editObj'],
  data() {
    return {
      newObj: {
        id: this.editObj.id,
        category: this.editObj.category,
        date: this.editObj.date,
        value: this.editObj.value
      }
    }
  },
  methods: {
    saveNewObj() {
      this.$emit('saveNewObj', {
        newPaymentData: this.newObj
      })
    }
  }
}
</script>

<style>
.modal {
  padding: 16px;
  position: fixed;
  top: 50px;
  width: 400px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;
}

.modalInputs {
  display: flex;
  flex-direction: column;
}

.wrapper {
  background: rgba(64, 64, 64, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  height: 1000%;
}

.modalInput {
  width: 250px;
}

.modalInputs {
  align-items: center;
  margin-bottom: 20px;
}

.close {
  margin-left: 366px;
  background-color: red;
  color: white;
  font-weight: bolder;
  cursor: pointer;
}

.close:hover {
  border: 2px solid white;
}
</style>