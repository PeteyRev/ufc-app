
<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>A list of current title holders in each division</h2>
    <div class="container cards-wrapper">
		<div v-for="fighter in fighters" class=" small-2 columns">
			<div class="inner" v-bind:data-link="fighter.id">
				<img v-bind:src="fighter.belt_thumbnail" alt="">
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
  </div>
</template>

<script>
export default {
	name: "TitleHolders",
  data() {
    return {
	  msg: "Title Holders",
	  fighters: {}
    };
  },
  methods: {
    fetchCharachter() {
      fetch('http://ufc-data-api.ufc.com/api/v3/us/fighters/title_holders', {
        method: "GET"
      })
		// .then(response => console.log(response.json()))
		.then(response => response.json())
        .then(json => (this.fighters = json));
    }
  },
  created() {
	  this.fetchCharachter();
  }
};
</script>
