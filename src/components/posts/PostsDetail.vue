<template>
  
  <div class="container" style="padding-bottom:50px;">
    
    <div class="custom-btn-row">
      <div class="row mt-3 float-left">
        <div class="col-auto">
          <router-link 
            v-if="disabled"
            :to="{path:'/posts'}"
            class="btn btn-dark"
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
            class="btn btn-dark" 
            type="button"
            @click="setMode()"
          >
            <i class="fa fa-edit"></i>
          </button>
        </div>

        <div class="col-auto">
          <button 
            v-if="posts.memberId === memberId"
            class="btn btn-dark" 
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
            class="btn btn-dark" 
            type="button"
            @click="setPosts()"
          >
            <i class="fa fa-save" />
          </button>
        </div>
        
        <div class="col-auto">
          <button 
            class="btn btn-dark" 
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

    <div v-if="disabled">
      <Comment
        :posts-id="param.id"
        :item="comments"
        @callParentFunction="getPosts"
      />
    </div>

  </div>
</template>
<script>
import api from '@/api/index.js'
import { store } from '@/store/index.js'
import Comment from '@/components/posts/comment/Comment.vue'
export default {
  name: "PostsDetail",
  components: { Comment },
  data () {
    return {
      disabled: true,
      memberId: store.state.id,
      param: this.$route.params,
      posts: {},
      comments: []
    }
  },
  watch: {
    disabled() {
      if (this.disabled) {
        this.handleService()
      }
    }
  },
  created () {
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
      api.get("/posts/" + this.param.id).then(res => {
        this.posts = res.data
        this.comments = this.posts.comments
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
    },
    regComment() {
      
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
.custom-btn-row {
  float:left; 
  width:100%; 
  margin-bottom:20px;
}
</style>
