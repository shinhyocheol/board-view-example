
# Vue3 Blog READ.me

# TachStack

- Java, javascript, html, css, MySQL
- SpringBoot, Vue3, bootstrap4
- JPA(Hibernate)
- QueryDsl, JUnit4, Docker, github, sorucetree

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 화면과 코드간략 소개

## 로그인

![스크린샷 2021-09-20 오후 6.19.55.png](Vue3%20Blog%20READ%20me%208ca411c5623e42469ad96a4922609591/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-09-20_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.19.55.png)

```jsx
<template>
  <div class="wrapper">
    <div id="login">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-sm-6">
            <div class="card shadow-lg">
              <h4 class="card-header">로그인</h4>
              <div class="card-body">
                <form data-toggle="validator" role="form" method="post" action="#">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Email</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i 
                                class="fa fa-user" 
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <input 
                            type="text" 
                            class="form-control"
                            placeholder="아이디(이메일)를 입력해주세요."
                            v-model="id" 
                          />
                        </div>
                        <div class="help-block with-errors text-danger"></div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Password</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i 
                                class="fa fa-lock" 
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <input 
                            type="password" 
                            v-model="password"
                            placeholder="비밀번호를 입력해주세요."
                            class="form-control"
                          />
                        </div>
                        <div class="help-block with-errors text-danger"></div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <button 
                        type="button"
                        class="btn btn-primary btn-lg btn-block"
                        @click="login()">
                        Login
                      </button>
                    </div>
                  </div>
                </form>
                <div class="form-group">
                  <div class="clear"></div>
                  <br>
                  <i class="fa fa-user fa-fw" />처음 방문하십니까? 
                  <a href="/join">회원가입</a>
                  <br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      id: "",
      password: ""
    }
  },
  methods: {
    login() {
      // 아이디와 패스워드 입력여부 확인
      if (this.id && this.password) {
        var id = this.id              // 아이디
        var password = this.password  // 비밀번호
        this.store.dispatch('login', {id, password}) // 로그인
      } else {
        alert("아이디 또는 비밀번호가 입력되지 않았습니다.")
        return false
      }
    }
  }
}
</script>
<style scoped>
  #login {
    margin-top: 150px;
  }
</style>
```

## 글 목록

![스크린샷 2021-09-20 오후 6.19.37.png](Vue3%20Blog%20READ%20me%208ca411c5623e42469ad96a4922609591/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-09-20_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.19.37.png)

```jsx
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
```

```jsx
<template>
  
    <div class="col-sm-3">
      <div class="card shadow-lg">

        <div class="bg-image ripple" data-mdb-ripple-color="light">
          <!-- 썸네일은 자체적으로 가지고 있는 파일들을 랜덤으로 표출 -->
          <img 
            class="card-img-top w-100" 
            :src="thumbnails[getRandom()]"
          />
          <!-- 동적 라우트 매칭 -->
          <router-link 
            :to="`/posts/${item.id}`">
            <div 
              class="mask" 
              style="background-color: rgba(0, 0, 0, 0.0)"
            >
              <div class="d-flex justify-content-center align-items-center h-100" />
            </div>
            <div class="hover-overlay">
              <div 
                class="mask" 
                style="background-color: rgba(0, 0, 0, 0.5)"
              />
            </div>
          </router-link>
        </div>

        <div class="card-body">
          <h5 class="card-title">
            {{item.title}}
          </h5>
          <span class="card-text">
            {{item.content}}
          </span>
          <p class="card-text">
            <small class="text-muted">
              {{item.createdDate}}
            </small>
          </p>
        </div>
      </div>
    </div>
    
</template>
<script>
export default {
  name: "Article",
  props: ['item'],
  data () {
    return {
      thumbnails: [
        "/img/spring-boot.png",
        "/img/vue-js.png",
        "/img/mysql.png",
        "/img/js.png",
        "/img/code.png",
        "/img/react.png"
      ]
    }
  },
  methods: {
    getRandom() {
      return Math.floor(Math.random() * 6)
    }
  }
}
</script>
<style scoped>
.card-body {
  background-color: rgba(0,0,0,.03);
  max-height: 200px;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
}
.col-sm-3{
  margin-bottom:10px;
}
</style>
```

## 글 상세 및 댓글박스

![스크린샷 2021-09-20 오후 6.20.25.png](Vue3%20Blog%20READ%20me%208ca411c5623e42469ad96a4922609591/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-09-20_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.20.25.png)

![스크린샷 2021-09-20 오후 6.20.50.png](Vue3%20Blog%20READ%20me%208ca411c5623e42469ad96a4922609591/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-09-20_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.20.50.png)

```jsx
<template>
  
  <div class="container" style="padding-bottom:50px;">
    
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
.customBtnRow {
  float:left; 
  width:100%; 
  margin-bottom:20px;
}
</style>
```

```jsx
<template>
  <div class="card shadow-lg commentBox">
      <div class="card-body">

        <!-- 댓글 입력창 요소 -->
        <div class="commentAreaField">
          <p class="commentCountTxt">총 {{item.length}}개의 댓글</p>
          <textarea
            class="commentArea"
            v-model="newComment"
            placeholder="댓글을 작성하세요."
          />
          <button
            type="button"
            class="commentSubmitBtn float-right shadow-lg"
            v-text="'댓글등록'"
            @click="regComment()"
          />
        </div>

        <!-- 댓글 목록 요소 -->
        <div >
          <div 
            class="commentListField"
            v-for="(comment, i) in comments" 
            :key="i"
          >
            <div 
              class="commentRow"
            >
              <div class="commentRowHead">
                <img 
                  class="commentUserProfileImg" 
                  :src="thumbnails[getRandom()]"
                />
                <div class="commentUserInfo">
                  <p>{{comment.memberNickname}}</p>
                  <p>{{comment.createdDate}}</p>
                </div>
              </div>
              
              <div class="commentRowBody">
                <div class="clearBothWidth100">
                  <p>{{comment.comment}}</p>
                  <div
                    v-for="(reply, j) in replys" 
                    :key="j"
                    class="innerCommentFieldBlock"
                  >
                    <div
                      v-if="comment.groupNo === reply.groupNo" 
                      class="commentListField"
                    >
                      <div class="commentRow">
                        <div class="commentRowHead">
                          <img 
                            class="commentUserProfileImg"
                            :src="thumbnails[getRandom()]"
                          />
                          <div class="commentUserInfo">
                            <p>{{reply.memberNickname}}</p>
                            <p>{{reply.createdDate}}</p>
                          </div>
                        </div>
                        <div class="commentRowBody">
                          <p>{{reply.comment}}</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div 
                class="commentRowBottom"
              >
                <div 
                  class="commentAreaField" 
                  style="padding:0px 15px 0px;"
                >
                  <textarea
                    class="commentArea"
                    placeholder="답글을 작성하세요."
                    v-model="newReply"
                  />

                  <button
                    type="button"
                    class="replySubmitBtn float-right shadow-lg"
                    v-text="'등록'"
                    @click="regReply(comment.commentId)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  name: "Comment",
  props: ['item', 'postsId', 'getHandler'],
  data() {
    return {
      replyRegShow: [],
      newComment: "",
      newReply: "",
      comments: [],
      replys:[],
      thumbnails: [
        "/img/user(1).png",
        "/img/user(2).png",
        "/img/user(3).png",
        "/img/user(4).png",
        "/img/user(5).png",
        "/img/user(6).png",
        "/img/user(7).png",
        "/img/user(8).png"
      ]
    }
  },
  watch: {
    item() {
      this.comments = []
      this.replys = []
      for (var i=0; i<this.item.length; i++) {
        if (this.item[i].depthNo == 0) {
          this.comments.push(this.item[i])
        } else {
          this.replys.push(this.item[i])
        }
      }
    }
  },
  methods: {
    getRandom() {
      return Math.floor(Math.random() * 6)
    },
    regComment() {
      if (!this.newComment) {
        alert("댓글을 입력해주시기 바랍니다.")
        return false
      }
      let params = {
        "postsId": this.postsId,
        "comment": this.newComment,
        "depthNo": 0 // 0 : 댓글, 1: 대댓글
      }
      api.post("/posts/" + this.postsId + "/comment", JSON.stringify(params),
        {headers: {'content-type': 'application/json'}}
      ).then(() => {
        alert("성공적으로 등록되었습니다.")
        this.newComment = ""
        this.$emit('callParentFunction')
      }).catch(err => {
        alert(err.response.data)
      })
    },
    regReply(commentId) {
      if (!this.newReply) {
        alert("댓글을 입력해주시기 바랍니다.")
        return false
      }
      let params = {
        "groupNo": commentId,
        "postsId": this.postsId,
        "comment": this.newReply,
        "depthNo": 1 // 0 : 댓글, 1: 대댓글
      }
      api.post("/posts/" + this.postsId + "/comment/" + commentId, JSON.stringify(params),
        {headers: {'content-type': 'application/json'}}
      ).then(() => {
        alert("성공적으로 등록되었습니다.")
        this.newReply = ""
        this.$emit('callParentFunction')
      }).catch(err => {
        alert(err.response.data)
      })
    }
  }
}
</script>
<style scoped>
.commentBox {
  margin-top: 10px;
  padding-bottom: 30px;
}
.commentAreaField {
  width: 100%;
  height: auto;
  float: left;
  margin-bottom: 15px;
  border-bottom: 1px solid #ebebeb;
}
.commentListField {
  padding-top: 20px;
  width: 100%;
  height: auto;
  float: left;
  border-bottom: 1px solid #ebebeb;
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
  margin-bottom: 1rem;
  width: 100%;
  border-radius: 4px;
  min-height: 6.125rem;
  font-size: 1rem;
  color: rgb(33, 37, 41);
  line-height: 1.75;
}
.commentSubmitBtn {
  background-color:rgb(40, 41, 41); 
  color:#fff; 
  border:0; 
  border-radius:3px; 
  margin-top:5px;
  margin-bottom: 25px;
  padding:5px 15px 5px 15px;
}
.replySubmitBtn {
  background-color:rgb(173, 181, 189);
  color:#fff; 
  border:0; 
  border-radius:3px; 
  margin-top:5px;
  margin-bottom: 25px;
  padding:5px 15px 5px 15px;
}
.commentRowHead{
  padding: 10px;
  display:flex;
}
.commentUserProfileImg{
  width:50px; 
  height:70px; 
  float:left;
}
.commentUserInfo{
  padding-left:15px; 
  float:left; 
  color:rgb(52, 58, 64);
}
.commentUserInfo p:first-child {
  margin-bottom:0px; 
  font-weight: bold;
}
.commentUserInfo p:last-child {
  font-size: 0.875rem;
}
.commentRowBody {
  color:rgb(52, 58, 64);
  padding: 10px;
  display: flex;
}
.commentRowBottom {
  color:rgb(52, 58, 64);
  padding: 30px 10px 10px;
  display: flex;
  width: calc(100% - 50px);
  background-color: rgba(0, 0, 0, 0.016);
  margin: auto;
}
.replyShowBtn{ 
  display: block;
  padding: 15px;
}
.replyShowBtn button {
  background-color:#fff; 
  border:0px; 
  color:rgb(52, 58, 64);
}
.clearBothWidth100{
  clear:both;
  width: 100%;
}
.innerCommentFieldBlock {
  padding:0px 15px 0px 15px; 
  display:flex;
}
</style>
```
