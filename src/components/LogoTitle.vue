<template>
  <div>
    <div id="logo">
      <img src="../assets/logo.svg" alt="logo" width="60px" />
    </div>
    <h1 class="title-component">{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style>
h1 {
  color: #4c80fb;
  font-size: 24px;
  display: flex;
  justify-content: center;
}
#logo {
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
}
</style>