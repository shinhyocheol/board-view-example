<template>
  
    <div class="col-sm-4">
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
.col-sm-4{
  margin-bottom:15px;
}
</style>