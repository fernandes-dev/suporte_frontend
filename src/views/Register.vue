<template>
  <div class="body">
    <v-container class="container">
      <v-card class="mx-auto card col-xs-4 col-sm-6 col-md-5 col-lg-4">
        <LogoTitle title="Cadastro" />
        <div id="form" class="col-12">
          <div class="d-flex justify-space-between">
            <v-select class="mr-2 type" :items="types" v-model="type" dense label="Tipo" outlined></v-select>
            <v-text-field class :label="document()" dense outlined></v-text-field>
          </div>
          <!-- COMPONENTE -->
          <div v-if="type == 'Jurídica'">
            <RegisterJuridical />
          </div>
          <div v-else>
            <RegisterPhysics />
          </div>
          <v-text-field label="Email" outlined dense></v-text-field>
          <div class="d-flex justify-space-between">
            <v-text-field
              class="mr-2"
              :type="show ? 'text' : 'password'"
              label="Senha"
              dense
              outlined
            ></v-text-field>
            <v-text-field :type="show ? 'text' : 'password'" label="Confirmar" dense outlined></v-text-field>
            <span class="mt-2 ml-1" @click="show = !show">
              <v-icon v-if="show">mdi-eye</v-icon>
              <v-icon v-else>mdi-eye-off</v-icon>
            </span>
          </div>
          <div class="d-flex justify-space-between">
            <v-btn small text color="primary" to="/">Entrar</v-btn>
            <v-btn @click="changeView" small dark color="primary" to="/register">Cadastrar</v-btn>
          </div>
        </div>
        <Snackbar :color="colorSnack" :msg="msg" @changeViewed="changeView" :viewed="viewedOrigin" />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import LogoTitle from "@/components/LogoTitle";
import RegisterJuridical from "@/components/RegisterJuridical";
import RegisterPhysics from "@/components/RegisterPhysics";
import Snackbar from "@/components/Snackbar";

export default {
  components: {
    LogoTitle,
    RegisterJuridical,
    RegisterPhysics,
    Snackbar
  },
  data: () => ({
    show: false,
    password: "Password",
    types: ["Física", "Jurídica"],
    type: "Jurídica",
    document: function() {
      if (this.type == "Jurídica") return "Cnpj";
      return "Cpf";
    },
    viewedOrigin: false,
    msg: "Cadastrado com sucesso",
    colorSnack: "success"
  }),
  methods: {
    changeView() {
      this.viewedOrigin = !this.viewedOrigin;
    }
  }
};
</script>

<style>
.card {
  margin-top: 3%;
  padding: 15px;
  border-radius: 10px !important;
  height: 80%;
}
.type {
  width: 40%;
}
@media (max-width: 500px) {
  .type {
    width: 50%;
  }
}
.body {
  background-color: #4c80fb;
  height: 100%;
}
.title-component {
  margin-bottom: 30px;
}
</style>