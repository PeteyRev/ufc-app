<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Next Event</h2>
    <div class="container home-wrapper">
		<div class=" small-12 columns">
			<div class="inner" v-bind:data-link="event.id">
				<img v-bind:src="event.feature_image" alt="">
			</div>
      <iframe v-bind:src="event.trailer_url" frameborder="0"></iframe>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: "HomeScreen",
  data() {
    return {
      msg: "UFC Fighter Data",
      event: {}
    };
  },
  methods: {
    getEvent(id) {
      fetch('http://ufc-data-api.ufc.com/api/v3/us/events/642991.json', {
        method: "GET"
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