<template>
  <div class="container">
      <div class="card shadow-lg">
        <div class="card-body">
          <Table 
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
          </Table>
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
</template>

<script>
import Table from '@/components/layout/Table'
import api from '@/api/index.js'
export default {
  name: 'Posts',
  components: {Table},
  data () {
    return {
      posts: [],
      cnt : 0
    }
  },
  computed: {
    list () {
      return this.posts
    },
    totalCnt () {
      return this.cnt
    }
  },
  mounted () {
    this.handleService()
  },
  methods: {
    handleService() {
      var params = new URLSearchParams()
      params.append("page", 1)
      this.getPosts(params)
    },
    getPosts(params) {
      api({
        url: "/posts?" + params,
        method: 'get'
      }).then(res => {
        this.posts = res.data.content
        this.cnt = res.data.totalElements
      }).catch(err => {
        alert(err)
      })
    },
  }
}
</script>