
<template>
<div>
  <h1>{{ msg }}</h1>
  <h2>Fighter Stats</h2>
  <div class="row event-card-wrapper" v-for="event in eventInfo">
      <div class="img-wrapper" v-lazy-container="{ selector: 'img' }">
        <div class="half">
          <div class="inner" v-bind:data-link="eventInfo.id">
              <img v-bind:data-src="event.fighter1_profile_image" alt="">
              <h2>{{event.fighter1_first_name}} {{event.fighter1_last_name}}</h2>
          </div>
          </div>
          <div class="half">
          <div class="inner" v-bind:data-link="event.id">
              <img v-bind:data-src="event.fighter2_profile_image" alt="">
              <h2>{{event.fighter2_first_name}} {{event.fighter2_last_name}}</h2>
          </div>
          </div>
      </div>
      <div class="txt-wrapper">
          <div class="text-inner">
          <h2>{{event.fighter1_first_name}} {{event.fighter1_last_name}}</h2>
          <p>{{eventInfo.weight_class}}</p>
          <h3>Wins: {{eventInfo.wins}} | Loss: {{eventInfo.losses}} | Draw: {{eventInfo.draws}}</h3>
          <p>Average Fight Time <span>{{eventInfo.AverageFightTime}} minutes</span></p>
          <p>Knockout Average <span>{{eventInfo.KDAverage}}</span></p>
          <p>Striking Accuracy <span>{{eventInfo.StrikingAccuracy}}%</span></p>
          <p>Takedown Average <span>{{eventInfo.TakedownAverage}}%</span></p>
          <p>Takedown Accuracy <span>{{eventInfo.TakedownAccuracy}}%</span></p>
          <p>Takedown Defense <span>{{eventInfo.TakedownDefense}}%</span></p>
          <p>Submissions Average <span>{{eventInfo.SubmissionsAverage}}%</span></p>
          </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: "EventCard",
  data() {
    return {
      msg: "Event Card",
      eventInfo: {}
    };
  },
  methods: {
    fetchEvent(id) {
      fetch(
        `https://cors-anywhere.herokuapp.com/http://ufc-data-api.ufc.com/api/v3/us/events/${id}/fights.json`,
        {
          method: "GET"
        }
      )
        .then(response => response.json())
        .then(json => {
          console.log(json);
          let eventInfo = json;
          this.eventInfo = eventInfo;
        });
    }
  },
  created() {
    window.scrollTo(0, 0);
    const id = this.$route.params.id;
    this.fetchEvent(id);
  }
};
</script>
