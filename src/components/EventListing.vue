<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Upcoming & Past Events</h2>
    <div class="events-wrapper">
        <div v-for="event in events" class="event-card" v-bind:data-img="event.feature_image">
          <div class="event">
            <div class="event-img">
                <div class="inner" v-bind:data-link="event.id">
                    <img v-bind:src="event.feature_image" alt="">
                </div>
            </div>
            <div class="event-info">
              <div class="inner">
                <div class="half">
                  <h2>{{event.base_title}}</h2>
                  <p class="location">{{event.location}}</p>
                  <p class="arena">{{event.arena}}</p>
                  <a v-bind:href="event.ticketurl" class="button" target="_blank">Buy Tickets</a>
                </div>
                <div class="half">
                  <p class="subtitle">{{event.subtitle}}</p>
                  <p class="date">{{event.event_time_zone_text}}<br>{{event.event_time_text}}</p>
                </div>
            </div>
            </div>
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
      msg: "Events",
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