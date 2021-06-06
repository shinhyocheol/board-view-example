<template>
  <div class="wrapper">
    <div id="login">
      <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="card">
            <h4 class="card-header">회원가입</h4>
            <div class="card-body">
              <div class="alert alert-danger" role="alert">
                    회원가입을 위한 정보를 입력해주시기 바랍니다.
              </div>
              <form data-toggle="validator" role="form" method="post" action="#">
                
                <!-- 이메일 -->
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
                          placeholder="이메일을 입력해주세요."
                          v-model="id" 
                        />
                      </div>
                      <div class="help-block with-errors text-danger"></div>
                    </div>
                  </div>
                </div>

                <!-- 비밀번호 -->
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

                <!-- 이름 -->
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Name</label>
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
                          placeholder="이름을 입력해주세요."
                          v-model="name" 
                        />
                      </div>
                      <div class="help-block with-errors text-danger"></div>
                    </div>
                  </div>
                </div>

                <!-- 닉네임 -->
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Nickname</label>
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
                          v-model="nickname" 
                          placeholder="닉네임을 입력해주세요."
                          class="form-control"
                        />
                      </div>
                      <div class="help-block with-errors text-danger"></div>
                    </div>
                  </div>
                </div>

                <!-- 연락처 -->
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Mobile</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i 
                              class="fa fa-phone" 
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <input 
                          type="text" 
                          v-model="mobile"
                          placeholder="연락처를 입력해주세요('-' 제외)"
                          class="form-control"
                        />
                      </div>
                      <div class="help-block with-errors text-danger"></div>
                    </div>
                  </div>
                </div>

                <!-- 회원가입 버튼 -->
                <div class="row">
                  <div class="col-md-12">
                    <button 
                      type="button"
                      class="btn btn-primary btn-lg btn-block"
                      @click="join()">
                      Join
                    </button>
                  </div>
                </div>
                
              </form>
              <div class="form-group"></div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>
<script>
export default {
  name: 'Join',
  data () {
    return {
      id: "",
      password: "",
      name: "",
      nickname: "",
      mobile: ""
    }
  },
  methods: {
    join() {
        const params = {
            "email": this.id,               // 아이디
            "password": this.password,      // 비밀번호
            "name": this.name,              // 이름
            "nickname": this.nickname,      // 닉네임
            "mobile": this.mobile           // 연락처
        }
        console.log(params)
        this.axios.post("http://localhost:8080/signup", JSON.stringify(params), {
            headers: { 'content-type': 'application/json' }
        }).then(res => {
            alert("회원가입이 정상적으로 완료되었습니다.")
            console.log("result : " + res)
        }).catch(e => {
          alert("데이터 등록에 문제가 발생했습니다.")
          console.log("error : " + e.response.data)
        })
    }
  }
}
</script>
<style scoped>
  #login {
    margin-top: 50px;
  }
</style>