<template>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-3" v-for="item in items" :key="item.id">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">{{item.name}}</p>
          </header>
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
