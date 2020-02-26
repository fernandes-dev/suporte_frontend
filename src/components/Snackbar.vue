<template>
  <div>
    <v-snackbar :color="color" v-model="viewed">
      {{ msg }}
      <v-btn dark text @click="changeViewed">Fechar</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    viewedOrigin: true
  }),
  props: {
    msg: String,
    viewed: Boolean,
    color: String
  },
  methods: {
    changeViewed() {
      this.$emit("changeViewed", this.viewedOrigin);
    }
  }
};
</script>

<style>
</style>