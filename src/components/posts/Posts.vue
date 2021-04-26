<template>
  <div class="posts">
    <div class="navbar navbar-dark bg-dark shadow-sm mb-3">
      <div class="container d-flex justify-content-between">
          <a href="/" class="navbar-brand d-flex align-items-center">
              <strong>Spring boot(JPA)</strong>
          </a>
      </div>
    </div>
  </div>
  <div class="container">
    <table class="table">
        <thead class="thead-light">
        <tr class="text-center">
            <th scope="col">#</th>
            <th scope="col">작성자</th>
            <th scope="col">제목</th>
            <th scope="col">본문</th>
            <th scope="col">작성일</th>
        </tr>
        </thead>
        <tbody>
        <tr class="text-center" 
            v-for="(post, index) in posts"
            :key="index" >
            <th scope="row">
              <span>{{post.id}}</span>
            </th>
            <td>
              <span>{{post.author}}</span>
            </td>
            <td>
              <span>{{post.title}}</span>
            </td>
            <td>
              <span>{{post.content}}</span>
            </td>
            <td>
              <span>{{post.createdDate}}</span>
            </td>
        </tr>
        </tbody>
    </table>
    <div class="row">
        <div class="col-auto mr-auto"></div>
        <div class="col-auto">
            <a class="btn btn-primary" role="button">글쓰기</a>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Posts',
  data () {
    return {
      posts: [
        {"id": 1, "author": "홍길동", "title": "제목", "content": "글 본문", "createdDate": "2021.04.21 00:00:00"},
        {"id": 2, "author": "고길동", "title": "길동아", "content": "고길동입니다", "createdDate": "2021.04.21 00:00:00"},
        {"id": 3, "author": "둘리", "title": "호잇", "content": "테스트중입니다", "createdDate": "2021.04.21 00:00:00"},
        {"id": 4, "author": "또치", "title": "하이하이", "content": "반갑습니다", "createdDate": "2021.04.21 00:00:00"},
        {"id": 5, "author": "마이콜", "title": "제목", "content": "글 본문입니다.", "createdDate": "2021.04.21 00:00:00"},
        {"id": 6, "author": "도우너", "title": "안녕하세요", "content": "도우너입니다.", "createdDate": "2021.04.21 00:00:00"},
        {"id": 7, "author": "악당", "title": "그저", "content": "악할뿐", "createdDate": "2021.04.21 00:00:00"},
        {"id": 8, "author": "병사", "title": "시키는대로", "content": "따를뿐", "createdDate": "2021.04.21 00:00:00"}
      ]
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
      .then(result => {
        console.log(result.data)
      }).catch(e => {
        alert(e)
      })
    },
  }
}
</script>