<template>
  <div class="container">

    <div class="custom-btn-row">
      <div class="row mt-3 float-left">
        <div class="col-auto">
          <router-link 
            :to="{path:'/posts'}"
            class="btn btn-info"
          >
            <i class="fa fa-list" />
          </router-link>
        </div>
      </div>

      <div class="row mt-3 float-right">
        <div class="col-auto">
          <button 
            class="btn btn-success" 
            type="button"
            @click="regPosts()"
          >
            <i class="fa fa-save" />
          </button>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <form>
          <!-- 게시글 타이틀 -->
          <div class="form-group">
            <label for="postsTitle">제목</label>
            <input 
              type="text" 
              class="form-control" 
              id="postsTitle" 
              v-model="title"
              placeholder="글 제목을 입력해주세요."
            />
          </div>

          <!-- 텍스트 에디터 -->
          <label>내용</label>
          <v-md-editor
            v-model="content"
            height="400px"
          />

        </form>
      </div>
    </div>
    
  </div>
</template>
<script>
import api from '@/api/index.js'

export default {
  name: "PostsReg",
  data () {
    return {
      disabled: true,
      text: '',
      title: '',
      content: '',
      editorOptions: {
        hideModeSwitch: true
      }

    }
  },
  methods: {
    regPosts() {
      let params = {
        "title" : this.title,
        "content" : this.content,
      }
      api.post("/posts", JSON.stringify(params),
        {headers: {'content-type': 'application/json'}}
      ).then(res => {
        alert("성공적으로 저장되었습니다.\n글 번호 : [" + res.data + "]")
        this.$router.push("/posts")
      }).catch(err => {
        alert(err.response.data)
      })
    }
  }
}
</script>
<style scoped>
.custom-btn-row {
  float:left; 
  width:100%; 
  margin-bottom:20px;
}
</style>