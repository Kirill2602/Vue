<template>
  <transition name="bounce">
    <div :style="[stylesContext]" class="contextMenu">
      <div class="options" @click="$keks.editPaymentList()">Редактировать</div>
      <div class="options" @click="$keks.deletePayment()">Удалить</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "CmpContextMenu",
  props: ['top'],
  data() {
    return {
      options: [
        {
          name: 'Редактировать',
        },
        {
          name: 'Удалить',
        }
      ],
      stylesContext: {
        position: 'absolute',
        right: '500px',
        background: 'white',
        zIndex: '999',
        outline: 'none',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        cursor: 'pointer',
        padding: '10px',
        top: this.top + 'px'
      }
    }
  },
}
</script>

<style>
.options {
  padding: 4px;
}

.options:hover {
  background-color: #aeaeae;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>