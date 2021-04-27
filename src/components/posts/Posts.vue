<template>
  <div class="container">
    <div class="row">
        <div class="col-auto mr-auto"></div>
        <div>
          <a class="btn btn-primary float-right"
             role="button">글쓰기</a>
        </div>
    </div>
    <Table :list="list" 
            id="table" >
      <template v-slot:header>
        <th>#</th>
        <th>작성자</th>
        <th>제목</th>
        <th>본문</th>
        <th>작성일</th>
      </template>
      <template v-slot:default="slotProps">
        <td>{{slotProps.row.id}}</td>
        <td>{{slotProps.row.author}}</td>
        <td>{{slotProps.row.title}}</td>
        <td>{{slotProps.row.content}}</td>
        <td>{{slotProps.row.createdDate}}</td>
      </template> 
    </Table>
  </div>
</template>

<script>
import Table from '@/components/layout/Table'
export default {
  name: 'Posts',
  components: {Table},
  data () {
    return {
      posts: []
    }
  },
  computed: {
    list () {
      return this.posts
    }
  },
  mounted () {
    this.handleService()
  },
  methods: {
    handleService() {
      this.getPosts()
    },
    getPosts() {
      this.axios.get("http://127.0.0.1:8080/posts")
      .then(res => {
        this.posts = res.data
      }).catch(e => {
        alert(e)
      })
    },
  }
}
</script>