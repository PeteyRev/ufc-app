<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="events-wrapper">
        <div v-for="event in events" class="row collapse">
            <div class="small-6 columns">
                <div class="inner" v-bind:data-link="event.id">
                    <img v-bind:src="event.feature_image" alt="">
                </div>
            </div>
            <div class="small-6 columns">
                <h2>{{event.base_title}}</h2>
                <p class="location">{{event.location}}</p>
                <p class="arena">{{event.arena}}</p>
                <p class="subtitle">{{event.subtitle}}</p>
                <p class="date">{{event.event_date}} {{event.event_time_zone_text}}{{event.event_time_text}}</p>
                <a v-bind:href="event.ticketurl" class="button" target="_blank">Buy Tickets</a>
            </div>
        </div>
	</div>
  </div>
</template>

<script>
export default {
  name: "EvenListing",
  data() {
    return {
      msg: "Upcoming & Past Events",
      events: {}
    };
  },
  methods: {
    getEvents(id) {
      fetch('http://ufc-data-api.ufc.com/api/v3/us/events', {
        method: "GET"
      })
        .then(response => response.json())
        .then(json => (this.events = json));
        
    }
  },
  created() {
      this.getEvents();
  }
};
</script>