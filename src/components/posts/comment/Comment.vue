<template>
  <div class="card shadow-lg commentBox">
      <div class="card-body">

        <!-- 댓글 입력창 요소 -->
        <div class="commentAreaField">
          <p class="commentCountTxt">총 {{commentList.length}}개의 댓글</p>
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

        <!-- 댓글 목록 요소 -->
        <div v-if="isShow">
          <div 
            class="commentListField"
            v-for="(comment, i) in commentList" 
            :key="i"
          >
            <div 
              class="commentRow"
              v-if="comment.depthNo === 0"
            >
              <div class="commentRowHead">
                <img class="commentUserProfileImg" />
                <div class="commentUserInfo">
                  <p>{{comment.memberNickname}}</p>
                  <p>{{comment.createdDate}}</p>
                </div>
              </div>
              
              <div class="commentRowBody">
                <div class="clearBothWidth100">
                  <p>{{comment.comment}}</p>
                  
                  <div
                    v-for="(reply, j) in commentList" 
                    :key="j"
                    class="innerCommentFieldBlock"
                  >
                    <div
                      v-if="reply.depthNo === 1 
                      && comment.groupNo === reply.groupNo" 
                      class="commentListField"
                    >
                      <div class="commentRow">
                        <div class="commentRowHead">
                          <img class="commentUserProfileImg" />
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
                v-if="isShow"
              >
                <div 
                  class="commentAreaField" 
                  style="padding:0px 15px 0px;"
                >
                  <textarea
                    class="commentArea"
                    placeholder="댓글을 작성하세요."
                  />

                  <button
                    type="button"
                    class="commentSubmitBtn float-right shadow-lg"
                    v-text="'댓글등록'"
                  />
                  <button
                    type="button"
                    class="commentCancelBtn float-right shadow-lg"
                    style="margin-right:10px;"
                    v-text="'취소'"
                    @click="replyHide()"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="replyShowBtn">
          <button 
            v-if="!isShow"
            class="replyShowBtn"
            @click="replyShow()"
            v-text="'펼치기'"
          />
        </div>

      </div>
    </div>
</template>
<script>
export default {
  name: "Comment",
  props: ['item'],
  data() {
    return {
      isShow: false,
      commentList: []
    }
  },
  watch: {
    item() {
      this.commentList = this.item
    }
  },
  methods: {
    replyShow() {
      this.isShow = true
    },
    replyHide() {
      this.isShow = false
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
  background-color:rgb(18, 184, 134); 
  color:#fff; 
  border:0; 
  border-radius:3px; 
  margin-top:5px;
  padding:5px 15px 5px 15px;
}
.commentCancelBtn {
  background-color:rgb(173, 181, 189);
  color:#fff; 
  border:0; 
  border-radius:3px; 
  margin-top:5px;
  padding:5px 15px 5px 15px;
}
.commentRowHead{
  padding: 10px;
  display:flex;
}
.commentUserProfileImg{
  width:50px; 
  height:50px; 
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
