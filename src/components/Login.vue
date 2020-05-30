<template>
    <div class="container">
        <div class="row mt-5 mb-5 mx-auto">
            <div class="col-12">
                <div class="card" style="width: 500px;">
                    <div class="card-header">
                        <h5>Login</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" v-model="username" class="form-control" id="username"/>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" v-model="password" class="form-control" id="password" autocomplete="new-password"/>
                        </div>
                        <div class="form-group">
                            <button @click="do_login(username, password)" class="btn btn-primary">Login</button>
                            <button @click="go_back()" class="btn btn-secondary ml-2">Voltar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { do_login_api } from "../services/api.js";
    export default {
        data() {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            do_login(username, password) {
                do_login_api(username, password).then(
                  result => {
                      localStorage.token = result.data.token;
                      console.log(result.data);
                  },
                  error => console.log(error.response.data.error_message)
                );
            },
            go_back() {
                this.$router.go(-1);
            }
        }
    };
</script>