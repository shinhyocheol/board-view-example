<template>
  <div class="container">
    <div class="card shadow-lg">
      <div class="card-body">
        <h5 class="card-title">게시글 상세</h5>
        <p class="card-text">
          <small class="text-muted">작성자 : {{posts.author}} ({{posts.createdDate}})</small>
        </p>

        <form>
          <div class="form-group">
            <label for="postsTitle">제목</label>
            <input 
              type="text" 
              class="form-control" 
              id="postsTitle" 
              placeholder="글 제목을 입력해주세요."
              v-model="posts.title"
              :disabled="disabled" />
          </div>

          <div class="form-group">
            <label for="postsContent">본문</label>
            <textarea 
              rows="10"
              class="form-control" 
              id="postsContent"
              placeholder="본문내용을 입력해주세요."
              v-model="posts.content"
              :disabled="disabled"
            >
              작성글 본문 테스트중입니다
            </textarea>
          </div>
        </form>

      </div>
    </div>

    <div class="row mt-3 float-left">
      <div class="col-auto">
        <router-link :to="{path:'/posts'}"
                      class="btn btn-primary">
          <i class="fa">목록으로</i>
        </router-link>
      </div>
    </div>

    <div class="row mt-3 float-right"
          v-if="disabled">

      <div class="col-auto">
        <button 
          class="btn btn-success" 
          type="button"
          @click="setMode()">수정
        </button>
      </div>

      <div class="col-auto">
        <button 
          class="btn btn-danger" 
          type="button"
          @click="delPosts()">삭제
        </button>
      </div>

    </div>

    <div class="row mt-3 float-right"
        v-if="!disabled">
      
      <div class="col-auto">
        <button 
          class="btn btn-success" 
          type="button"
          @click="setPosts()">저장
        </button>
      </div>
      
      <div class="col-auto">
        <button 
          class="btn btn-danger" 
          type="button"
          @click="readMode()">취소
        </button>
      </div>

    </div>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  name: "PostsDetail",
  data () {
    return {
      disabled: true,
      param: this.$route.query,
      posts: {}
    }
  },
  mounted () {
    this.handleService()
  },
  methods: {
    handleService() {
      this.readMode()
      this.getPosts()
    },
    readMode() {
      this.disabled = true
    },
    setMode() {
      this.disabled = false
    },
    getPosts() {
      api({
        url: "/posts/" + this.param.id,
        method: 'get'
      }).then(res => {
        this.posts = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    setPosts() {
      let params = {
        "id": this.param.id,
        "title" : this.posts.title,
        "content" : this.posts.content,
      }
      api({
        url: "/posts/" + this.param.id,
        method: 'put',
        headers: {'content-type': 'application/json'},
        data: JSON.stringify(params)
      }).then(() => {
        alert("성공적으로 수정되었습니다.")
        this.handleService()
      }).catch(err => {
        alert(err.response.data)
      })
    },
    delPosts() {
      api({
        url: "/posts/" + this.param.id,
        method: 'delete'
      }).then(() => {
        alert("성공적으로 삭제되었습니다.")
        this.$router.push("/posts")
      }).catch(err => {
        alert(err.response.data)
      })
    }
  } 
}
</script>
