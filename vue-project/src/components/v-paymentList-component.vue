<template>
  <div>
    <PaymentForm @addNewD="addNewD"/>
    <table class="table">
      <tr>
        <th class="th">#</th>
        <th class="th">DATE</th>
        <th class="th">CATEGORY</th>
        <th class="th">VALUE</th>
      </tr>
      <tr class="tr" v-for="(resD, index) in responseData" :key="index">
        <td>{{index}}</td><td>{{ resD.date }}</td><td>{{ resD.category }}</td><td>{{ resD.value }}</td>
      </tr>
    </table>
    <Pagination/>
  </div>
</template>

<script>
import PaymentForm from "./v-paymentForm-component";
import Pagination from "./v-pagination-component";

export default {
  name: "v-paymentList-component",
  components:{
    PaymentForm,
    Pagination
  },
  data() {
    return {
      responseData: [
        {
          date: '2021-03-28',
          category: 'Food',
          value: 169,
        },
        {
          date: '2021-11-08',
          category: 'Transport',
          value: 360,
        },
        {
          date: '2021-05-12',
          category: 'Food',
          value: 532,
        },

      ]
    }

  },
  methods:{
    addNewD(data) {
      this.responseData = [...this.responseData, data]
    }
  }
}
</script>

<style scoped>
.table{
  width: 800px;
  border: 1px solid #000;
  align-items: center;
}
.tr{
  border: 1px solid #000;
}
td{
  border: 1px solid #000;
}
.th{
  border: 1px solid #000;
  background-color: #aeaeae;
  color: white;
}
</style>