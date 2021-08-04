<template>
  <div class="card shadow-lg commentBox">
      <div class="card-body">

        <!-- 댓글 입력창 요소 -->
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

        <!-- 댓글 목록 요소 -->
        <div class="commentListField">
          <div class="commentRow">
            
            <div class="commentRowHead">
              <img class="commentUserProfileImg" />
              <div class="commentUserInfo">
                <p>nickname</p>
                <p>2021.08.04</p>
              </div>
            </div>
            
            <div class="commentRowBody">
              <p>댓글내용댓글내용하하하하하하하댓글내용댓글내용하하하하하하하댓글내용댓글내용하하하하하하하댓글내용댓글내용하하하하하하하댓글내용댓글내용하하하하하하하댓글내용댓글내용하하하하하하하댓글내용댓글내용하하하하하하하</p>
            </div>

            <div class="commentRowBottom">
              <button 
                class="replyShowBtn"
                style="background-color:#fff; border:0px; color:rgb(52, 58, 64);"
                v-text="'답글 등록'"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
</template>
<script>
export default {
  name: "Comment",
  props: ['item']
}
</script>
<style scoped>
.commentBox {
  margin-top: 10px;
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
  padding: 10px;
  display: flex;
}
</style>
