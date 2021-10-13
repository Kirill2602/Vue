<template>
  <div>
    <v-container>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <paymentForm/>
    <context-menu v-if="visible" :top="this.top"/>
    <modal-window v-if="visibleModal" :edit-obj="this.editObject" @saveNewObj="saveChangeObj"/>
    <div class="table">
      <v-row>
        <v-col class="th">#</v-col>
        <v-col class="th">DATE</v-col>
        <v-col class="th">CATEGORY</v-col>
        <v-col class="th">VALUE</v-col>
      </v-row>
      <v-row class="tr" v-for="(resD, index) in paginatedPage" :key="index">
        <v-col>{{ resD.id }}</v-col>
        <v-col>{{ resD.date }}</v-col>
        <v-col>{{ resD.category }}</v-col>
        <v-col class="td__icon">{{ resD.value }}
          <p @click="$keks.openCloseContextMenu($event); getIndex($event, resD.id)"
             class="icon">⋮</p>
        </v-col>
      </v-row>
    </div>
    <div class="pagination">
      <v-btn
          class="paginateBtn"
              v-for="p in pages"
              :key="p"
              @click="pageClick(p)"
              :class="{'selectedPage': p === pageNumber}"
      >{{ p }}
      </v-btn>
    </div>
    </v-container>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';
import paymentForm from "./v-paymentForm-component";
import contextMenu from "./contextMenu";
import modalWindow from "./modalWindow";

export default {
  name: "v-paymentList-component",
  components: {paymentForm, contextMenu, modalWindow},
  data() {
    return {
      visible: false,
      visibleModal: false,
      evnt: '',
      top: 0,
      payPages: 10,
      pageNumber: 1,
      editObject: {},
      newObject: '',
      id: ''
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
    ...mapMutations(['ADD_PAY', 'DELETE_PAYMENT', 'EDIT_PAYMENT']),
    pageClick(p) {
      this.pageNumber = p;
    },
    getIndex(event, id) {
      this.id = id
      this.evnt = event.pageY;
      this.top = this.evnt - 50
      console.log(this.evnt)
    },
    contextHandler() {
      if (this.visible === false) {
        this.top = this.top + 10
        this.visible = true
      } else {
        this.visible = false
        this.top = 0
      }
    },
    editList() {
      this.visibleModal = true
      this.visible = false
      this.editObject = this.PAGE.find(pay => pay.id === this.id)
    },
    closeModalWindow() {
      this.visibleModal = false
    },
    saveChangeObj(newObject) {
      this.newObject = newObject.newPaymentData
      this.EDIT_PAYMENT(this.newObject)
      this.visibleModal = false
    },
    removePay() {
      this.visible = false;
      this.DELETE_PAYMENT(this.id)
    },
  },
  mounted() {
    this.GET_PAY_FROM_API();
    this.$keks.EventBus.$on('openCloseContextMenu', this.contextHandler)
    this.$keks.EventBus.$on('deletePayment', this.removePay)
    this.$keks.EventBus.$on('editPaymentList', this.editList)
    this.$keks.EventBus.$on('closeModal', this.closeModalWindow)
    this.$keks.EventBus.$on('saveChanges', this.saveChangeObj)
  }
}
</script>

<style scoped>
.table {
  width: 800px;
  align-items: center;
  margin-bottom: 20px;
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

.td__icon {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.icon {
  font-size: 20px;
  cursor: pointer;
}

.icon:hover {
  transform: rotate(90deg);
  color: #aeaeae;
}
</style>

