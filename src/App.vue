<template>
  <div id="app" class="main-wrapper">
    <div class="test"  v-lazy-container="{ selector: 'img' }">
    <header v-lazy-container="{ selector: 'img' }">
      <router-link to="/"><img data-src="static/ufc-logo.png"></router-link>
      <ul class="main-nav">
        <li>
          <router-link to="/title-holders" class="button"
          active-class="active">Champions</router-link>
        </li>
        <li>
          <router-link to="/news-listing" class="button"
          active-class="active">News</router-link>
        </li>
        <li>
          <router-link to="/event-listing" class="button"
          active-class="active">Events</router-link>
        </li>
      </ul>
    </header>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import "assets/scss/app";
</style>
