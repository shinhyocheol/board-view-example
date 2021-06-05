<template>
  <div class="wrapper">
    <div id="login">
      <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="card">
            <h4 class="card-header">로그인</h4>
            <div class="card-body">
              <div class="alert alert-danger" role="alert">
                환영합니다! 로그인 정보를 입력해주시기 바랍니다.
              </div>
              <form data-toggle="validator" role="form" method="post" action="#">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Email</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="fa fa-user" aria-hidden="true"></i>
                          </span>
                        </div>
                        <input 
                          type="text" 
                          class="form-control"
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
                            <i class="fa fa-lock" aria-hidden="true"></i>
                          </span>
                        </div>
                        <input 
                          type="password" 
                          v-model="password" 
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
                <a href="#">회원가입</a>
                <br>
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
      console.log(this.id)
      console.log(this.password)
    }
  }
}
</script>
<style scoped>
  #login {
    margin-top: 100px;
  }
</style>