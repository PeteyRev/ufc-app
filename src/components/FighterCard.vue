
<template>
<div>
  <h1>{{ msg }}</h1>
  <h2>Fighter Stats</h2>
  <div class="row fighter-card-wrapper">
      <div class="img-wrapper">
          <div class="inner" v-bind:data-link="fighter.id">
              <img v-bind:src="fighter.left_full_body_image" alt="">
          </div>
      </div>
      <div class="txt-wrapper">
          <div class="text-inner">
          <h2>{{fighter.first_name}} {{fighter.last_name}}</h2>
          <p>{{fighter.weight_class}}</p>
          <h3>Wins: {{fighter.wins}} | Loss: {{fighter.losses}} | Draw: {{fighter.draws}}</h3>
          <p>Average Fight Time <span>{{fighter.AverageFightTime}} minutes</span></p>
          <p>Knockout Average <span>{{fighter.KDAverage}}</span></p>
          <p>Striking Accuracy <span>{{fighter.StrikingAccuracy}}%</span></p>
          <p>Takedown Average <span>{{fighter.TakedownAverage}}%</span></p>
          <p>Takedown Accuracy <span>{{fighter.TakedownAccuracy}}%</span></p>
          <p>Takedown Defense <span>{{fighter.TakedownDefense}}%</span></p>
          <p>Submissions Average <span>{{fighter.SubmissionsAverage}}%</span></p>
          </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'FighterCard',
  data() {
    return {
      msg: 'Fighter Card',
      fighter: {},
    };
  },
  methods: {
    fetchCharachter(id) {
      fetch(`https://ufc-data-api.ufc.com/api/v3/us/fighters/${id}.json`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(json => (this.fighter = json));
    }
  },
  created() {
    const id = this.$route.params.id;
    this.fetchCharachter(id);
  }
};
</script>
