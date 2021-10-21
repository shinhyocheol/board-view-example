<template>
  <div class="card shadow-lg comment-box">
      <div class="card-body">

        <!-- 댓글 입력창 요소 -->
        <div class="comment-area-field bottom-gray-line">
          <p class="comment-count-txt">총 {{item.length}}개의 댓글</p>
          <textarea
            class="comment-area"
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
        <div>
          <div 
            class="comment-list-field"
            v-for="(comment, i) in comments" 
            :key="i"
          >
            <div class="commentRow">
              
              <div class="bottom-gray-line">
                <div class="comment-row-head">
                  <img 
                    class="comment-user-profile-img" 
                    :src="thumbnails[getRandom()]"
                  />
                  <div class="comment-user-info">
                    <p>{{comment.memberNickname}}</p>
                    <p>{{comment.createdDate}}</p>
                  </div>
                </div>
                <div class="comment-row-body">
                  <div class="clear-both-width-100">
                    <p>{{comment.comment}}</p>
                  </div>
                </div>
              </div>

              <div>
                <div
                  v-for="(reply, j) in replys" 
                  :key="j"
                  class="inner-comment-field-block"
                >
                  <div
                    v-if="comment.groupNo === reply.groupNo" 
                    class="comment-list-field bottom-gray-line"
                  >
                    <div class="commentRow">
                      <div class="comment-row-head">
                        <img 
                          class="comment-user-profile-img"
                          :src="thumbnails[getRandom()]"
                        />
                        <div class="comment-user-info">
                          <p>{{reply.memberNickname}}</p>
                          <p>{{reply.createdDate}}</p>
                        </div>
                      </div>
                      <div class="comment-row-body">
                        <p>{{reply.comment}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="comment-row-bottom">
                <div 
                  class="comment-area-field" 
                  style="padding:0px 15px 0px;"
                >
                  <textarea
                    class="comment-area"
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

      let requestHeander = {headers: {'content-type': 'application/json'}}
      let requestUrl = "/posts/" + this.postsId + "/comment"
      let requestParams = JSON.stringify({
        "postsId": this.postsId,
        "comment": this.newComment,
        "depthNo": 0 // 0 : 댓글, 1: 대댓글
      })

      api.post(
        requestUrl, 
        requestParams,
        requestHeander
      ).then(() => {
        alert("성공적으로 등록되었습니다.")
        this.newComment = ""
        this.$emit('callParentFunction')
      }).catch(err => { alert(err.response.data) })

    },
    regReply(commentId) {
      if (!this.newReply) {
        alert("댓글을 입력해주시기 바랍니다.")
        return false
      }

      let requestHeander = {headers: {'content-type': 'application/json'}}
      let requestUrl = "/posts/" + this.postsId + "/comment/" + commentId
      let requestParams = JSON.stringify({
        "groupNo": commentId,
        "postsId": this.postsId,
        "comment": this.newReply,
        "depthNo": 1 // 0 : 댓글, 1: 대댓글
      })

      api.post(
        requestUrl, 
        requestParams,
        requestHeander
      ).then(() => {
        alert("성공적으로 등록되었습니다.")
        this.newReply = ""
        this.$emit('callParentFunction')
      }).catch(err => { alert(err.response.data) })

    }
  }
}
</script>
<style scoped>
.comment-box {
  margin-top: 10px;
  padding-bottom: 30px;
}
.comment-area-field {
  width: 100%;
  height: auto;
  float: left;
}
.comment-list-field {
  padding-top: 20px;
  width: 100%;
  height: auto;
  float: left;
}
.comment-count-txt{
  color: rgba(78, 82, 78, 0.445);
}
.comment-area{
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
.comment-row-head{
  padding: 10px;
  display:flex;
}
.comment-user-profile-img{
  width:50px; 
  height:70px; 
  float:left;
}
.comment-user-info{
  padding-left:15px; 
  float:left; 
  color:rgb(52, 58, 64);
}
.comment-user-info p:first-child {
  margin-bottom:0px; 
  font-weight: bold;
}
.comment-user-info p:last-child {
  font-size: 0.875rem;
}
.comment-row-body {
  color:rgb(52, 58, 64);
  padding: 10px;
  display: flex;
}
.comment-row-bottom {
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
.clear-both-width-100{
  clear:both;
  width: 100%;
}
.inner-comment-field-block {
  padding:0px 15px 0px 15px; 
  display:flex;
}
.bottom-gray-line {
  border-bottom: 1px solid #ebebeb;
}
</style>
