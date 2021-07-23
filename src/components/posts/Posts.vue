<template>
  <!-- 
    <div class="container">
      <div class="card shadow-lg">
        <div class="card-body">
          <DataTable 
            :list="list"
            :cnt="totalCnt"
            :getData="getPosts"
            id="table" 
          >
            <template v-slot:header>
              <th scope="col">#</th>
              <th scope="col">제목</th>
              <th scope="col">본문</th>
              <th scope="col">작성자</th>
              <th scope="col">작성일</th>
              <th scope="col" class="text-center">비고</th>
            </template>
            <template v-slot:default="slotProps">
              <td>{{slotProps.row.id}}</td>
              <td>{{slotProps.row.title}}</td>
              <td>{{slotProps.row.content}}</td>
              <td>{{slotProps.row.author}}</td>
              <td>{{slotProps.row.createdDate}}</td>
              <td class="text-center">
                <router-link 
                  :to="{ 
                    path:'/posts/detail', 
                    query: { id: slotProps.row.id }
                  }"
                  class="btn btn-sm btn-primary"
                >
                  <i class="fa fa-search" />
                </router-link>
              </td>
            </template> 
          </DataTable>
        </div>
      </div>


      <div class="row mt-3 float-right">
        <div class="col-auto">
          <router-link :to="{path:'/posts/reg'}"
                        class="btn btn-primary">
            <i class="fa fa-plus">등록</i>
          </router-link>
        </div>
      </div>
    </div> 
  -->
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
// import DataTable from '@/components/layout/DataTable'
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
  // computed: {
  //   list () {
  //     return this.posts
  //   },
  //   totalCnt () {
  //     return this.cnt
  //   }
  // },
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