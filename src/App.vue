<template>
  <div id="app" class="main-wrapper">
    <header>
      <router-link to="/"><img src="./assets/img/ufc-logo.png"></router-link>
      <ul class="main-nav">
        <li><router-link to="title-holders" class="button" active-class="active">Champions</router-link></li>
        <li><router-link to="event-listing" class="button" active-class="active">Events</router-link></li>
        <li><router-link to="fighter-card" class="button" active-class="active">News</router-link></li>
      </ul>
    </header>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "App"
  };
</script>

<style lang="scss">
  @import "assets/scss/app";
</style>
