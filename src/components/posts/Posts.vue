<template>
  <div class="container">
    <div class="row">
      <Article
        v-for="(item, index) in posts" 
        :key="index"
        :item="item"
      />
    </div>

    <div class="row mt-3 float-left">
      <pagination
        v-model="page" 
        :records="cnt" 
        :per-page="8" 
        @paginate="pagingHandle"
      />
    </div>
    
    <div class="row mt-3 float-right">
      <div class="col-auto">
        <router-link 
          :to="{path:'/posts/reg'}"
          class="btn btn-primary"
        >
          <i class="fa fa-edit" />
        </router-link>
      </div>
    </div>

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