<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">새로운 글 등록</h5>
        <form>
          
          <div class="form-group">
            <label for="postsTitle">제목</label>
            <input 
              type="text" 
              class="form-control" 
              id="postsTitle" 
              v-model="title"
              placeholder="글 제목을 입력해주세요."/>
          </div>

          <div class="form-group">
            <label for="postsContent">본문</label>
            <textarea 
              rows="10"
              class="form-control" 
              id="postsContent"
              v-model="content"
              placeholder="본문내용을 입력해주세요." />
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

    <div class="row mt-3 float-right">
      <div class="col-auto">
        <button 
          class="btn btn-success" 
          type="button"
          @click="regPosts()">
          <i class="fa">저장</i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostsReg",
  data () {
    return {
      disabled: true
    }
  },
  methods: {
    regPosts() {
      let params = {
        "title" : this.title,
        "content" : this.content,
      }
      this.axios.post('http://127.0.0.1:8080/posts',
      JSON.stringify(params), {headers: { 'content-type': 'application/json' }}
      ).then(res => {
        alert("성공적으로 저장되었습니다.\n글 번호 : [" + res.data + "]")
        this.$router.push("/posts")
      }).catch(e => {
        alert(e.response.data)
      })
    }
  } 
}
</script>
