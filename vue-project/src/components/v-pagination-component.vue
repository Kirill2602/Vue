<template>
<div class="pagination">
  <h3 class="txt">{{txt}}</h3>
  <button v-for="(p, index) in pagination" :key="index">{{p}}</button>
</div>
</template>

<script>
export default {
  name: "v-pagination-component",
  data(){
    return{
      pagination:[1,2,3,4,5,6,7,8,9],
      txt:"Не хватило времени разобраться с пагинацией..."
    }
  }
}
</script>

<style scoped>
.pagination{
  margin-top: 20px;
  text-align: left;
}
button{
  background-color: #aeaeae;
  color: white;
  padding: 5px;
  margin-right: 5px;
}
.txt{
  color: red;
}
</style>