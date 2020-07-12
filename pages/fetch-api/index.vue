<template>
  <div>
    <h1>Fetch Api</h1>
    <p>Loading Status : {{this.$store.getters['checkLoadingStatus']}}</p>
    <p v-if="message">message : {{message}}</p>
    <button @click="callMessage">Call Message</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message:'',
            loadingStatus:'',
        }
    },
    methods: {
          async callMessage(){
            await this.$store.dispatch('GET_RESPONSE')
            this.message = this.$store.getters['doneResponse']
        }
    },
}
</script>

<style>
</style>