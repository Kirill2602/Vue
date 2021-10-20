export default {
    install(Vue) {
        if (this.installed) {
            return
        }
        Vue.prototype.$keks = {
            EventBus: new Vue(),
            openCloseContextMenu(index, event) {
                console.log('Shown', index, event)
                this.EventBus.$emit('openCloseContextMenu')
            },
            deletePayment() {
                this.EventBus.$emit('deletePayment')
            },
            editPaymentList(){
                this.EventBus.$emit('editPaymentList')
            },
            closeModal(){
                this.EventBus.$emit('closeModal')
            },
            saveChanges(newPaymentData){
                console.log('Plugin', newPaymentData)
                this.EventBus.$emit('saveChanges')
            }
        }
    }
}