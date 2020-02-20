<template>
  <div class="body">
    <v-container class="container col-4">
      <v-card class="mx-auto card">
        <LogoTitle title="Login" />
        <div id="form" class="mx-auto col-12">
          <v-text-field label="Email" dense outlined></v-text-field>
          <v-text-field
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            label="Senha"
            dense
            outlined
            @click:append="show = !show"
          ></v-text-field>
          <div class="info-vedas">Área exlusiva para clientes do Vedas Sistemas</div>
          <div class="d-flex justify-space-between">
            <v-btn small text color="primary" to="/register">Criar conta</v-btn>
            <v-btn small dark color="primary" to="/">Entrar</v-btn>
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import LogoTitle from "@/components/LogoTitle";
export default {
  components: {
    LogoTitle
  },
  data: () => ({
    show: false,
    password: "Password"
  })
};
</script>

<style>
@media (min-width: 800px) {
}
.container {
  margin-top: 50px;
}
.card {
  padding: 35px;
}
.body {
  background-color: #4c80fb;
  height: 100%;
}
.info-vedas {
  font-size: 14px;
  margin: 0px 5px 15px 5px;
  color: #666666;
}
</style>