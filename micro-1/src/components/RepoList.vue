<template>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-3" v-for="item in items" :key="item.id">
        <div class="card">
          <div class="card-content">
            <a class="media" :href="item.url">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src="item.imageUrl" :alt="item.name">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{item.name}}</p>
              </div>
            </a>
            <div class="content">
              {{item.description}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <a @click="loadMore" class="button">Load More</a>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: ['term'],
  serverPrefetch () {
    return this.search({ term: this.term })
  },
  computed: {
    ...mapState('repos', ['items'])
  },
  methods: {
    ...mapActions('repos', ['loadMore', 'search'])
  }
}
</script>
