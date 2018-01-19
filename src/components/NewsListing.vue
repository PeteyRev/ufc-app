<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Current News</h2>
    <div class="news-wrapper">
      <div v-for="news in news" class="news-card">
        <div class="card">
          <div class="inner" v-bind:data-link="news.id" v-bind:style="{ 'background-image': 'url(' + news.thumbnail + ')' }">
              <div class="text-inner">
                <h2>{{news.title}}</h2>
              </div>
          </div>
        </div>
      </div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'NewsListing',
  data() {
    return {
      msg: 'News',
      news: {}
    };
  },
  methods: {
    getnewss(id) {
      fetch("https://ufc-data-api.ufc.com/api/v3/us/news", {
        method: 'GET'
      })
        .then(response => response.json())
        .then(json => (this.news = json));
    }
  },
  created() {
    this.getnewss();
  }
};
</script>
