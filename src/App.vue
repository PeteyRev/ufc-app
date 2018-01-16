<template>
  <div id="app" class="container">
   <router-link to="/"><img src="./assets/img/ufc-logo.png"></router-link>
    <br>
    <router-link to="title-holders" class="button" active-class="active">Current Champions</router-link>
    <router-link to="fighter-card" class="button" active-class="active">Fighter Card</router-link>
    <router-link to="title-holders" class="button" active-class="active">Search</router-link>
    <transition name="fade"><router-view/></transition>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import 'assets/scss/app';

</style>
