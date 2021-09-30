<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <paymentForm/>
    <table class="table">
      <tr>
        <th class="th">#</th>
        <th class="th">DATE</th>
        <th class="th">CATEGORY</th>
        <th class="th">VALUE</th>
      </tr>
      <tr class="tr" v-for="(resD, index) in paginatedPage" :key="index">
        <td>{{ resD.id }}</td>
        <td>{{ resD.date }}</td>
        <td>{{ resD.category }}</td>
        <td>{{ resD.value }}</td>
      </tr>
    </table>
    <div class="pagination">
      <button class="paginateBtn"
              v-for="p in pages"
              :key="p"
              @click="pageClick(p)"
              :class="{'selectedPage': p === pageNumber}"
      >{{ p }}
      </button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';
import paymentForm from "./v-paymentForm-component";

export default {
  name: "v-paymentList-component",
  components: {paymentForm},
  data() {
    return {
      payPages: 10,
      pageNumber: 1
    }
  },
  computed: {
    payList() {
      return this.$store.getters.PAGE;
    },
    paginatedPage() {
      let from = (this.pageNumber - 1) * this.payPages;
      let to = from + this.payPages;
      return this.PAGE.slice(from, to);
    },
    ...mapGetters(['PAGE']),
    pages() {
      return Math.ceil(this.PAGE.length / 10);
    },
  },
  methods: {
    ...mapActions(['GET_PAY_FROM_API']),
    ...mapMutations(['ADD_PAY']),
    pageClick(p) {
      this.pageNumber = p;
    },

  },
  mounted() {
    console.log(33, this.$route.query.value)
    this.GET_PAY_FROM_API();
  }
}
</script>

<style scoped>
.table {
  width: 800px;
  border: 1px solid #000;
  align-items: center;
}

.tr {
  border: 1px solid #000;
}

td {
  border: 1px solid #000;
}

.th {
  border: 1px solid #000;
  background-color: #aeaeae;
  color: white;
}

.pagination {
  margin-top: 10px;
}

.paginateBtn {
  margin-right: 5px;
}

.paginateBtn:hover {
  background-color: #aeaeae;
  cursor: pointer;
  color: white;
}

.selectedPage {
  background-color: #aeaeae;
  cursor: pointer;
  color: white;
}
</style>