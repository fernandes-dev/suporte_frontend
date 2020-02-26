<template>
  <div class="body">
    <v-container class="container">
      <v-card class="mx-auto card-login col-xs-4 col-sm-6 col-md-5 col-lg-4">
        <LogoTitle title="Login" />
        <div class="info-terms">
          Ao utilizar nossa plataforma, você concorda com todos os nossos
          Termos de uso.
          <button
            class="txt-terms"
          >Clique aqui</button> para saber mais
        </div>
        <div id="formLogin" class="col-12">
          <v-text-field label="Email" dense outlined></v-text-field>
          <v-text-field
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            label="Senha"
            dense
            outlined
            @click:append="show = !show"
          ></v-text-field>
          <div class="d-flex justify-space-between mb-4">
            <v-btn x-small text color="primary" to="#">Esqueci minha senha</v-btn>
            <v-btn x-small text color="primary" to="#">Esqueci meu email</v-btn>
          </div>
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
.info-terms {
  font-size: 14px;
  margin: 48px 5px 15px 15px;
  color: #666666;
}
.txt-terms {
  color: #4c80fb;
  font-weight: bold;
  outline: none;
}
.card-login {
  margin-top: 5%;
  border-radius: 10px !important;
  height: 80%;
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