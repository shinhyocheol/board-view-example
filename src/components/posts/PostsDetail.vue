<template>
  
  <div class="container">
    
    <div class="customBtnRow">
      <div class="row mt-3 float-left">
        <div class="col-auto">
          <router-link 
            v-if="disabled"
            :to="{path:'/posts'}"
            class="btn btn-info"
          >
            <i class="fa fa-list" />
          </router-link>
        </div>
      </div>

      <div 
        class="row mt-3 float-right"
        v-if="disabled"
      >
        <div class="col-auto">
          <button 
            v-if="posts.memberId === memberId"
            class="btn btn-primary" 
            type="button"
            @click="setMode()"
          >
            <i class="fa fa-edit" />
          </button>
        </div>

        <div class="col-auto">
          <button 
            v-if="posts.memberId === memberId"
            class="btn btn-danger" 
            type="button"
            @click="delPosts()"
          >
            <i class="fa fa-trash" />
          </button>
        </div>

      </div>

      <div 
        class="row mt-3 float-right"
        v-if="!disabled"
      >
        <div class="col-auto">
          <button 
            class="btn btn-success" 
            type="button"
            @click="setPosts()"
          >
            <i class="fa fa-save" />
          </button>
        </div>
        
        <div class="col-auto">
          <button 
            class="btn btn-warning" 
            type="button"
            @click="readMode()"
          >
            <i class="fa fa-times" />
          </button>
        </div>
      </div>
    </div>

    <div class="card shadow-lg">
      <div class="card-body">

        <!-- 게시글 타이틀 -->
        <form>
          <div class="form-group">
            <label v-if="disabled">
              <h1>{{posts.title}}</h1>
            </label>
            <input 
              v-if="!disabled"
              type="text" 
              class="form-control" 
              placeholder="제목을 입력해주세요."
              v-model="posts.title"
            />
          </div>
          <!-- 텍스트 미리보기(읽기모드) -->
          <v-md-preview
            v-if="disabled"
            :text="posts.content"
            height="400px"
          />
          <!-- 텍스트 에디터(쓰기모드) -->
          <v-md-editor
            v-if="!disabled"
            v-model="posts.content"
            height="400px"
          />
        </form>
        <p class="text-right">
          <small class="text-muted">
            {{posts.author}} ({{posts.createdDate}})
          </small>
        </p>
      </div>
    </div>

    <div 
      class="card shadow-lg" 
      style="margin-top:10px;"
    >
      <div class="card-body">
        <div class="commentAreaField">
          <p class="commentCountTxt">0개의 댓글</p>
          <textarea
            class="commentArea"
            placeholder="댓글을 작성하세요."
          />
          <button
            type="button"
            class="commentSubmitBtn float-right shadow-lg"
            v-text="'댓글등록'"
          />
        </div>
        <div class="commentListField">
          댓글목록
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import api from '@/api/index.js'
import { store } from '@/store/index.js'
export default {
  name: "PostsDetail",
  data () {
    return {
      disabled: true,
      memberId: store.state.id,
      param: this.$route.params,
      posts: {}
    }
  },
  created () {
    console.log("vue component dom", this.$el)
    this.handleService()
  },
  mounted () {
    console.log("vue component dom", this.$el)
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
      api.get("/posts/" + this.param.id).then(res => {
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
      api.put("/posts/" + this.param.id, JSON.stringify(params),
        {headers: {'content-type': 'application/json'}}
      ).then(() => {
        alert("성공적으로 수정되었습니다.")
        this.handleService()
      }).catch(err => {
        alert(err.response.data)
      })
    },
    delPosts() {
      api.delete("/posts/" + this.param.id).then(() => {
        alert("성공적으로 삭제되었습니다.")
        this.$router.push("/posts")
      }).catch(err => {
        alert(err.response.data)
      })
    }
  } 
}
</script>
<style scoped>
form{
  padding: 30px;
  min-height: 300px;
}
.form-group{
  border-bottom: 1px solid #ebebeb;
}
.customBtnRow {
  float:left; 
  width:100%; 
  margin-bottom:20px;
}
.commentAreaField {
  width: 100%;
  height: auto;
  float: left;
  margin-bottom: 15px;
}
.commentListField {
  width: 100%;
  height: auto;
  float: left;
}
.commentCountTxt{
  color: rgba(78, 82, 78, 0.445);
}
.commentArea{
  height: 70px;
  resize: none;
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border: 1px solid rgb(233, 236, 239);
  margin-bottom: 1.5rem;
  width: 100%;
  border-radius: 4px;
  min-height: 6.125rem;
  font-size: 1rem;
  color: rgb(33, 37, 41);
  line-height: 1.75;
}
.commentSubmitBtn {
  background-color:rgb(18, 184, 134); 
  color:#fff; 
  border:0; 
  border-radius:3px; 
  margin-top:5px;
  padding:5px;
}
</style>
