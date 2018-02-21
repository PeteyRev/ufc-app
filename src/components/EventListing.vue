<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Upcoming Events</h2>
    <div class="events-wrapper" >
      <div v-for="event in events" class="event-card" v-bind:data-img="event.feature_image">
        <div class="event">
          <a v-bind:href="'#/event/'+ event.id">
          <div class="event-img">
            <div class="inner" v-bind:data-link="event.id" v-lazy-container="{ selector: 'img' }">
              <img v-bind:data-src="event.feature_image" alt="">
            </div>
          </div>
          </a>
            <div class="event-info">
              <div class="inner">
                <div class="half">
                  <h2>{{event.base_title}}</h2>
                  <p class="location">{{event.location}}</p>
                  <p class="arena">{{event.arena}}</p>
                </div>
                <div class="half">
                  <p class="subtitle">{{event.subtitle}}</p>
                  <p class="date">{{event.event_time_zone_text}}<br>{{event.event_time_text}}</p>
                  <p class="tickets"><a v-bind:href="event.ticketurl" target="_blank">Get Tickets</a></p>
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
      fetch(
        "https://cors-anywhere.herokuapp.com/http://ufc-data-api.ufc.com/api/v3/us/events",
        {
          method: "GET"
        }
      )
        .then(response => response.json())
        .then(json => {
          this.cleanDate(json);
        });
    },

    cleanDate(json) {
      let events = json.slice(0, 11).reverse();
      let eventYear = events[0].created.toString().substring(0, 4);
      let currentYear = new Date().getFullYear().toString();
      let eventDay = events[0].created.toString().substring(5, 7);
      let currentDay = new Date().getDate().toString();

      if (
        eventYear < currentYear ||
        (eventYear === currentYear && eventDay < currentDay)
      ) {
        events.shift();
      }
      console.log(events)
      this.events = events;
    }
  },
  created() {
    window.scrollTo(0, 0);
    this.getEvents();
  }
};
</script>
