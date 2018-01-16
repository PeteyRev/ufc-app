<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>A small app that shows you the latest fighters, fights, and stats</h2>
    <div class="container">
		<a href="#" class="button">Current Champions</a>
		<a href="#" class="button">Search For a Fighter</a>
		<a href="#" class="button">Current News</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeScreen",
  data() {
    return {
      msg: "UFC Fighter Data"
    };
  },
  methods: {
    fetchCharachter() {
      fetch('http://ufc-data-api.ufc.com/api/v3/us/fighters/500.json', {
        method: "GET"
      })
        .then(response => console.log(response.json()))
    }
  },
  created() {
	  this.fetchCharachter();
  }
};
</script>