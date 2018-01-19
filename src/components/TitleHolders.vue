
<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Click a Fighter to See Stats</h2>
    <div class="cards-wrapper">
		<div v-for="fighter in fighters" class="title-holder">
			<a v-bind:href="'#/fighter/'+ fighter.id">
				<div class="card">
					<div class="img-inner">
						<img v-bind:src="fighter.belt_thumbnail" alt="">
					</div>
					
					<div class="text-inner">
						<div class="header-inner">
							<h4>{{fighter.first_name}} {{fighter.last_name}}</h4>
						</div>
					<p>{{fighter.weight_class}}</p>
					<ul>
						<li>Wins: {{fighter.wins}}</li>
						<li>Loss: {{fighter.losses}}</li>
						<li>Draw: {{fighter.draws}}</li>
					</ul>
					</div>
				</div>
			</a>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'TitleHolders',
  data() {
    return {
      msg: 'Title Holders',
      fighters: {}
    };
  },
  methods: {
    fetchCharachter() {
      fetch("http://ufc-data-api.ufc.com/api/v3/us/fighters/title_holders", {
        method: "GET"
      })
        .then(response => response.json())
        .then(json => (this.fighters = json));
    }
  },
  created() {
    this.fetchCharachter();
  }
};
</script>
