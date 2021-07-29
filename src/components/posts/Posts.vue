<template>
  <div class="container">
    <div class="row">
      <Article
        v-for="(item, index) in posts" 
        :key="index"
        :item="item"
      />
    </div>
    <pagination
      v-model="page" 
      :records="cnt" 
      :per-page="6" 
      @paginate="pagingHandle"
    />
  </div>
</template>

<script>
import Pagination from 'v-pagination-3'
import Article from '@/components/layout/Article'
import api from '@/api/index.js'
export default {
  name: 'Posts',
  components: {Article, Pagination},
  data () {
    return {
      posts: [],
      page: 1,
      cnt : 0
    }
  },
  watch: {
    posts() {
      this.count = this.cnt
    }
  },
  created () {
    this.handleService()
  },
  methods: {
    handleService() {
      var params = new URLSearchParams()
      params.append("page", this.page)
      this.getPosts(params)
    },
    getPosts(params) {
      api.get("/posts?" + params)
      .then(res => {
        this.posts = res.data.content
        this.cnt = res.data.totalElements
      }).catch(err => {
        alert(err)
      })
    },
    pagingHandle (currentPage) {
      const params = new URLSearchParams()
      params.append("page", currentPage)
      this.getPosts(params)
    }
  }
}
</script>