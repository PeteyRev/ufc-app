<template>
	<div class="home-wrapper">
    <div class="home-txt-btm">
      <div class="inner">
        <h1>{{ msg }}</h1>
      <h2>An app that uses the Ufc Data API to show stats, events, and news</h2>
      <p>This was built using Vue JS and Foundation</p>
      <a href="https://github.com/PeteyRev/ufc-app" target="_blank">view the project on github</a>
      </div>
    </div>
	</div>
</template>

<script>
export default {
  name: 'HomeScreen',
  data() {
    return {
      msg: 'UFC Fight Data',
      event: {}
    };
  },
  methods: {
    getEvent(id) {
      fetch("https://cors-anywhere.herokuapp.com/http://ufc-data-api.ufc.com/api/v3/us/events/642991.json", {
        method: 'GET'
      })
        .then(response => response.json())
        .then(json => (this.event = json));
    }
  },
  created() {
    this.getEvent();
  }
};
</script>
