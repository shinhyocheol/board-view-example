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
              placeholder="글 제목을 입력해주세요."/>
          </div>

          <div class="form-group">
            <label for="postsContent">본문</label>
            <textarea 
              rows="10"
              class="form-control" 
              id="postsContent"
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
          type="button">
          <i class="fa">저장</i>
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
  } 
}
</script>
