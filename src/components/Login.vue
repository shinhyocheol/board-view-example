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