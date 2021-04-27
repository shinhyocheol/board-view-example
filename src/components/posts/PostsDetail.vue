<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">타이틀 테스트</h5>
        <p class="card-text">
          <small class="text-muted">작성자 : author (2021-04-27)</small>
        </p>
        <textarea class="form-control"
          :disabled="disabled">작성글 본문 테스트중입니다</textarea>
      </div>
    </div>

    <div class="row mt-3 float-right"
          v-if="disabled">
      <div class="col-auto">
        <button 
          class="btn btn-info" 
          type="button"
          @click="setMode()">수정
        </button>
      </div>
      <div class="col-auto">
        <button 
          class="btn btn-danger" 
          type="button">삭제
        </button>
      </div>
    </div>

    <div class="row mt-3 float-right"
        v-if="!disabled">
      <div class="col-auto">
        <button 
          class="btn btn-warning" 
          type="button"
          @click="readMode()">취소
        </button>
      </div>
      <div class="col-auto">
        <button 
          class="btn btn-success" 
          type="button"
          @click="setPosts()">저장
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostsDetail",
  data () {
    return {
      disabled: true
    }
  },
  methods: {
    readMode() {
      this.disabled = true
    },
    setMode() {
      this.disabled = false
    },
    setPosts() {
      this.axios.put()
    }
  } 
}
</script>
