<template>
  <div>
    <v-text-field label="Nome completo" outlined dense></v-text-field>
    <div class="d-flex justify-content-space-between">
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            class="mr-2 birthday"
            v-model="dateFormat"
            outlined
            dense
            label="Data de nascimento"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          locale="pt-br"
          ref="picker"
          v-model="date"
          :max="maxDate"
          min="1950-01-01"
          @change="save"
        ></v-date-picker>
      </v-menu>
      <v-text-field class="col-6" label="Telefone" outlined dense></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
    password: "Password",
    date: null,
    dateFormat: null,
    maxDate: new Date().toISOString().substr(0, 10),
    menu: false
  }),

  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },

  methods: {
    save(date) {
      const [year, day, month] = date.toLocaleString().split("-");
      this.dateFormat = new Date(`${day}/${month}/${year}`)
        .toLocaleString("pt-br")
        .substr(0, 10);
      this.$refs.menu.save(date);
    }
  }
};
</script>

<style>
.birthday {
  width: 40%;
}
@media (max-width: 500px) {
  .birthday {
    width: 55%;
  }
}
</style>