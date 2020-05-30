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
                            <input type="text" @input="username = $event.target.value" class="form-control" id="username"/>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" @input="password = $event.target.value" class="form-control" id="password" autocomplete="new-password"/>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary">Submit</button>
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
        }
    };
</script>