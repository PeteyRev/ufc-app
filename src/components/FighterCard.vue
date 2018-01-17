
<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>Fighter Stats</h2>
        <div class="row fighter-wrapper">
            <div class=" small-2 columns">
                <div class="inner" v-bind:data-link="fighter.id">
                    <img v-bind:src="fighter.left_full_body_image" alt="">
                </div>
            </div>
            <div class="small-5 columns">
                <div class="text-inner">
                <h4>{{fighter.first_name}} {{fighter.last_name}}</h4>
                <p>{{fighter.weight_class}}</p>
                <ul>
                    <li>Wins: {{fighter.wins}}</li>
                    <li>Loss: {{fighter.losses}}</li>
                    <li>Draw: {{fighter.draws}}</li>
                </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "FighterCard",
  data() {
    return {
      msg: "Fighter Card",
      fighter: {}
    };
  },
  methods: {
    fetchCharachter(id) {
      fetch(`http://ufc-data-api.ufc.com/api/v3/us/fighters/${id}.json`, {
        method: "GET"
      })
        .then(response => response.json())
        .then(json => (this.fighter = json));
    }
  },
  created() {
    this.fetchCharachter(1161);
  }
};
</script>
