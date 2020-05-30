<template>
    <div class="container">
        <div class="row mt-5 mb-5">
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
                            <button @click="do_login('aaa', 'aaaa')" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            do_login(username, password) {
                const url = 'https://edimossilva-task-manager.herokuapp.com/auth/login';
                const params = {username, password};
                this.$http.post(url, params).then(
                    result => console.log(result.data),
                    error => {
                        console.log(error.response)
                    }
                );
            }
        }
    };
</script>